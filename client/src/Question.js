import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Button, Message, Form, Input } from 'semantic-ui-react'

class Question extends Component {
  constructor() {
    super()
    this.state = {
      correct: false,
      wrong: false
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
      {question &&
        <Form success={correct} error={wrong} onSubmit={this.handleSubmit}>
          <Form.Field>
            <div dangerouslySetInnerHTML={{ __html: question.content }} />
            <Input name='answer' onChange={this.handleChange} placeholder='Answer here' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
          <Button as={Link} to='/'>Back to home</Button>

          <Message
            success
            header='Correct!'
            content='Well done, challenger!'
          />
          <Message
            error
            header='Incorrect...'
            content='Try another answer!'
          />
        </Form>
      }
      </Container>
    )
  }
}

export default Question
