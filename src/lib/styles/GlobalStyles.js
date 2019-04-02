import React from 'react'

import './sass/app.scss'

export default function GlobalStyles() {
  return (
    <React.Fragment>
      <style jsx="true" global="true">{`
        body {
          color: blue;
        }
      `}</style>
    </React.Fragment>
  )
}
