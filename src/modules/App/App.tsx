import { AppBar, Toolbar } from '@mui/material'
import { CSSProperties, useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DesignHeader from '../../design-system/DesignText/DesignHeader'
import DesignText from '../../design-system/DesignText/DesignText'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { color } from '../../theme/color'
import DashboardPage from '../Dashboard/pages/DashboardPage'
import FilmPage from '../Dashboard/pages/FilmPage'
import PeoplePage from '../Dashboard/pages/PeoplePage'
import PlanetPage from '../Dashboard/pages/PlanetPage'
import SpeciePage from '../Dashboard/pages/SpeciePage'
import StarshipPage from '../Dashboard/pages/StarshipPage'
import VehiclePage from '../Dashboard/pages/VehiclePage'
import { selectCategory } from '../Dashboard/stores/elementSlice'
import { closeModal } from '../Dashboard/stores/modalSlice'
import Login from '../Login/Login'
import { resetAuth, selectAuth } from '../Login/stores/authSlice'
import FallbackPage from './FallbackPage'

// =================
// Routes
// =================
const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/film/:index',
    element: <FilmPage />,
  },
  {
    path: '/people/:index',
    element: <PeoplePage />,
  },
  {
    path: '/planet/:index',
    element: <PlanetPage />,
  },
  {
    path: '/specie/:index',
    element: <SpeciePage />,
  },
  {
    path: '/starship/:index',
    element: <StarshipPage />,
  },
  {
    path: '/vehicle/:index',
    element: <VehiclePage />,
  },
  {
    path: 'resource/film/:index',
    element: <FilmPage isResource />,
  },
  {
    path: 'resource/people/:index',
    element: <PeoplePage isResource />,
  },
  {
    path: 'resource/planet/:index',
    element: <PlanetPage isResource />,
  },
  {
    path: 'resource/specie/:index',
    element: <SpeciePage isResource />,
  },
  {
    path: 'resource/starship/:index',
    element: <StarshipPage isResource />,
  },
  {
    path: 'resource/vehicle/:index',
    element: <VehiclePage isResource />,
  },
  {
    path: '*',
    element: <FallbackPage />,
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
    dispatch(selectCategory('films'))
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
    window.location.href = '/'
    setAuthenticated(false)
    dispatch(resetAuth())
  }

  const onTitleClick = () => {
    window.location.href = '/'
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
              <DesignHeader onClick={onTitleClick} color={color.white}>
                Dashboard
              </DesignHeader>
              <div style={styles.filler} />
              <DesignText bold color={color.white} onClick={onLogout}>
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
