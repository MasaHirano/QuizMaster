import { combineReducers, Reducer } from 'redux'
import { connectRouter } from 'connected-react-router'

import homeReducer from './homeReducer'
import questionReducer from './questionReducer'
import { History } from 'history'

const createRootReducer: (history: History) => Reducer =
  (history) => combineReducers({
    home: homeReducer,
    question: questionReducer,
    router: connectRouter(history)
  })

export default createRootReducer
