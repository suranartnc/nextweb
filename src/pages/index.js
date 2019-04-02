import React from 'react'
import Helmet from 'react-helmet'

function Home() {
  return (
    <div>
      <Helmet title="Home" />
      Welcome to Next.js!
      <p>
        API: {process.env.PROTOCOL}://{process.env.HOST_NAME}:{process.env.PORT}
        {process.env.API_URL}
      </p>
      <p>
        STATIC: {process.env.PROTOCOL}://{process.env.HOST_NAME}:
        {process.env.PORT}
        {process.env.ASSET_PREFIX}
      </p>
      <img
        src={`${process.env.PROTOCOL}://${process.env.HOST_NAME}:${
          process.env.PORT
        }${process.env.ASSET_PREFIX}static/favicon.ico`}
      />
    </div>
  )
}

export default Home
