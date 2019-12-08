import { connect } from 'react-redux'

import Question from '../components/Question'
import {
  writeAnswer,
  submitAnswer,
  loadQuestion,
  clearState
} from '../actions/questionActions'

const mapStateToProps = ({ questionReducer }) => {
  return { ...questionReducer }
}

const mapDispatchToProps = (dispatch, _ownProps) => {
  return {
    onDidMount: (payload) => {
      dispatch(loadQuestion(payload))
    },

    onWillUnmount: () => {
      dispatch(clearState())
    },

    onChange: (_e, { name, value }) => {
      dispatch(writeAnswer(name, value))
    },

    onSubmit: (_e, _data) => {
      dispatch(submitAnswer())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
