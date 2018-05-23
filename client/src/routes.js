import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import Home from './Home';
import Question from './Question';
import NotFound from './NotFound';

const Routes = () => (
  <App>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/question/:id' component={Question} />
      <Route component={NotFound} />
    </Switch>
  </App>
);

export default Routes;
