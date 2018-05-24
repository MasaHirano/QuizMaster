const initialState = {
  correct: false,
  wrong: false,
  question: {
    id: NaN,
    content: '',
    answer: '',
    created_at: '',
    updated_at: ''
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_QUESTION':
      return Object.assign({}, state, action.payload)

    case 'WRITE_ANSWER':
      return Object.assign({}, state, {
        [action.payload.name]: action.payload.value
      });

    case 'SUBMIT_ANSWER':
      return Object.assign({}, state, {
        correct: action.payload.correct,
        wrong: !action.payload.correct,
      });

    default:
      return state;
  }
}
