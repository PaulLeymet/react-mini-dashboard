import { AppBar, Toolbar } from '@mui/material'
import { CSSProperties, useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DesignBox from '../../design-system/DesignBox/DesignBox'
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

const BASENAME = '/react-mini-dashboard'

// =================
// Routes
// =================
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <DashboardPage />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/films/:index',
      element: <FilmPage />,
    },
    {
      path: '/people/:index',
      element: <PeoplePage />,
    },
    {
      path: '/planets/:index',
      element: <PlanetPage />,
    },
    {
      path: '/species/:index',
      element: <SpeciePage />,
    },
    {
      path: '/starships/:index',
      element: <StarshipPage />,
    },
    {
      path: '/vehicles/:index',
      element: <VehiclePage />,
    },
    {
      path: 'resources/films/:index',
      element: <FilmPage isResource />,
    },
    {
      path: 'resources/people/:index',
      element: <PeoplePage isResource />,
    },
    {
      path: 'resources/planets/:index',
      element: <PlanetPage isResource />,
    },
    {
      path: 'resources/species/:index',
      element: <SpeciePage isResource />,
    },
    {
      path: 'resources/starships/:index',
      element: <StarshipPage isResource />,
    },
    {
      path: 'resources/vehicles/:index',
      element: <VehiclePage isResource />,
    },
    {
      path: '*',
      element: <FallbackPage />,
    },
  ],
  {
    basename: BASENAME,
  },
)

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
    setAuthenticated(false)
    dispatch(resetAuth())
    window.location.href = BASENAME
  }

  const onTitleClick = () => {
    window.location.href = BASENAME
  }

  // =================
  // Render
  // =================
  return (
    <DesignBox>
      {authenticated ? (
        <DesignBox>
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
          <DesignBox style={styles.screenContent}>
            <RouterProvider router={router} />
          </DesignBox>
        </DesignBox>
      ) : (
        <Login />
      )}
    </DesignBox>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  filler: {
    flexGrow: 1,
  },
  navbar: {
    height: 65,
    background: color.black,
  },
  screenContent: {
    marginTop: 65,
  },
}
