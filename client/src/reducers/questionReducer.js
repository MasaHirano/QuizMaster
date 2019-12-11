import {
  RECEIVE_QUESTION,
  WRITE_ANSWER,
  RECEIVE_ANSWER_RESULT,
  CLEAR_STATE
} from '../types/questionTypes'

const initialState = {
  correct: null,
  wrong: null,
  answer: '',
  question: {
    id: NaN,
    content: '',
    answer: '',
    created_at: '',
    updated_at: ''
  }
}

export default function questionReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_QUESTION:
      return {
        ...state,
        question: action.question
      }
    case WRITE_ANSWER:
      return {
        ...state,
        [action.name]: action.value
      }
    case RECEIVE_ANSWER_RESULT:
      return {
        ...state,
        correct: action.correct,
        wrong: !action.correct
      }
    case CLEAR_STATE:
      return initialState
    default:
      return state
  }
}
