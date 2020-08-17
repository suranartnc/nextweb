import { css } from '@emotion/core'

import globalStyles from '@features/_ui/globalStyles'

import normalize from './_normalize'
import reset from './_reset'
import clearFix from './_clearFix'

export default css`
  ${normalize}
  ${reset}
  ${clearFix}
  ${globalStyles}
`
