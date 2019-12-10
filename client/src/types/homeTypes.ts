import { Action } from "redux"

export type Question = {
  id: Number,
  content: String
}

export type HomeState = {
  questions: Array<Question>
}
export type HomeProps = HomeState & {
  onDidMount: () => void
}

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export type ActionReceiveQuestions = Action<typeof RECEIVE_QUESTIONS> & HomeState

export type HomeActionTypes = ActionReceiveQuestions
