import { Fragment } from 'react'
import { Global, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import getGlobalStyles from '@modules/_ui/globalStyles'

import normalize from './_normalize'
import reset from './_reset'
import clearFix from './_clearFix'

const getBaseStyles = colors => css`
  ${normalize}
  ${reset}
  ${clearFix}
  ${getGlobalStyles(colors)}
`

export default function BaseStyles() {
  const { variables } = useTheme()

  return (
    <Fragment>
      <Global styles={getBaseStyles(variables)} />
    </Fragment>
  )
}
