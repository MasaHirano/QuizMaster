import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { createMemoryHistory, createLocation } from 'history';
import Question from '../Question';
import { QuestionDetail, QuestionId } from '../../types/questionTypes';
import { match } from 'react-router-dom';

describe('<Question />', () => {
  let wrapper: ShallowWrapper;
  let onChangeMock: jest.Mock;
  let onSubmitMock: jest.Mock;

  const questionProps: QuestionDetail = {
    id: '1',
    content: 'foo',
    answer: 'Tokyo',
    created_at: '2020-06-10T10:00:00+09:00',
    updated_at: '2020-06-10T10:00:00+09:00'
  };

  const path = `/route/:id`;
  const match: match<QuestionId> = {
    isExact: false,
    path,
    url: path.replace(':id', '1'),
    params: { id: '1' }
  };
  const location = createLocation(match.url);

  beforeEach(() => {
    onChangeMock = jest.fn();
    onSubmitMock = jest.fn();
    wrapper = shallow(
      <Question
        question={questionProps}
        correct={false}
        wrong={false}
        answer={''}
        onDidMount={jest.fn()}
        onWillUnmount={jest.fn()}
        onChange={onChangeMock}
        onSubmit={onSubmitMock}
        history={createMemoryHistory()}
        location={location}
        match={match}
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
