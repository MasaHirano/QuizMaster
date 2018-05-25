import { createAction } from 'redux-actions'

export const loadQuestion = createAction('LOAD_QUESTION')
export const writeAnswer = createAction('WRITE_ANSWER')
export const submitAnswer = createAction('SUBMIT_ANSWER')
