import Question from "../components/Question"
import { ActionCreator } from "redux"
import { ActionReceiveQuestion, RECEIVE_QUESTION, QuestionState } from "../types/homeTypes"
import { ThunkAction } from "redux-thunk"

const receiveQuestion: ActionCreator<ActionReceiveQuestion> =
  (question) => {
    return {
      type: RECEIVE_QUESTION,
      question
    }
  }
export const loadQuestion: (question: Question) => ThunkAction<void, QuestionState, undefined, ActionReceiveQuestion> =
  ({ id }: any) => (dispatch) => {
    window.fetch(`/api/questions/${id}`)
      .then(response => response.json())
      .then(json => dispatch(receiveQuestion(json)))
      .catch(error => console.error(error))
  }

export const WRITE_ANSWER = 'WRITE_ANSWER'
export const writeAnswer = (name: any, value: any) => {
  return {
    type: WRITE_ANSWER,
    name,
    value
  }
}

export const RECEIVE_ANSWER_RESULT = 'RECEIVE_ANSWER_RESULT'
export const receiveAnswerResult = (correct) => {
  return {
    type: RECEIVE_ANSWER_RESULT,
    correct
  }
}
export const submitAnswer = () => (dispatch, getState) => {
  const { question, answer } = getState().questionReducer
  window.fetch(`/api/questions/${question.id}/answer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ answer })
    })
    .then(response => response.json())
    .then(json => dispatch(receiveAnswerResult(json.correct)))
    .catch(error => console.error(error))
}

export const CLEAR_STATE = 'CLEAR_STATE'
export const clearState = () => {
  return {
    type: CLEAR_STATE
  }
}
