import { Question, HomeState } from "../types"
import { Dispatch } from "redux"

type ActionReceiveQuestions = {
  type: String,
  questions: Array<Question>
}

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
const receiveQuestions: (questions: Array<Question>) => ActionReceiveQuestions =
  (questions) => {
    return {
      type: RECEIVE_QUESTIONS,
      questions
    }
  }

export const loadQuestions: () => (
  dispatch: Dispatch<ActionReceiveQuestions>,
  getState: () => HomeState
) => void =
  () => (dispatch, _getState) => {
    window.fetch('/api/questions')
      .then(response => response.json())
      .then(json => dispatch(receiveQuestions(json)))
      .catch(error => console.log(error))
  }
