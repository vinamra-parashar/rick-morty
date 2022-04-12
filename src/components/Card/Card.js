import React from 'react'

// library
import { Link } from 'react-router-dom'
import { Fragment } from 'react/cjs/react.production.min'
// css
import styles from './Card.module.scss'

const Card = ({ results }) => {
  let display
  if (results) {
    display = results.map((x) => {
      const { id, image, name, species, gender, status } = x

      return (
        <Fragment key={id}>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark">
            <div
              className={`${styles.card} d-flex flex-column justify-content-center`}
            >
              <img
                className={`${styles.img} img-fluid`}
                src={image}
                alt=""
                loading="lazy"
              />
              <div className={`${styles.content}`}>
                <div className="fs-5 fw-bold mb-1">{name}</div>
                <div className="">
                  <div className="fs-6 fw-normal">
                    Species - <span>{species}</span>
                  </div>
                  <div className="fs-6 fw-normal">
                    Gender - <span>{gender}</span>
                  </div>
                  <Link style={{ textDecoration: 'none' }} to={`/${id}`}>
                    <button type="button" className="btn btn-primary">
                      View More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {(() => {
              if (status === 'Dead') {
                return (
                  <div
                    className={`${styles.badge} position-absolute badge bg-danger`}
                  >
                    {status}
                  </div>
                )
              } else if (status === 'Alive') {
                return (
                  <div
                    className={`${styles.badge} position-absolute badge bg-success`}
                  >
                    {status}
                  </div>
                )
              } else {
                return (
                  <div
                    className={`${styles.badge} position-absolute badge bg-secondary`}
                  >
                    {status}
                  </div>
                )
              }
            })()}
          </div>
        </Fragment>
      )
    })
  } else {
    display = <div className="text-center">No Characters Found</div>
  }

  return display
}

export default Card
