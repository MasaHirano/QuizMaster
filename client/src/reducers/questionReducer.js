import {
  RECEIVE_QUESTION,
  WRITE_ANSWER,
  RECEIVE_ANSWER_RESULT
} from '../actions/questionActions'

const initialState = {
  correct: null,
  wrong: null,
  answer: '',
  question: { id: NaN, content: '', answer: '', created_at: '', updated_at: '' }
}

export default function questionReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_QUESTION:
      return Object.assign({}, state, {
        question: action.question
      })
    case WRITE_ANSWER:
      return Object.assign({}, state, {
        [action.name]: action.value
      })
    case RECEIVE_ANSWER_RESULT:
      return Object.assign({}, state, {
        correct: action.correct,
        wrong: !action.correct
      })
    default:
      return state
  }
}
