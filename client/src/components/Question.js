import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Button, Message, Form, Input } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class Question extends Component {
  componentDidMount() {
    this.props.onDidMount({ id: this.props.match.params.id })
  }

  render() {
    const { question, correct, wrong, onChange, onSubmit } = this.props
    return (
      <Container text>
      {question &&
        <Form success={correct} error={wrong} onSubmit={onSubmit}>
          <Form.Field>
            <div dangerouslySetInnerHTML={{ __html: question.content }} />
            <Input name='answer' onChange={onChange} placeholder='Answer here' />
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

Question.propTypes = {
  // attributes
  correct: PropTypes.bool,
  wrong: PropTypes.bool,
  answer: PropTypes.string,
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
  }),
  // functions
  onDidMount: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default Question
