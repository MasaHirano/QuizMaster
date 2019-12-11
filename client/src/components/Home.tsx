import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Segment } from 'semantic-ui-react'
import { HomeProps } from '../types/homeTypes'

class Home extends Component<HomeProps> {

  componentDidMount() {
    this.props.onDidMount()
  }

  render() {
    const { questions } = this.props
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

export default Home
