import React from "react"
import { Card, CardContent, Typography, Button } from "@mui/material"

interface FoodItem {
  id: number | string
  name: string
  description: string
}

interface FoodItemCardProps {
  item: FoodItem
  setEditMode: (item: boolean) => void
  setNewItem: (item: FoodItem) => void
  handleDelete: (id: number | string) => void
  setOpenDialog: (item: boolean) => void
}

const FoodItemCard: React.FC<FoodItemCardProps> = ({
  item,
  handleDelete,
  setEditMode,
  setNewItem,
  setOpenDialog,
}) => {
  return (
    <Card className="m-4">
      <CardContent>
        <Typography variant="h5">{item.name}</Typography>
        <Typography variant="body2">{item.description}</Typography>
        <div className="flex justify-end space-x-2 mt-4">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setEditMode(true)
              setOpenDialog(true)
              setNewItem({
                id: item?.id,
                name: item?.name,
                description: item?.description,
              })
            }}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleDelete(item.id)}
          >
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default FoodItemCard
