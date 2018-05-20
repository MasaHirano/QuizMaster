import React, { Component } from 'react'
import { Container, Header, Button, Icon, Divider, Form } from 'semantic-ui-react'

class Question extends Component {
  constructor() {
    super()
    this.state = {}
    this.getQuestion = this.getQuestion.bind(this)
  }

  componentDidMount() {
    const { id } = this.props.match.params
    this.getQuestion(id)
  }

  fetch(endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getQuestion(id) {
    this.fetch(`/api/questions/${id}`)
      .then(question => this.setState({ question: question }))
  }

  render() {
    let { question } = this.state
    return (
      <Container text>
        <Header as='h2' icon textAlign='center' color='teal'>
          <Icon name='unordered list' circular />
          <Header.Content>
            Question
          </Header.Content>
        </Header>
        <Divider hidden section />
      {question &&
        <Form>
          <Form.Field>
            <label>{question.content}</label>
            <input placeholder='Answer here' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      }
      </Container>
    )
  }
}

export default Question
