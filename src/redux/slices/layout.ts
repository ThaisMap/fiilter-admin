import { createSlice } from "@reduxjs/toolkit"

export interface LayoutState {
  addTransactionModalOpen: boolean
}

const initialState: LayoutState = {
  addTransactionModalOpen: false
}

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleAddTransactionModal: state => {
      state.addTransactionModalOpen = !state.addTransactionModalOpen
    }
  }
})

export const { toggleAddTransactionModal } = layoutSlice.actions

export default layoutSlice.reducer
