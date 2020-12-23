import Notifications from './Notifications'
import Navigation from './Navigation'

export default function MainLayout({ children }) {
  return (
    <div css={{ maxWidth: 960, margin: '0 auto' }}>
      <Notifications />
      <Navigation />
      <main>{children}</main>
    </div>
  )
}
