import { Reducer } from 'redux';
import {
  QuestionState,
  RECEIVE_QUESTION,
  WRITE_ANSWER,
  RECEIVE_ANSWER_RESULT,
  CLEAR_STATE,
  QuestionActionTypes,
} from '../types/questionTypes';

const initialState: QuestionState = {
  correct: false,
  wrong: false,
  answer: '',
  question: {
    id: '',
    content: '',
    answer: '',
    createdAt: '',
    updatedAt: '',
  },
};

const questionReducer: Reducer<QuestionState, QuestionActionTypes> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case RECEIVE_QUESTION:
      return {
        ...state,
        question: action.question,
      };
    case WRITE_ANSWER:
      return {
        ...state,
        [action.name]: action.value,
      };
    case RECEIVE_ANSWER_RESULT:
      return {
        ...state,
        correct: action.correct,
        wrong: !action.correct,
      };
    case CLEAR_STATE:
      return initialState;
    default:
      return state;
  }
};

export default questionReducer;
