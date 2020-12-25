import Notifications from './Notifications'
import Navigation from './Navigation'
import { useCSS } from '@lib/styles/fela'

export default function MainLayout({ children }) {
  const css = useCSS()

  return (
    <div className={css({ maxWidth: 960, margin: '0 auto' })}>
      <Notifications />
      <Navigation />
      <main>{children}</main>
    </div>
  )
}
