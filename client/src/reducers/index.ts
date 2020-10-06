import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';

import { History } from 'history';
import homeReducer from './homeReducer';
import questionReducer from './questionReducer';

const createRootReducer: (history: History) => Reducer = (history) =>
  combineReducers({
    home: homeReducer,
    question: questionReducer,
    router: connectRouter(history),
  });

export default createRootReducer;
