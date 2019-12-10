import { Question, HomeState } from "../types"
import { Dispatch } from "redux"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
const receiveQuestions = (questions: Array<Question>) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}
export const loadQuestions: () => (
  dispatch: Dispatch,
  getState: () => HomeState
) => void =
  () => (dispatch, _getState) => {
    window.fetch('/api/questions')
      .then(response => response.json())
      .then(json => dispatch(receiveQuestions(json)))
      .catch(error => console.log(error))
  }
