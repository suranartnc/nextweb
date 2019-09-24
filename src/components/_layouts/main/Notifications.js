import React from 'react'
import { inject } from '@lib/store'

function Notifications({ errorStore }) {
  return (
    <div css={{ position: 'fixed', right: 0, top: 0, padding: '10px' }}>
      {errorStore.errors.map((error, index) => (
        <div
          key={index}
          css={{
            marginBottom: '10px',
            border: '1px solid black',
            fontSize: '14px',
            padding: '0px 15px',
            borderRadius: '5px',
            backgroundColor: '#222',
            color: '#fff',
          }}>
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
