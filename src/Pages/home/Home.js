import React, { useState, useEffect } from 'react'
// components
import Card from 'components/Card/Card'
import Pagination from 'components/Pagination/Pagination'
import Search from 'components/Search/Search'
// constants
import { API_URL } from 'contants/url.constants'
// utils
import { getMethod, API_STATUS_CODE } from 'utils/api'

const Home = () => {
  const [pageNumber, updatePageNumber] = useState(1)
  const [fetchedData, updateFetchedData] = useState([])
  const [search, setSearch] = useState('')

  const { info, results } = fetchedData

  const api = `${API_URL.GET_ALL_CHARACTERS}/?page=${pageNumber}&name=${search}`

  // fetch all characters data
  useEffect(() => {
    ;(async function () {
      const data = await getMethod(api)
      if (data?.status === API_STATUS_CODE.SUCCESS) {
        updateFetchedData(data?.data)
      }
    })()
  }, [api])
  return (
    <div className="App">
      <h1 className="text-center mb-3" data-testid="title">
        Characters
      </h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <Card results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  )
}

export default Home
