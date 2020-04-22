import React from 'react'
import { inject } from '@lib/store'

function Notifications({ errorStore }) {
  return (
    <div className="fixed top-0 right-0 p-4">
      {errorStore.errors.map((error, index) => (
        <div
          key={index}
          className="mb-4 border border-black rounded-md text-sm py-0 px-3 text-white bg-gray-900">
          <p>{error.title}</p>
          <a
            onClick={() => {
              errorStore.removeError(error.id)
            }}>
            X
          </a>
        </div>
      ))}
    </div>
  )
}

export default inject('errorStore')(Notifications)
