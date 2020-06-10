import { Reducer } from 'redux';
import { HomeState, RECEIVE_QUESTIONS, HomeActionTypes } from '../types/homeTypes';

const initialState: HomeState = {
  questions: [
    {
      id: NaN,
      content: '',
    },
  ],
};

const homeReducer: Reducer<HomeState, HomeActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        questions: action.questions,
      };
    default:
      return state;
  }
};

export default homeReducer;
