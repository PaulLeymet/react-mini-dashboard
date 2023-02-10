import { createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import 'dayjs/locale/fr'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import './index.css'
import App from './modules/App/App'
import reportWebVitals from './reportWebVitals'
import { store } from './store/store'
import { color } from './theme/color'

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
    fontFamily: 'revert-layer',
  },
})

// =================
// Persistent store
// =================
let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'fr'}>
            <App />
          </LocalizationProvider>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
