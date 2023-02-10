import { AppBar, Toolbar } from '@mui/material'
import { CSSProperties, useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DesignHeader from '../../design-system/DesignText/DesignHeader'
import DesignText from '../../design-system/DesignText/DesignText'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { color } from '../../theme/color'
import Dashboard from '../Dashboard/Dashboard'
import { closeModal } from '../Dashboard/stores/modalSlice'
import Login from '../Login/Login'
import { resetAuth, selectAuth } from '../Login/stores/authSlice'

// =================
// Routes
// =================
const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])

export default function App() {
  // =================
  // Stores
  // =================
  const auth = useAppSelector(selectAuth)
  const dispatch = useAppDispatch()

  // =================
  // States
  // =================
  const [authenticated, setAuthenticated] = useState(false)

  // =================
  // Hooks
  // =================
  useEffect(() => {
    authenticate()
    resetStores()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.token])

  // =================
  // Methods
  // =================
  const authenticate = () => {
    // @TODO : To be replaced by an API call to server with response indicating if user is authorize + user data
    if (auth.token) {
      setAuthenticated(true)
      // @TODO : Store user data received from server
      // dispatch(setUser(data))
    } else {
      setAuthenticated(false)
      dispatch(resetAuth())
    }
  }

  const resetStores = () => {
    dispatch(closeModal())
  }

  const onLogout = () => {
    setAuthenticated(false)
    dispatch(resetAuth())
  }

  // =================
  // Render
  // =================
  return (
    <div style={styles.app}>
      {authenticated ? (
        <div style={styles.content}>
          <AppBar style={styles.navbar}>
            <Toolbar>
              <DesignHeader color={color.white}>Dashboard</DesignHeader>
              <div style={styles.filler} />
              <DesignText color={color.white} onClick={onLogout}>
                Logout
              </DesignText>
            </Toolbar>
          </AppBar>
          <div style={styles.screenContent}>
            <RouterProvider router={router} />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  app: {
    display: 'flex',
    flexGrow: 1,
  },
  content: {
    display: 'flex',
    flexGrow: 1,
  },
  filler: {
    flexGrow: 1,
  },
  navbar: {
    height: 65,
    background: color.black,
  },
  screenContent: {
    display: 'flex',
    marginTop: 65,
    flexGrow: 1,
  },
}
