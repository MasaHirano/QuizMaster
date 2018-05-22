import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Home from '../Home';
import NotFound from '../NotFound';
import Question from '../Question';
import { Container, Header, Icon, Divider } from 'semantic-ui-react'

import { shallow } from 'enzyme'


describe('<Home />', () => {
  describe('render()', () => {
    it('should not render Home when accessed to /', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
          <App/>
        </MemoryRouter>
      );
      expect(wrapper.find(Home)).toHaveLength(1);
    });
  });
});