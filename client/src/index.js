import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.css'

import Routes from './routes';
import './index.css';

ReactDOM.render(
  <Router>
    <Routes />
  </Router>
  , document.getElementById('root')
);
