import { useTheme } from 'emotion-theming'
import { useFela } from 'react-fela'

export { default as FelaProvider } from './FelaProvider'
export { default as getFelaRenderer } from './getFelaRenderer'

export function useCSS(props = {}) {
  const { variables } = useTheme()
  const { css } = useFela({ ...variables, ...props })
  return css
}
