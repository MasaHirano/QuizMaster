import { Question, HomeState } from "../types"
import { ThunkAction } from "redux-thunk"
import { ActionCreator, Action } from "redux"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
type ActionReceiveQuestions = Action<typeof RECEIVE_QUESTIONS> & {
  questions: Array<Question>
}
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
