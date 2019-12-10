import {
  RECEIVE_QUESTIONS
} from '../actions/homeActions'
import { HomeState } from '../types'

const initialState: HomeState = {
  questions: [
    {
      id: NaN,
      content: ''
    }
  ]
}

export default function homeReducer(
  state: HomeState = initialState,
  action: any
): HomeState {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        questions: action.questions
      }
    default:
      return state
  }
}
