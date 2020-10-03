import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../types/homeTypes';
import {
  QuestionId,
  RECEIVE_QUESTION,
  ActionReceiveQuestion,
  WRITE_ANSWER,
  ActionWriteAnswer,
  RECEIVE_ANSWER_RESULT,
  ActionReceiveAnswerResult,
  CLEAR_STATE,
  ActionClearState,
  QuestionDetail,
} from '../types/questionTypes';

const receiveQuestion: ActionCreator<ActionReceiveQuestion> = (
  question: QuestionDetail
) => ({
  type: RECEIVE_QUESTION,
  question,
});

export const loadQuestion: (
  questionParams: QuestionId
) => ThunkAction<void, AppState, undefined, ActionReceiveQuestion> = ({
  id,
}) => (dispatch) => {
  window
    .fetch(`/api/questions/${id}`)
    .then((response) => response.json())
    .then((json) =>
      dispatch(
        receiveQuestion({
          id: json.id,
          content: json.content,
          answer: json.answer,
          createdAt: json.created_at,
          updatedAt: json.updated_at,
        })
      )
    )
    .catch((error) => console.error(error));
};

export const writeAnswer: ActionCreator<ActionWriteAnswer> = (
  name: string,
  value: string
) => ({
  type: WRITE_ANSWER,
  name,
  value,
});

export const receiveAnswerResult: ActionCreator<ActionReceiveAnswerResult> = (
  correct: boolean
) => ({
  type: RECEIVE_ANSWER_RESULT,
  correct,
});

export const submitAnswer: () => ThunkAction<
  void,
  AppState,
  undefined,
  ActionReceiveAnswerResult
> = () => (dispatch, getState) => {
  const { question, answer } = getState().question;
  window
    .fetch(`/api/questions/${question.id}/answer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ answer }),
    })
    .then((response) => response.json())
    .then((json) => {
      dispatch(receiveAnswerResult(json.correct));
    })
    .catch((error) => console.error(error));
};

export const clearState: ActionCreator<ActionClearState> = () => ({
  type: CLEAR_STATE,
});
