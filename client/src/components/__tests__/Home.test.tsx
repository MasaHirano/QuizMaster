import React from 'react';
import { Segment } from 'semantic-ui-react';
import { shallow, ShallowWrapper } from 'enzyme';

import Home from '../Home';

describe('<Home />', () => {
  let onDidMountMock: jest.Mock;
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    const questions = [
      { id: 1, content: 'foo' },
      { id: 2, content: 'bar' },
    ];
    onDidMountMock = jest.fn();
    wrapper = shallow(
      <Home questions={questions} onDidMount={onDidMountMock} />
    );
  });

  describe('render()', () => {
    it('calls onDidMount', () => {
      expect(onDidMountMock).toHaveBeenCalled();
    });

    it('shows two rows when two questions are in state', () => {
      expect(wrapper.find(Segment)).toHaveLength(2);
    });
  });
});
