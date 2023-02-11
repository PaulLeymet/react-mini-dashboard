import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk'
import appSlice from '../modules/App/stores/appSlice'
import elementSlice from '../modules/Dashboard/stores/elementSlice'
import modalSlice from '../modules/Dashboard/stores/modalSlice'
import ressourceSlice from '../modules/Dashboard/stores/resourceSlice'
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
  elements: elementSlice,
  resources: ressourceSlice,
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
