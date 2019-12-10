import { Action } from "redux"

export type Question = {
  id: Number,
  content: String
}

export type HomeState = {
  questions: Array<Question>
}
export type HomeDispatchProps = {
  onDidMount: () => void
}
export type HomeProps = HomeState & HomeDispatchProps

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export type ActionReceiveQuestions = Action<typeof RECEIVE_QUESTIONS> & HomeState

export type HomeActionTypes =
  | ActionReceiveQuestions

// TODO: other states must be added
export type AppState = {
  home: HomeState
}
