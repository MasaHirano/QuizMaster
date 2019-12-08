import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import homeReducer from './homeReducer'
import questionReducer from './questionReducer'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  homeReducer,
  questionReducer
})
export default createRootReducer
