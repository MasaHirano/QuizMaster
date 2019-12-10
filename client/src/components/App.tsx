import React from 'react'
import { Container, Header, Icon, Divider } from 'semantic-ui-react'

class App extends React.Component {
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

export default App
