import React from "react"
import FoodItemCard from "./FoodItemCard"

interface FoodItem {
  id: number | string
  name: string
  description: string
}

interface FoodListProps {
  items: FoodItem[]
  setEditMode: (item: boolean) => void
  setNewItem: (item: FoodItem) => void
  handleDelete: (id: number | string) => void
  setOpenDialog: (item: boolean) => void
}

const FoodList: React.FC<FoodListProps> = ({
  items,
  setEditMode,
  handleDelete,
  setNewItem,
  setOpenDialog,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <FoodItemCard
          key={item.id}
          item={item}
          setEditMode={setEditMode}
          handleDelete={handleDelete}
          setNewItem={setNewItem}
          setOpenDialog={setOpenDialog}
        />
      ))}
    </div>
  )
}

export default FoodList
