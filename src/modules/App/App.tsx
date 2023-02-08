import { createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import { CSSProperties } from 'react'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { store } from '../../store/store'
import { color } from '../../theme/color'
import Home from '../Home/Home'
import Login from '../Login/Login'

// =================
// MUI theme
// =================
const theme = createTheme({
  palette: {
    primary: {
      main: color.primary,
    },
    secondary: {
      main: color.secondary,
    },
    info: {
      main: color.white,
    },
  },
  typography: {
    h1: {
      fontFamily: 'BeaufortForLoL',
      fontSize: 45,
    },
    fontFamily: 'Spiegel',
  },
})

// =================
// Persistent store
// =================
let persistor = persistStore(store)

// =================
// Routes
// =================
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])

export default function App() {
  return (
    <div style={styles.app}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <RouterProvider router={router} />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </div>
  )
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  app: {},
}
