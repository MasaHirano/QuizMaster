import { connect } from 'react-redux'

import Question from '../components/Question'
import { writeAnswer, submitAnswer, loadQuestion } from '../actions/questionActions'

const mapStateToProps = ({ questionReducer }) => {
  return { ...questionReducer }
}

const mapDispatchToProps = (dispatch, _ownProps) => {
  return {
    onDidMount: (payload) => {
      dispatch(loadQuestion(payload))
    },

    onChange: (e, { name, value }) => {
      dispatch(writeAnswer(name, value))
    },

    onSubmit: (e, data) => {
      dispatch(submitAnswer())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
