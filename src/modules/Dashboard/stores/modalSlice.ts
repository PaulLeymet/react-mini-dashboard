import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../store/store'

// =================
// Types
// =================
export interface DashboardModalType {
  open: boolean
  content: JSX.Element | null
}
// =================
// Initial state
// =================
const initialState: DashboardModalType = {
  open: false,
  content: null,
}

// =================
// Slice
// =================
export const modalSlice = createSlice({
  reducers: {
    displayInModal: (state, action: PayloadAction<JSX.Element>) => {
      state.open = true
      state.content = action.payload
    },
    closeModal: (state) => {
      state.open = false
      state.content = null
    },
  },
  name: 'modalSlice',
  initialState: initialState,
})

// =================
// Actions
// =================
export const { displayInModal, closeModal } = modalSlice.actions

// =================
// Selectors
// =================
export const selectModal = (state: RootState) => state.modal

export default modalSlice.reducer
