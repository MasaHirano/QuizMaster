import { Question, HomeState, RECEIVE_QUESTIONS, ActionReceiveQuestions } from "../types/homeTypes"
import { ThunkAction } from "redux-thunk"
import { ActionCreator } from "redux"

const receiveQuestions: ActionCreator<ActionReceiveQuestions> =
  (questions: Array<Question>) => {
    return {
      type: RECEIVE_QUESTIONS,
      questions
    }
  }

export const loadQuestions: () => ThunkAction<void, HomeState, undefined, ActionReceiveQuestions> =
  () => (dispatch) => {
    window.fetch('/api/questions')
      .then(response => response.json())
      .then(json => dispatch(receiveQuestions(json)))
      .catch(error => console.log(error))
  }
