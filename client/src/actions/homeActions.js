export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}
export const loadQuestions = () => (dispatch, getState) => {
  window.fetch('/api/questions')
    .then(response => response.json())
    .then(json => dispatch(receiveQuestions(json)))
    .catch(error => console.log(error))
}
