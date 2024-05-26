import { Container } from "@mui/material"
import React, { useState } from "react"
import AddItemButton from "./AddItemButton"
import FoodList from "./FoodList"
import PopupComponent from "./PopupComponent"
import {
  useAddFoodItemMutation,
  useDeleteFoodItemMutation,
  useGetFoodItemsQuery,
  useUpdateFoodItemMutation,
} from "@/store"

interface FoodItem {
  id: number | string
  name: string
  description: string
}

const AllFoodItems = () => {
  const [newItem, setNewItem] = useState<FoodItem>({
    id: "",
    name: "",
    description: "",
  })
  const [openDialog, setOpenDialog] = useState(false)
  const [editMode, setEditMode] = useState(false)

  const { data: foodItems, refetch, isLoading } = useGetFoodItemsQuery()
  const [addFoodItem] = useAddFoodItemMutation()
  const [updateFoodItem] = useUpdateFoodItemMutation()
  const [deleteFoodItem] = useDeleteFoodItemMutation()

  const handleAdd = async (newItem: Partial<FoodItem>) => {
    try {
      const res: any = await addFoodItem(newItem)
      if (res?.data?.status == 201) {
        await refetch()
        setNewItem({ id: "", name: "", description: "" })
      }
    } catch (error) {
      console.error("Failed to add food item:", error)
    }
  }

  const handleUpdate = async (updatedItem: Partial<FoodItem>) => {
    const res: any = await updateFoodItem(updatedItem)
    if (res?.data?.status == 200) {
      await refetch()
      setNewItem({ id: "", name: "", description: "" })
    }
  }

  const handleDelete = async (id: number | string) => {
    const res: any = await deleteFoodItem(id)
    if (res?.data?.status == 200) {
      await refetch()
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewItem((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = () => {
    editMode ? handleUpdate(newItem) : handleAdd(newItem)
    setNewItem({ id: "", name: "", description: "" })
    setOpenDialog(false)
  }
  return (
    <Container>
      <AddItemButton setOpenDialog={setOpenDialog} />
      {!isLoading && (
        <FoodList
          items={foodItems ? foodItems : []}
          setEditMode={setEditMode}
          setNewItem={setNewItem}
          handleDelete={handleDelete}
          setOpenDialog={setOpenDialog}
        />
      )}
      <PopupComponent
        open={openDialog}
        setOpenDialog={setOpenDialog}
        handleChange={handleChange}
        itemData={newItem}
        handleSubmit={handleSubmit}
      />
    </Container>
  )
}

export default AllFoodItems
