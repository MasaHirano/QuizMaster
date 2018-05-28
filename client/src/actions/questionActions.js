import { createAction } from 'redux-actions'

export const receiveQuestion = createAction('RECEIVE_QUESTION')
export const loadQuestion = ({ id }) => (dispatch, getState) => {
  window.fetch(`/api/questions/${id}`)
    .then(response => response.json())
    .then(json => dispatch(receiveQuestion({ question: json })))
    .catch(error => console.error(error))
}

export const writeAnswer = createAction('WRITE_ANSWER')

export const receiveAnswerResult = createAction('RECEIVE_ANSWER_RESULT')
export const submitAnswer = () => (dispatch, getState) => {
  const { question, answer } = getState().questionReducer
  window.fetch(`/api/questions/${question.id}/answer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ answer })
    })
    .then(response => response.json())
    .then(json => dispatch(receiveAnswerResult(json)))
    .catch(error => console.error(error))
}
