import { InputOnChangeData, FormProps } from "semantic-ui-react"
import { ChangeEvent, FormEvent } from "react"
import { RouteComponentProps } from "react-router-dom"
import { Action } from "redux"

export type QuestionId = {
  id: string
}
export type QuestionDetail = QuestionId & {
  content: string,
  answer: string,
  created_at: string,
  updated_at: string
}

type QuestionLoaded = {
  question: QuestionDetail
}
type AnswerResult = {
  correct: boolean,
  wrong: boolean,
}
type AnswerSubmission = {
  answer: string
}
export type QuestionState =
  & QuestionLoaded
  & AnswerResult
  & AnswerSubmission

export type QuestionDispatchProps = {
  onDidMount: (arg0: QuestionId) => void,
  onWillUnmount: () => void,
  onChange: (
    event: ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => void,
  onSubmit: (
    event: FormEvent<HTMLFormElement>,
    data: FormProps
  ) => void
}

export type QuestionProps =
  & QuestionState
  & QuestionDispatchProps
  & RouteComponentProps<QuestionId>

export const RECEIVE_QUESTION = 'RECEIVE_QUESTION'
export type ActionReceiveQuestion = Action<typeof RECEIVE_QUESTION> & QuestionLoaded

export const WRITE_ANSWER = 'WRITE_ANSWER'
export type ActionWriteAnswer = Action<typeof WRITE_ANSWER> & {
  name: string,
  value: string
}

export const RECEIVE_ANSWER_RESULT = 'RECEIVE_ANSWER_RESULT'
export type ActionReceiveAnswerResult = Action<typeof RECEIVE_ANSWER_RESULT> & {
  correct: boolean
}

export const CLEAR_STATE = 'CLEAR_STATE'
export type ActionClearState = Action<typeof CLEAR_STATE>

export type QuestionActionTypes =
  | ActionReceiveQuestion
  | ActionWriteAnswer
  | ActionReceiveAnswerResult
  | ActionClearState
