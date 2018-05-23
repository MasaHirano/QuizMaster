import React from 'react'
import { MemoryRouter } from 'react-router'
import { mount, shallow } from 'enzyme'

import Routes from './routes'
import Home from './Home'
import Question from './Question'
import NotFound from './NotFound'

jest.mock('./Home')
jest.mock('./Question')

const renderRoutes = path => (
  mount(
    <MemoryRouter initialEntries={[path]}>
      <Routes />
    </MemoryRouter>
  )
)

describe('#routes', () => {
  it('renders home page on initial route', () => {
    const component = renderRoutes('/')
    expect(component.find(Home)).toHaveLength(1)
  })

  it('renders question page for /question', () => {
    const component = renderRoutes('/question/1')
    expect(component.find(Question)).toHaveLength(1)
  })

  it('renders 404 page for /foobarbaz', () => {
    const component = renderRoutes('/foobarbaz')
    expect(component.find(NotFound)).toHaveLength(1)
  })
})
