import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../store/store'

// =================
// Types
// =================
export interface AuthType {
  token: string
  user: {
    username: string
  }
}
// =================
// Initial state
// =================
const initialState: AuthType = {
  token: '',
  user: {
    username: '',
  },
}

// =================
// Slice
// =================
export const authSlice = createSlice({
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
    setUser: (state, action: PayloadAction<AuthType['user']>) => {
      state.user = action.payload
    },
    resetAuth: (state) => {
      state.user = initialState.user
      state.token = initialState.token
    },
  },
  name: 'authSlice',
  initialState: initialState,
})

// =================
// Actions
// =================
export const { setToken, setUser, resetAuth } = authSlice.actions

// =================
// Selectors
// =================
export const selectAuth = (state: RootState) => state.auth

export default authSlice.reducer
