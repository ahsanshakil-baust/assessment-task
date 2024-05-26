import React, { useEffect, useState } from "react"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material"

interface NewItem {
  id: number | string
  name: string
  description: string
}

interface PopupComponentProps {
  open: boolean
  setOpenDialog: (item: boolean) => void
  handleChange: (item: React.ChangeEvent<HTMLInputElement>) => void
  itemData: NewItem
  handleSubmit: () => void
}

const PopupComponent: React.FC<PopupComponentProps> = ({
  open,
  setOpenDialog,
  itemData,
  handleChange,
  handleSubmit,
}) => {
  return (
    <Dialog open={open} onClose={() => setOpenDialog(false)}>
      <DialogTitle>{itemData?.id ? "Edit Item" : "Add New Item"}</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          name="name"
          value={itemData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          name="description"
          value={itemData.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
        <Button onClick={handleSubmit} color="primary">
          {itemData?.id ? "Edit" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default PopupComponent
