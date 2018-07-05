import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './js/reducers/index.js';

// const initialState = {}
const enhancers = []
const middleware = [
  thunk,
]

if (process.env.NODE_ENV !== 'production') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  reducers,
// initialState,
  composedEnhancers
)

export default store