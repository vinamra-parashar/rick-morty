import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { shallow } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
// components
import Navbar from '../Navbar'

afterEach(cleanup)

describe('Navbar landing', () => {
  const props = {}

  const wrapper = shallow(
    <Router>
      <Navbar {...props} />
    </Router>,
  )

  it('Navbar component should renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Navbar html element', () => {
    const { getByTestId } = render(wrapper)
    const logo = getByTestId('logo')

    expect(logo).toBeInTheDocument()
  })
})
