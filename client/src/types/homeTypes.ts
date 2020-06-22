import { Action } from 'redux';
import { RouterState } from 'connected-react-router';
import { QuestionState } from './questionTypes';

export type Question = {
  id: number,
  content: string
}

export type HomeState = {
  questions: Array<Question>
}
export type HomeDispatchProps = {
  onDidMount: () => void
}
export type HomeProps = HomeState & HomeDispatchProps

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export type ActionReceiveQuestions = Action<typeof RECEIVE_QUESTIONS> & HomeState

export type HomeActionTypes =
  | ActionReceiveQuestions

export type AppState = {
  home: HomeState,
  question: QuestionState,
  router: RouterState
}
