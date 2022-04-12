import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { shallow } from 'enzyme'
// components
import CardDetails from '../CardDetails'

afterEach(cleanup)

describe('CardDetails landing', () => {
  const props = {
    id: 1,
    fetchedData: {
      name: 'test',
      species: 'species',
      gender: 'male',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      status: 'Dead',
    },
    locationData: {
      dimension: 'dimension',
      residents: 'residents',
    },
    episodeData: {
      name: 'name',
      episode: 'so1',
    },
  }

  const wrapper = shallow(<CardDetails {...props} />)

  it('CardDetails component should renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('CardDetails elements renders correctly', () => {
    const { getByTestId } = render(wrapper)
    const title = getByTestId('h1')
    const img = getByTestId('img')
    const gender = getByTestId('gender')
    const species = getByTestId('species')
    const residents = getByTestId('residents')
    const location = getByTestId('location')
    const origin = getByTestId('origin')
    const dimension = getByTestId('dimension')
    const list = getByTestId('list')

    expect(title).toBeInTheDocument()
    expect(img).toBeInTheDocument()
    expect(gender).toBeInTheDocument()
    expect(species).toBeInTheDocument()
    expect(residents).toBeInTheDocument()
    expect(location).toBeInTheDocument()
    expect(origin).toBeInTheDocument()
    expect(dimension).toBeInTheDocument()
    expect(list).toBeInTheDocument()
  })
})
