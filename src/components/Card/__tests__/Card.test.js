import React from 'react'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { shallow } from 'enzyme'
// components
import Card from '../Card'

afterEach(cleanup)

describe('Card landing', () => {
  const props = {
    id: 1,
    name: 'test',
    species: 'species',
    gender: 'male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    status: 'Dead',
  }

  const wrapper = shallow(<Card {...props} />)

  it('Card component should renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
