import React from 'react'
import { Flex as RebassFlex } from '@rebass/grid/emotion'
export { Box } from '@rebass/grid/emotion'

export function Flex(props) {
  return <RebassFlex flexWrap="wrap" {...props} />
}
