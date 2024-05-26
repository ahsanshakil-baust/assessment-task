"use client"
import React from "react"
import { store } from "@/store"
import { Provider } from "react-redux"
import AllFoodItems from "./components/AllFoodItems"

const HomePage: React.FC = () => {
  return (
    <Provider store={store}>
      <AllFoodItems />
    </Provider>
  )
}

export default HomePage
