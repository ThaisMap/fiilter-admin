import { createSlice } from "@reduxjs/toolkit"

export interface LayoutState {
  isnewOperationModalOpen: boolean
}

const initialState: LayoutState = {
  isnewOperationModalOpen: false
}

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleNewOperationModal: state => {
      state.isnewOperationModalOpen = !state.isnewOperationModalOpen
    }
  }
})

export const { toggleNewOperationModal } = layoutSlice.actions

export default layoutSlice.reducer
