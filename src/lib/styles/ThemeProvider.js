import React from 'react'
import { useRouter } from 'next/router'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import BaseStyles from '@lib/styles/BaseStyles'
import { breakpoints, colors } from '@features/_ui/config'

const themeContext = React.createContext({})

const emotionTheme = {
  breakpoints: Object.keys(breakpoints).map(key => breakpoints[key]),
}

export default function ThemeProvider({ children }) {
  const router = useRouter()
  const themeMode = router.query.theme === 'dark' ? 'dark' : 'light'

  return (
    <themeContext.Provider value={themeMode}>
      <EmotionThemeProvider
        theme={{ ...emotionTheme, colors: colors[themeMode] }}>
        <BaseStyles />
        {children}
      </EmotionThemeProvider>
    </themeContext.Provider>
  )
}
