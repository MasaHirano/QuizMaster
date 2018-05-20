import React, { Component } from 'react'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Home extends Component {
  constructor() {
    super()
    this.state = {}
    this.getQuestions = this.getQuestions.bind(this)
    this.getQuestion = this.getQuestion.bind(this)
  }

  componentDidMount() {
    this.getQuestions()
  }

  fetch(endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getQuestions() {
    this.fetch('/api/questions')
      .then(questions => {
        if (questions.length) {
          this.setState({ questions: questions })
          this.getQuestion(questions[0].id)
        } else {
          this.setState({ questions: [] })
        }
      })
  }

  getQuestion(id) {
    this.fetch(`/api/questions/${id}`)
      .then(question => this.setState({question: question}))
  }

  render() {
    let { questions, question } = this.state
    return (
      <Container text>
        <Header as='h2' icon textAlign='center' color='teal'>
          <Icon name='unordered list' circular />
          <Header.Content>
            Questions
          </Header.Content>
        </Header>
        <Divider hidden section />
      {questions &&
        <Container>
          <Segment.Group>
            {questions.map((question, i) => {
              return (
                <Segment key={i} onClick={() => this.getQuestion(questions[i].id)}>
                  <Link to='#'>{question.content}</Link>
                </Segment>
              )
            })}
          </Segment.Group>
        </Container>
      }
      </Container>
    )
  }
}

export default Home
