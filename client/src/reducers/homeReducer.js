import { handleActions } from 'redux-actions'

import {
  receiveQuestions
} from '../actions/homeActions'

const initialState = {
  questions: [{ id: NaN, content: '' }]
}

export default handleActions({
  [receiveQuestions]: (state, action) => ({
    ...state, ...action.payload
  })
}, initialState)
