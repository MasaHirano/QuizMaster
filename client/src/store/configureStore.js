import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import * as rootReducer from '../reducers'

export default function configureStore() {
  const store = createStore(
    combineReducers({
      ...rootReducer
    }),
    applyMiddleware(thunk)
  )

  return store;
}
