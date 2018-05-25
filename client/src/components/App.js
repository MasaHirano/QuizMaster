import React, { Component } from 'react'
import { Container, Header, Icon, Divider } from 'semantic-ui-react'
import PropTypes from 'prop-types'

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
        {this.props.children}
      </Container>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App
