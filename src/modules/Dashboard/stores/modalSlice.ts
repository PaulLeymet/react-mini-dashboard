import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../store/store'
import { ElementsCategory } from './types/CategoryType'

// =================
// Types
// =================
export interface DashboardModalType {
  open: boolean
  id: string | undefined
  url: string | undefined
  category: ElementsCategory | undefined
}
// =================
// Initial state
// =================
const initialState: DashboardModalType = {
  open: false,
  id: undefined,
  url: undefined,
  category: undefined,
}

// =================
// Slice
// =================
export const modalSlice = createSlice({
  reducers: {
    displayInModal: (state, action: PayloadAction<{ id: string; url: string; category: ElementsCategory }>) => {
      state.open = true
      state.id = action.payload.id
      state.url = action.payload.url
      state.category = action.payload.category
    },
    closeModal: (state) => {
      state.open = false
      state.id = undefined
      state.url = undefined
      state.category = undefined
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
