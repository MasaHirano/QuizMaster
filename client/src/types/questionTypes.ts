import { InputOnChangeData } from "semantic-ui-react"
import { ChangeEvent } from "react"
import { RouteComponentProps } from "react-router-dom"
import { Action } from "redux"

type QuestionId = {
  id: string
}
export type QuestionDetail = QuestionId & {
  content: string,
  answer: string,
  created_at: string,
  updated_at: string
}

export type QuestionState = {
  correct: boolean,
  wrong: boolean,
  answer: string,
  question: QuestionDetail
}
export type QuestionDispatchProps = {
  onDidMount: (arg0: QuestionId) => void,
  onWillUnmount: () => void,
  onChange: (
    event: ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => void,
  onSubmit: () => void
}
export type QuestionProps =
  & QuestionState
  & QuestionDispatchProps
  & RouteComponentProps<QuestionId>

export const RECEIVE_QUESTION = 'RECEIVE_QUESTION'
export type ActionReceiveQuestion = Action<typeof RECEIVE_QUESTION>
