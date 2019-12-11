import { HomeState, RECEIVE_QUESTIONS, HomeActionTypes } from '../types/homeTypes'
import { Reducer } from 'redux'

const initialState: HomeState = {
  questions: [
    {
      id: NaN,
      content: ''
    }
  ]
}

const homeReducer: Reducer<HomeState, HomeActionTypes> =
  (state = initialState, action) => {
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

export default homeReducer
