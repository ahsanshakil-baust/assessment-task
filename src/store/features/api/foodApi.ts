import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface FoodItem {
  id: number | string
  name: string
  description: string
}

export const foodApi = createApi({
  reducerPath: "foodApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["foodData"],
  endpoints: (builder) => ({
    getFoodItems: builder.query<any[], void>({
      query: () => "/food",
      transformResponse: (response: any) => response.data,
      transformErrorResponse: (response) => response,
      providesTags: ["foodData"],
    }),
    addFoodItem: builder.mutation<FoodItem, Partial<FoodItem>>({
      query: (newItem) => ({
        url: "/food",
        method: "POST",
        body: newItem,
      }),
      transformResponse: (response: any) => response,
      transformErrorResponse: (response) => response,
    }),
    updateFoodItem: builder.mutation<FoodItem, Partial<FoodItem>>({
      query: (updatedItem) => ({
        url: "/food",
        method: "PUT",
        body: updatedItem,
      }),
    }),
    deleteFoodItem: builder.mutation<FoodItem[], number | string>({
      query: (id) => ({
        url: `/food`,
        method: "DELETE",
        body: { id },
      }),
    }),
  }),
})

export const {
  useAddFoodItemMutation,
  useGetFoodItemsQuery,
  useUpdateFoodItemMutation,
  useDeleteFoodItemMutation,
} = foodApi
