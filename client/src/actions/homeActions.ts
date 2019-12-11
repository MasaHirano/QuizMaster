import { Question, RECEIVE_QUESTIONS, ActionReceiveQuestions, AppState } from "../types/homeTypes"
import { ThunkAction } from "redux-thunk"
import { ActionCreator } from "redux"

const receiveQuestions: ActionCreator<ActionReceiveQuestions> =
  (questions: Array<Question>) => {
    return {
      type: RECEIVE_QUESTIONS,
      questions
    }
  }

export const loadQuestions: () => ThunkAction<void, AppState, undefined, ActionReceiveQuestions> =
  () => (dispatch) => {
    window.fetch('/api/questions')
      .then(response => response.json())
      .then(json => dispatch(receiveQuestions(json)))
      .catch(error => console.log(error))
  }
