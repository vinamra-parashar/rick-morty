/**
 * @description functions with post, put, get, delete method api call
 */

// core module
import axios from 'axios'

const accessToken = ''

// Set headers for All APIs
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

const headers2 = {
  Accept: 'application/json',
  'Content-Type': 'multipart/form-data',
}

/**
 *
 * @description all api status code constants
 */

export const API_STATUS_CODE = {
  NOT_FOUND: 404,
  SUCCESS: 200,
  INTERNAL_SERVER: 500,
  UPDATE: 204,
  EXIST: 406,
  CREATED: 201,
  UNAUTHORIZED: [401],
  ACCEPTED: 202,
  BAD_REQUEST: 400,
}

/**
 *
 * @description action to call get api with/without auth token
 * @param {*} url - API URL
 * @param {*} contenType - true for form-data and false for json, default false
 * @param {*} auth - true/false for auth token pass or not, default false
 * @memberof APIUtil
 */

export const getMethod = (url, contenType = false, auth = false) => {
  if (url !== false) {
    let headersSet = ''
    if (contenType === true) {
      headersSet = headers2
    } else {
      headersSet = headers
    }

    if (auth === true) {
      headersSet['Authorization'] = `Bearer ${accessToken}`
    }

    try {
      return axios
        .get(url, { headers: headersSet })
        .then((response) => response)
        .catch((error) => {
          if (error?.response) {
            if (error.response?.status) {
              if (error.response?.data) {
                console.error(
                  error.response.data?.message || error?.response?.data?.error,
                )
              }
            }
          }
        })
    } catch (error) {
      return { success: false, message: '500 (Internal Server Error)!' }
    }
  } else {
    return {
      success: false,
      message: 'Url is not defined!',
    }
  }
}
