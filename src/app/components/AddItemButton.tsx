import React from "react"
import { Button } from "@mui/material"

interface AddItemButtonProps {
  setOpenDialog: (item: boolean) => void
}

const AddItemButton: React.FC<AddItemButtonProps> = ({ setOpenDialog }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      className="m-4"
      onClick={() => setOpenDialog(true)}
    >
      Add New Item
    </Button>
  )
}

export default AddItemButton
