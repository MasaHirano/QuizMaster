export type Question = {
  id: Number,
  content: String
}

export type HomeProps = {
  onDidMount: () => void,
  questions: Array<Question>
}

export type HomeState = {
  questions: Array<Question>
}
