import {
  RECEIVE_QUESTIONS
} from '../actions/homeActions'

const initialState = {
  questions: [{ id: NaN, content: '' }]
}

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return Object.assign({}, state, {
        questions: action.questions
      })
    default:
      return state
  }
}
