import { Action } from "redux"
import { QuestionState } from "./questionTypes"
import { RouterState } from "connected-react-router"

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

export type AppState = {
  home: HomeState,
  question: QuestionState,
  router: RouterState
}
