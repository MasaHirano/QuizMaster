import React from 'react';
import { Route, Switch } from 'react-router';

import App from './components/App';
import Home from './containers/homeContainer';
import Question from './containers/questionContainer';
import NotFound from './components/NotFound';

const Routes = () => (
  <App>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/questions/:id" component={Question} />
      <Route component={NotFound} />
    </Switch>
  </App>
);

export default Routes;
