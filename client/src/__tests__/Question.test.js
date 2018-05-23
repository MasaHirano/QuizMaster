import React from 'react';
import Question from '../Question';
import { Segment, Input } from 'semantic-ui-react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router';

describe('<Question />', () => {
  let wrapper

  beforeAll(() => {
    Question.prototype._getQuestion = jest.fn(function() {
      this.setState({ question: { id: 1, content: 'foo', answer: 'bar' } })
    })
  })
  beforeEach(() => {
    const props = { match: { params: { id: 1 } } }
    wrapper = shallow(<Question {...props} />)
  })

  describe('_handleChange()', () => {
    it('sets input data to state', () => {
      const inputData = { name: 'answer', value: 'Tokyo' }
      wrapper.find('Input[name="answer"]').simulate('change', {}, inputData)
      expect(wrapper.instance().state).toHaveProperty(inputData.name, inputData.value)
    })
  })
})
