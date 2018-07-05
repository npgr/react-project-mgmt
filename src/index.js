import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
// import { ConnectedRouter } from 'react-router-redux'
import { HashRouter } from 'react-router-dom';
import store,  {/* history */} from './store'
import './style/index.css';
import App from './js/containers/App';
import registerServiceWorker from './registerServiceWorker';

render(
 <Provider store={store}>
  {/* <ConnectedRouter history={history}> */}
    <HashRouter>
      <App />
    </HashRouter>
  {/* </ConnectedRouter> */}
 </Provider>,
 document.getElementById('root')
);

registerServiceWorker();
