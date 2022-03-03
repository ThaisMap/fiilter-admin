import { configureStore } from "@reduxjs/toolkit"
import carteiraReducer from "./slices/wallet"
import layoutReducer from "./slices/layout"
import authReducer from "./slices/auth"

export const store = configureStore({
  reducer: {
    carteira: carteiraReducer,
    layout: layoutReducer,
    auth: authReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
