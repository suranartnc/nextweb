import { forwardRef } from 'react'
import { useTheme } from '@emotion/react'
import Link from '@link'
import { useMember } from '@lib/auth'
import { media } from '@lib/styles/helpers'

const mainMenus = [
  {
    name: 'Home',
    route: 'home',
  },
  {
    name: 'About',
    route: 'about',
  },
]

const LinkItem = forwardRef(({ menu, ...props }, ref) => (
  <a
    {...props}
    ref={ref}
    css={{
      display: 'inline-box',
      padding: '5px 15px 10px 0px',
      marginRight: 50,
      [media('md')]: {
        fontSize: '1.2em',
      },
    }}>
    {menu.name}
  </a>
))

export default function Navigation() {
  const { variables, themeMode, toggleTheme } = useTheme()
  const { userData } = useMember()

  return (
    <nav css={{ marginBottom: 10, borderBottom: '1px solid #aaa' }}>
      {mainMenus.map(menu => (
        <Link key={menu.name} route={menu.route} passHref>
          <LinkItem menu={menu} />
        </Link>
      ))}

      {userData.isAuthenticated ? (
        <Link key="Account" route="auth-dashboard" passHref>
          <LinkItem menu={{ name: 'Account' }} />
        </Link>
      ) : (
        <Link key="Login" route="auth-login" passHref>
          <LinkItem menu={{ name: 'Login' }} />
        </Link>
      )}

      <button
        onClick={() => toggleTheme()}
        css={{
          float: 'right',
          padding: '8px 15px',
          border: `1px solid ${variables.colors.background.secondary}`,
          borderRadius: '5px',
          color: variables.colors.text.secondary,
          textTransform: 'capitalize',
        }}>
        {themeMode === 'light' ? 'dark' : 'light'} Mode
      </button>
    </nav>
  )
}
