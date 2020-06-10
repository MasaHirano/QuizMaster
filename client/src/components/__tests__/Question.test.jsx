import React from 'react';
import { shallow } from 'enzyme';

import Question from '../Question.tsx';

describe('<Question />', () => {
  let wrapper;
  let onChangeMock;
  let onSubmitMock;

  beforeEach(() => {
    onChangeMock = jest.fn();
    onSubmitMock = jest.fn();
    wrapper = shallow(
      <Question
        match={{ params: { id: 1 } }}
        question={{ id: 1, content: 'foo', answer: 'bar' }}
        onDidMount={jest.fn()}
        onChange={onChangeMock}
        onSubmit={onSubmitMock}
      />,
    );
    'Tokyo'.split('').reduce((accumulator, char) => {
      const joined = accumulator + char;
      wrapper.find('Input[name="answer"]').simulate('change', {}, joined);
      return joined;
    }, '');
  });

  describe('render()', () => {
    it('calls onChange five times when `Tokyo` is given in order', () => {
      expect(onChangeMock).toHaveBeenCalledTimes(5);
    });

    it('calls onSubmit when submit button is clicked', () => {
      wrapper.find('Form').simulate('submit');
      expect(onSubmitMock).toHaveBeenCalled();
    });
  });
});
