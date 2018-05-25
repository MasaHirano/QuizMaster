import { handleActions } from 'redux-actions'

import {
  receiveQuestion,
  writeAnswer,
  receiveAnswerResult
} from '../actions/questionActions'

const initialState = {
  correct: null,
  wrong: null,
  answer: '',
  question: { id: NaN, content: '', answer: '', created_at: '', updated_at: '' }
}

export default handleActions({
  [receiveQuestion]: (state, action) => ({
    ...state, ...action.payload
  }),

  [writeAnswer]: (state, action) => ({
    ...state,
    [action.payload.name]: action.payload.value
  }),

  [receiveAnswerResult]: (state, action) => ({
    ...state,
    correct: action.payload.correct,
    wrong: !action.payload.correct
  }),
}, initialState)
