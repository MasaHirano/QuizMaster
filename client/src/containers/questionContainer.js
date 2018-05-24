import { connect } from 'react-redux'
import Question from '../components/Question'
import { writeAnswer, submitAnswer, loadQuestion } from '../actions/questionActions'

const mapStateToProps = ({ questionReducer }) => {
  return { ...questionReducer }
}

const fetchQuestion = (id, afterFetch) => {
  window.fetch(`/api/questions/${id}`)
    .then(response => response.json())
    .then(json => afterFetch(json))
    .catch(error => console.error(error))
}

const sendAnswer = ({ question, answer }, afterSend) => {
  window.fetch(`/api/questions/${question.id}/answer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ answer })
    })
    .then(response => response.json())
    .then(json => afterSend(json))
    .catch(error => console.error(error))
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDidMount: ({ id }) => {
      fetchQuestion(id, (json) => {
        dispatch(loadQuestion({ question: json }))
      })
    },

    onChange: (e, { name, value }) => {
      dispatch(writeAnswer({ name, value }))
    },

    onSubmit: (props) => {
      sendAnswer(props, (json) => {
        dispatch(submitAnswer({ ...json }))
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
