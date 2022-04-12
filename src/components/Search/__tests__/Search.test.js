import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { shallow } from 'enzyme'
// components
import Search from '../Search'

afterEach(cleanup)

describe('Search landing', () => {
  const props = {
    setSearch: jest.fn(),
    updatePageNumber: jest.fn(),
  }

  const wrapper = shallow(<Search {...props} />)

  it('Search component should renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Search html element', () => {
    const { getByTestId } = render(wrapper)
    const input = getByTestId('input')

    expect(input).toBeInTheDocument()
  })
})
