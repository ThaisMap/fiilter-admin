import { Identity } from "@ory/client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface AuthState {
  isLoggedIn: boolean
  identity?: Identity
  logoutURL: string
}

const initialState: AuthState = {
  isLoggedIn: false,
  identity: null,
  logoutURL: ""
}

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setIdentity: (state, action: PayloadAction<Identity>) => {
      state.identity = action.payload
      state.isLoggedIn = !!action.payload
    },
    setLogoutUrl: (state, action: PayloadAction<string>) => {
      state.logoutURL = action.payload
    },
    setLoggedOut: state => {
      state.isLoggedIn = false
      state.identity = null
      state.logoutURL = ""
    }
  }
})

export const { setIdentity, setLogoutUrl, setLoggedOut } = layoutSlice.actions

export default layoutSlice.reducer
