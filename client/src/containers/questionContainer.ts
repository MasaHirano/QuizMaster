import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'

import Question from '../components/Question'
import {
  writeAnswer,
  submitAnswer,
  loadQuestion,
  clearState
} from '../actions/questionActions'
import { QuestionState, QuestionDispatchProps, QuestionActionTypes } from '../types/questionTypes'
import { AppState } from '../types/homeTypes'
import { ThunkDispatch } from 'redux-thunk'

const mapStateToProps: MapStateToProps<QuestionState, any, AppState> =
  (state: AppState) => state.question

const mapDispatchToProps: MapDispatchToProps<QuestionDispatchProps, any> =
  (dispatch: ThunkDispatch<AppState, undefined, QuestionActionTypes>) => {
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

      onSubmit: () => {
        dispatch(submitAnswer())
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Question)
