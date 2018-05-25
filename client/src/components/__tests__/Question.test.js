import React from 'react';
import { Segment, Input } from 'semantic-ui-react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router'

import Question from '../Question'

describe('<Question />', () => {
  let wrapper
  let onChangeMock
  let onSubmitMock

  beforeEach(() => {
    onChangeMock = onSubmitMock = jest.fn()
    const props = {
      match: { params: { id: 1 } },
      question: { id: 1, content: 'foo', answer: 'bar' },
      onDidMount: jest.fn(),
      onChange: onChangeMock,
      onSubmit: onSubmitMock
    }
    wrapper = shallow(<Question {...props} />)
  })

  beforeEach(() => {
    const chars = ['T', 'o', 'k', 'y', 'o']
    chars.reduce((joined, char) => {
      wrapper.find('Input[name="answer"]').simulate('change', {}, joined += char)
      return joined
    }, '')
  })

  describe('render()', () => {
    it('calls onChange five times when `Tokyo` is given in order', () => {
      expect(onChangeMock).toHaveBeenCalledTimes(5)
    })

    it('calls onSubmit once when submit button is clicked', () => {
      wrapper.find('Form').simulate('click')
      expect(onSubmitMock).toHaveBeenCalled()
    })
  })
})
