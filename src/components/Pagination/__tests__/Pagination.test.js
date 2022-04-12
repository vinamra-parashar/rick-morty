import React from 'react'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { shallow } from 'enzyme'
// components
import Pagination from '../Pagination'

afterEach(cleanup)

describe('Pagination landing', () => {
  const props = {
    pageNumber: 1,
    info: { pages: 10 },
    updatePageNumber: jest.fn(),
  }

  const wrapper = shallow(<Pagination {...props} />)

  it('Pagination component should renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
