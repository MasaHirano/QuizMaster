import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router';

import App from '../App';
import Home from '../Home';
import NotFound from '../NotFound';

jest.mock('../Home')

describe('<App />', () => {
  describe('render()', () => {
    it('should render Home when accessed to /', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
          <App />
        </MemoryRouter>
      );
      expect(wrapper.find(Home)).toHaveLength(1);
      expect(wrapper.find(NotFound)).toHaveLength(0);
    });

    it('should render NotFound when accessed to /foo', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={[ '/foo' ]}>
          <App />
        </MemoryRouter>
      );
      expect(wrapper.find(Home)).toHaveLength(0);
      expect(wrapper.find(NotFound)).toHaveLength(1);
    });
  });
});
