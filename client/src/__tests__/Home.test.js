import React from 'react';
import Home from '../Home';
import { Segment } from 'semantic-ui-react'
import { shallow } from 'enzyme'

describe('<Home />', () => {
  let subject

  beforeAll(() => {
    Home.prototype._getQuestions = jest.fn(function() {
      this.setState({ questions: [{ id: 1, content: 'foo' }, { id: 2, content: 'bar' }] })
    })
  })
  beforeEach(() => {
    subject = shallow(<Home />)
  })

  describe('render()', () => {
    it('shows two rows when two questions are in state', () => {
      expect(subject.find(Segment)).toHaveLength(2)
    })
  })
})
