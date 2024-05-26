import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { foodApi } from "./features/api/foodApi"

export const store = configureStore({
  reducer: {
    [foodApi.reducerPath]: foodApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(foodApi.middleware),
})

setupListeners(store.dispatch)

export type StoreGetState = typeof store.getState

export type StoreDispatch = typeof store.dispatch

export * from "./features/api/foodApi"
