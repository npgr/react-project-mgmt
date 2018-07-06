import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
// import { ConnectedRouter } from 'react-router-redux'
import { HashRouter } from 'react-router-dom';
import { IntlProvider, addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_es from 'react-intl/locale-data/es';
import messages_es from "./translations/es.json";
import messages_en from "./translations/en.json";
import store,  {/* history */} from './store'
import './style/index.css';
import App from './js/containers/App';
import registerServiceWorker from './registerServiceWorker';

addLocaleData([...locale_en, ...locale_es]);
const language = navigator.language.split(/[-_]/)[0];  // language without region code
const messages = {
  'es': messages_es,
  'en': messages_en
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
