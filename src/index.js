import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux'
import { HashRouter } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import localeEn from 'react-intl/locale-data/en';
import localeEs from 'react-intl/locale-data/es';
import messagesEs from './i18n/es.json';
import messagesEn from './i18n/en.json';
import store,  {/* history */} from './store';
import './style/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './js/containers/App.jsx';
import registerServiceWorker from './registerServiceWorker';

addLocaleData([...localeEn, ...localeEs]);
const language = navigator.language.split(/[-_]/)[0];  // language without region code
const messages = {
  'es': messagesEs,
  'en': messagesEn
};

render(
  <Provider store={store}>
    <IntlProvider locale={language} messages={messages[language]}>
      {/* <ConnectedRouter history={history}> */}
      <HashRouter>
        <App />
      </HashRouter>
      {/* </ConnectedRouter> */}
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
