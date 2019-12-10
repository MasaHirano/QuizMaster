import React, { Component } from 'react'
import { Container, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Home extends Component {
  componentDidMount() {
    this.props.onDidMount()
  }

  render() {
    let { questions } = this.props
    return (
      <Container text>
        {questions &&
          <Container>
            <Segment.Group>
              {questions.map((question, i) => (
                <Segment key={i}>
                  <Link to={`/questions/${question.id}`}>
                    {question.content.replace(/<[^>]+>/g, '')}
                  </Link>
                </Segment>
              ))}
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
  )
}

export default Home
