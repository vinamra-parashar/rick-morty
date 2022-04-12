import React, { useState, useEffect } from 'react'
// library
import { useParams } from 'react-router-dom'
// constants
import { API_URL } from 'contants/url.constants'
// utils
import { getMethod, API_STATUS_CODE } from 'utils/api'
import { Fragment } from 'react/cjs/react.production.min'

const CardDetails = () => {
  const { id } = useParams()

  const [fetchedData, updateFetchedData] = useState([])
  const [locationData, setLocationData] = useState([])
  const [episodeData, setEpisodeData] = useState([])

  const [loading, setLoading] = useState(false)

  const { name, location, origin, gender, image, species, status } = fetchedData

  const api = `${API_URL.GET_ALL_CHARACTERS}/${id}`

  // fetch single character with props id

  useEffect(() => {
    ;(async function () {
      setLoading(true)
      const data = await getMethod(api)
      setLoading(false)
      if (data?.status === API_STATUS_CODE.SUCCESS) {
        updateFetchedData(data?.data)
      }
    })()
  }, [api])

  // fetch single character locations

  useEffect(() => {
    if (location && location?.url) {
      ;(async function () {
        const data = await getMethod(location?.url)
        setLoading(false)
        if (data?.status === API_STATUS_CODE.SUCCESS) {
          setLocationData(data?.data)
        }
      })()
    }
  }, [location])

  // fetch single character episodes

  useEffect(() => {
    if (name) {
      ;(async function () {
        // create array of episodes number first
        const arr = await fetchedData?.episode?.map((url) =>
          url.split('/').pop(),
        )
        const data = await getMethod(`${API_URL.GET_ALL_EPISODES}/${arr}`)
        setLoading(false)
        if (data?.status === API_STATUS_CODE.SUCCESS) {
          setEpisodeData(data?.data)
        }
      })()
    }
  }, [name, fetchedData?.episode])

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center" data-testid="h1">
          {name}
        </h1>

        <img
          className="img-fluid"
          src={image}
          alt=""
          loading="lazy"
          data-testid="img"
        />
        {(() => {
          if (status === 'Dead') {
            return <div className="badge bg-danger fs-5">{status}</div>
          } else if (status === 'Alive') {
            return <div className=" badge bg-success fs-5">{status}</div>
          } else {
            return <div className="badge bg-secondary fs-5">{status}</div>
          }
        })()}
        <div className="content">
          <div>
            <span className="fw-bold" data-testid="gender">
              Gender :{' '}
            </span>
            {gender}
          </div>
          <div>
            <span className="fw-bold" data-testid="species">
              Species:{' '}
            </span>
            {species}
          </div>
          <div>
            <span className="fw-bold" data-testid="location">
              Location:{' '}
            </span>
            {location?.name}
          </div>
          <div>
            <span className="fw-bold" data-testid="origin">
              Origin:{' '}
            </span>
            {origin?.name}
          </div>
          <div>
            <span className="fw-bold" data-testid="dimension">
              Dimension:{' '}
            </span>
            {locationData?.dimension}
          </div>
          <div>
            <span className="fw-bold" data-testid="residents">
              Amount of Residents:{' '}
            </span>
            {locationData?.residents ? locationData?.residents?.length : 0}
          </div>
          <div className="fw-bold" data-testid="episodes">
            Episodes:
          </div>
          <ul className="list-group" data-testid="list">
            {episodeData && episodeData?.length > 0 ? (
              episodeData?.map((ep) => (
                <Fragment key={ep?.id}>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    {ep?.name}
                    <span className="badge bg-primary rounded-pill">
                      {ep?.episode}
                    </span>
                  </li>
                </Fragment>
              ))
            ) : (
              <li className="list-group-item d-flex justify-content-between align-items-center">
                No Episodes
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CardDetails
