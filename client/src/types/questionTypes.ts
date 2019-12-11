import { InputOnChangeData } from "semantic-ui-react"
import { ChangeEvent } from "react"
import { NavLinkProps, match, RouteComponentProps } from "react-router-dom"

type QuestionId = {
  id: number
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
