import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

// =================
// Types
// =================
export interface AppSliceType {
  ready: boolean
}

// =================
// Initial state
// =================
const initialState: AppSliceType = {
  ready: false,
}

// =================
// Slice
// =================
export const appSlice = createSlice({
  reducers: {
    setReady: (state, action: PayloadAction<boolean>) => {
      state.ready = action.payload
    },
  },
  name: 'appSlice',
  initialState: initialState,
})

// =================
// Actions
// =================
export const { setReady } = appSlice.actions

// =================
// Selectors
// =================
export const selectApp = (state: RootState) => state.app

export default appSlice.reducer
