import { CSSProperties, useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import Dashboard from '../Dashboard/Dashboard'
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

  // =================
  // Render
  // =================
  return <div style={styles.app}>{authenticated ? <RouterProvider router={router} /> : <Login />}</div>
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  app: {
    width: '100%',
    height: '100%',
  },
}
