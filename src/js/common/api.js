import cloneDeep from 'lodash.clonedeep';
import BackendError from './BackendError';
import { parse, stringify } from './serializer';
// import { CORRESPONDENCE_LOGIN, TEMPLATES_LOGIN } from 'common/routes';

const buildFilesFormData = files => {
  const formData = new FormData();
  for (const file of files) {
    formData.append('file', file, file.name);
  }
  return formData;
};

const NETWORK_ERROR = new BackendError(
  {},
  {
    message: 'NETWORK ERROR',
    type: 'UNRECOVERABLE'
  }
);

/* const redirectToLogin = () => {
  const href = encodeURIComponent(window.location.href);
  if (!href.includes('login')) {
    if (href.toLowerCase().includes('correspondence')) {
      window.location = `#${CORRESPONDENCE_LOGIN}`;
    } else {
      window.location = `#${TEMPLATES_LOGIN}`;
    }
  }
};*/

const CSRF_HEADER_NAME = 'X-CSRF-HEADER-NAME';
let csrfHeaderName = null;
let csrfToken = null;

const checkCsrfHeaders = response => {
  let auxCsrfHeaderName = response.headers.get(CSRF_HEADER_NAME);
  if (auxCsrfHeaderName) {
    let auxCsrfToken = response.headers.get(auxCsrfHeaderName);
    if (auxCsrfToken) {
      csrfToken = auxCsrfToken;
      csrfHeaderName = auxCsrfHeaderName;
    }
  }
};

const REGEX_DOUBLE_SLASH = /\/\//g;
const REGEX_DOUBLE_DOT = /\.\./g;
const REGEX_JSON = /json/;
const REGEX_FORM = /multipart/;
const REGEX_BLOB = /pdf|xml/;

const defaultOpts = {
  baseUrl: '/api',
  defaultOptions: {}
};

export default class Api {
  constructor(options = defaultOpts) {
    this.baseUrl = options.baseUrl;
    this.defaultOptions = {
      credentials: 'same-origin',
      ...options.defaultOptions
    };
    this.defaultOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...options.defaultOptions.headers
    };
  }

  getUrl(originalUrl) {
    const url = `${this.baseUrl}${originalUrl}`;
    return url.replace(REGEX_DOUBLE_SLASH, '/').replace(REGEX_DOUBLE_DOT, '');
  }

  fetch(url, options) {
    return fetch(url, options)
      .catch(() => {
        throw NETWORK_ERROR;
      })
      .then(this.parseBody)
      .then(this.checkStatus.bind(this, url, options));
  }

  parseBody(response) {
    checkCsrfHeaders(response);

    const contentType = response.headers.get('Content-Type');
    let parsePromise;

    if (REGEX_JSON.test(contentType)) {
      parsePromise = response.text().then(parse);
    } else if (REGEX_FORM.test(contentType)) {
      parsePromise = response.formData();
    } else if (REGEX_BLOB.test(contentType)) {
      parsePromise = response.blob();
    } else {
      parsePromise = response.text();
    }

    return parsePromise.then(parsedBody => ({ response, parsedBody }));
  }

  checkStatus(url, options, { response, parsedBody }) {
    if (response.ok) {
      return parsedBody;
    }

    switch (response.status) {
      case 401:
        // redirectToLogin();
      default:
    }

    throw new BackendError(response, parsedBody);
  }

  genericRequest(method, originalUrl, options) {
    const url = this.getUrl(originalUrl);
    const opt = { ...cloneDeep(this.defaultOptions), ...options, method };
    opt.headers = { ...this.defaultOptions.headers, ...options.headers };

    if (opt.method === 'GET' || opt.body instanceof FormData) {
      opt.headers['Content-Type'] = null;
    }

    if (REGEX_JSON.test(opt.headers['Content-Type'])) {
      opt.body = stringify(opt.body);
    }

    if (csrfToken) {
      opt.headers[csrfHeaderName] = csrfToken;
    }

    return this.fetch(url, opt);
  }

  get(originalUrl, options = {}) {
    return this.genericRequest('GET', originalUrl, options);
  }

  post(originalUrl, options = {}) {
    return this.genericRequest('POST', originalUrl, options);
  }

  put(originalUrl, options = {}) {
    return this.genericRequest('PUT', originalUrl, options);
  }

  patch(originalUrl, options = {}) {
    return this.genericRequest('PATCH', originalUrl, options);
  }

  delete(originalUrl, options = {}) {
    options.headers = options.headers || {};
    options.headers.Accept = options.headers.Accept || '*';
    return this.genericRequest('DELETE', originalUrl, options);
  }

  uploadFiles(url = '', files = [], additionalData = {}, eventListeners) {
    const formData = buildFilesFormData(files);

    for (const [key, value] of Object.entries(additionalData)) {
      formData.append(key, value);
    }

    if (!eventListeners) {
      return this.post(url, { body: formData });
    }

    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();

      request.open('POST', this.getUrl(url));
      request.setRequestHeader('Accept', 'application/json');
      request.setRequestHeader(csrfHeaderName, csrfToken);
      request.onload = ({ target: { status, response } }) => {
        let parsedBody = null;
        if (REGEX_JSON.test(request.getResponseHeader('Content-Type'))) {
          parsedBody = parse(response);
        } else {
          parsedBody = response;
        }

        if (status > 199 && status < 400) {
          return resolve(parsedBody);
        }

        switch (status) {
          case 401:
            // redirectToLogin();
          default:
            reject(new BackendError(response, parsedBody));
        }
      };
      request.onerror = () => reject(NETWORK_ERROR);

      if (request.upload) {
        for (let eventName in eventListeners) {
          if (eventListeners.hasOwnProperty(eventName)) {
            request.upload[eventName] = eventListeners[eventName];
          }
        }
      }

      request.send(formData);
    });
  }
}
