import React from 'react';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';

import Routes from './routes';
import Home from './containers/homeContainer';
import Question from './containers/questionContainer';
import NotFound from './components/NotFound';

jest.mock('./containers/homeContainer');
jest.mock('./containers/questionContainer');

const renderRoutes = (path: string) =>
  mount(
    <MemoryRouter initialEntries={[path]}>
      <Routes />
    </MemoryRouter>
  );

describe('#routes', () => {
  it('renders home page on initial route', () => {
    const component = renderRoutes('/');
    expect(component.find(Home)).toHaveLength(1);
  });

  it('renders question page for /questions', () => {
    const component = renderRoutes('/questions/1');
    expect(component.find(Question)).toHaveLength(1);
  });

  it('renders 404 page for /foobarbaz', () => {
    const component = renderRoutes('/foobarbaz');
    expect(component.find(NotFound)).toHaveLength(1);
  });
});
