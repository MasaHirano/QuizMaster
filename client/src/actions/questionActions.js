export const RECEIVE_QUESTION = 'RECEIVE_QUESTION'
const receiveQuestion = (question) => {
  return {
    type: RECEIVE_QUESTION,
    question
  }
}
export const loadQuestion = ({ id }) => (dispatch, _getState) => {
  window.fetch(`/api/questions/${id}`)
    .then(response => response.json())
    .then(json => dispatch(receiveQuestion(json)))
    .catch(error => console.error(error))
}

export const WRITE_ANSWER = 'WRITE_ANSWER'
export const writeAnswer = (name, value) => {
  return {
    type: WRITE_ANSWER,
    name,
    value
  }
}

export const RECEIVE_ANSWER_RESULT = 'RECEIVE_ANSWER_RESULT'
export const receiveAnswerResult = (correct) => {
  return {
    type: RECEIVE_ANSWER_RESULT,
    correct
  }
}
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
    .then(json => dispatch(receiveAnswerResult(json.correct)))
    .catch(error => console.error(error))
}

export const CLEAR_STATE = 'CLEAR_STATE'
export const clearState = () => {
  return {
    type: CLEAR_STATE
  }
}
