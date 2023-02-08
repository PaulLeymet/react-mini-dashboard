import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk'
import appSlice from '../modules/App/stores/appSlice'
import dashboardSlice from '../modules/Dashboard/stores/dashboardSlice'
import modalSlice from '../modules/Dashboard/stores/modalSlice'
import authSlice from '../modules/Login/stores/authSlice'

// =================
// Configuration
// =================
const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  app: appSlice,
  auth: authSlice,
  dashboard: dashboardSlice,
  modal: modalSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// =================
// Root store
// =================
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
