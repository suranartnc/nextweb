import React from 'react'

import './sass/app.scss'

export default function GlobalStyles() {
  return (
    <React.Fragment>
      <style jsx="true" global="true">{`
        body {
          font-family: sans-serif;
        }
      `}</style>
    </React.Fragment>
  )
}
