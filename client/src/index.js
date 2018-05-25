import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import 'semantic-ui-css/semantic.css'

import configureStore from './store/configureStore'
import Routes from './routes';
import './index.css';

const store = configureStore()
const history = createHistory()

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root')
);
