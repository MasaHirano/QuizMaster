import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { createStore, combineReducers } from 'redux'
import { ConnectedRouter } from 'react-router-redux'
import 'semantic-ui-css/semantic.css'

import * as rootReducer from './reducers';
import Routes from './routes';
import './index.css';

const history = createHistory()

const store = createStore(
  combineReducers({
    ...rootReducer
  })
);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root')
);
