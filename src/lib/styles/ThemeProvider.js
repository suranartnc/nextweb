import { useState } from 'react'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import BaseStyles from '@lib/styles/BaseStyles'
import { breakpoints, variables } from '@modules/_ui/config'

const emotionTheme = {
  breakpoints: Object.keys(breakpoints).map(key => breakpoints[key]),
}

export default function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const themeMode = isDarkMode ? 'dark' : 'light'

  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  return (
    <EmotionThemeProvider
      theme={{
        ...emotionTheme,
        variables: variables[themeMode],
        themeMode,
        toggleTheme,
      }}>
      <BaseStyles />
      {children}
    </EmotionThemeProvider>
  )
}
