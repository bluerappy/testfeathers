// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';

import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../src/sagas/rootSaga';
import reducers from "./reducers"

const sagaMiddleware = createSagaMiddleware();

const store = createStore( reducers,
  applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();