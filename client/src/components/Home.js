import React, { Component } from 'react'
import { Container, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this._getQuestions = this._getQuestions.bind(this)
  }

  componentDidMount() {
    this._getQuestions()
  }

  fetch(endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  _getQuestions() {
    this.fetch('/api/questions')
      .then(questions => {
        if (questions && questions.length) {
          this.setState({ questions })
        } else {
          this.setState({ questions: [] })
        }
      })
  }

  render() {
    let { questions } = this.state
    return (
      <Container text>
      {questions &&
        <Container>
          <Segment.Group>
          {questions.map((question, i) => {
            return (
              <Segment key={i}>
                <Link to={`/questions/${question.id}`}>{question.content.replace(/<[^>]+>/g, '')}</Link>
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

Home.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default Home
