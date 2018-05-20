import React, { Component } from 'react'
import { Container, Header, Button, Message, Icon, Divider, Form, Input } from 'semantic-ui-react'

class Question extends Component {
  constructor() {
    super()
    this.state = {
      correct: false,
      wrong: false,
    }

    const methods = ['getQuestion', 'handleChange', 'handleSubmit']
    methods.forEach(method => this[method] = this[method].bind(this));
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

  handleChange(e, { name, value }) {
    this.setState({ [name]: value })
  }

  handleSubmit(e, data) {
    const { question, answer } = this.state
    window.fetch(`/api/questions/${question.id}/answer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answer })
      })
      .then(response => response.json())
      .then(result => this.setState({ correct: result.correct, wrong: !result.correct }))
      .catch(error => console.log(error))
  }

  render() {
    let { question, correct, wrong } = this.state
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
        <Form success={correct} error={wrong} onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>{question.content}</label>
            <Input name='answer' onChange={this.handleChange} placeholder='Answer here' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
          <Message
            success
            header='Form Completed'
            content="You're all signed up for the newsletter"
          />
          <Message
            error
            header='Action Forbidden'
            content='You can only sign up for an account once with a given e-mail address.'
          />
        </Form>
      }
      </Container>
    )
  }
}

export default Question
