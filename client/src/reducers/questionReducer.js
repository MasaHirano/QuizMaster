import { handleActions } from 'redux-actions'

import {
  loadQuestion,
  writeAnswer,
  submitAnswer
} from '../actions/questionActions'

const initialState = {
  correct: false,
  wrong: false,
  answer: '',
  question: {
    id: NaN,
    content: '',
    answer: '',
    created_at: '',
    updated_at: ''
  }
}

export default handleActions({
  [loadQuestion]: (state, action) => Object.assign({}, state, action.payload),

  [writeAnswer]: (state, action) => Object.assign({}, state, {
    [action.payload.name]: action.payload.value
  }),

  [submitAnswer]: (state, action) => Object.assign({}, state, {
    correct: action.payload.correct,
    wrong: !action.payload.correct
  }),

}, initialState)
