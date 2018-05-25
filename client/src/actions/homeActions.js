import { createAction } from 'redux-actions'

export const receiveQuestions = createAction('RECEIVE_QUESTIONS')
export const loadQuestions = () => (dispatch, getState) => {
  window.fetch('/api/questions')
    .then(response => response.json())
    .then(json => dispatch(receiveQuestions({ questions: json })))
    .catch(error => console.log(error))
}
