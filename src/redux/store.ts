import { configureStore } from "@reduxjs/toolkit"
import carteiraReducer from "./slices/carteira"
import layoutReducer from "./slices/layout"

export const store = configureStore({
  reducer: {
    carteira: carteiraReducer,
    layout: layoutReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
