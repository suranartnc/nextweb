import React from 'react'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import BaseStyles from '@lib/styles/BaseStyles'
import { breakpoints, variables } from '@features/_ui/config'

const themeContext = React.createContext({})

const emotionTheme = {
  breakpoints: Object.keys(breakpoints).map(key => breakpoints[key]),
}

export default function ThemeProvider({ children }) {
  const themeMode = Object.keys(variables)[0]

  return (
    <themeContext.Provider value={themeMode}>
      <EmotionThemeProvider
        theme={{ ...emotionTheme, variables: variables[themeMode] }}>
        <BaseStyles />
        {children}
      </EmotionThemeProvider>
    </themeContext.Provider>
  )
}
