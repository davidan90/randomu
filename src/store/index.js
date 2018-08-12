import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducers';
import rootSaga from './rootSagas';

const reduxDevTools = window.navigator.userAgent.includes('Chrome')
  ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  : compose;

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const enhancers = [
    applyMiddleware(sagaMiddleware),
    process.env.NODE_ENV === 'development' ? reduxDevTools : compose
  ];

  const store = createStore(
    rootReducer,
    compose(...enhancers)
  );

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('./rootReducers', () => {
      store.replaceReducer(require('./rootReducers').default);
    });
  }

  return store;
};

export default configureStore;
