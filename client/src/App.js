import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container, Header, Icon, Divider } from 'semantic-ui-react'
import Home from './Home'
import Question from './Question'
import NotFound from './NotFound'

class App extends Component {
  render() {
    return(
      <Container text>
        <Header as='h2' icon textAlign='center' color='teal'>
          <Icon name='question' circular />
          <Header.Content>
            Quiz Master
          </Header.Content>
        </Header>
        <Divider section />
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/question/:id' exact component={Question} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Container>
    )
  }
}

export default App
