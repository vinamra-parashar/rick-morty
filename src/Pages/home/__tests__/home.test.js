import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { shallow } from 'enzyme'
// components
import Home from '../Home'

afterEach(cleanup)

describe('Home landing', () => {
  const props = {}

  const wrapper = shallow(<Home {...props} />)

  it('Home component should renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Home html element', () => {
    const { getByTestId } = render(wrapper)
    const title = getByTestId('title')

    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent('Characters')
  })
})
