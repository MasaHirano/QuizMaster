import React from 'react'
import { Route, Switch } from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import Question from './components/Question'
import NotFound from './components/NotFound'

const Routes = () => (
  <App>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/questions/:id' component={Question} />
      <Route component={NotFound} />
    </Switch>
  </App>
)

export default Routes
