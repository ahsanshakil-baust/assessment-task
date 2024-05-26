let foodItems = [
  { id: 1, name: "Pizza", description: "Delicious cheese pizza" },
  { id: 2, name: "Burger", description: "Juicy beef burger" },
]

export async function GET() {
  return new Response(JSON.stringify({ data: foodItems }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}

export async function POST(request: any) {
  try {
    const { name, description } = await request.json()

    if (!name || !description) {
      return new Response(
        JSON.stringify({ error: "Invalid data", status: 400 }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
    }

    const newId = foodItems.length ? foodItems[foodItems.length - 1].id + 1 : 1
    const newItem = { id: newId, name, description }
    foodItems.push(newItem)

    return new Response(JSON.stringify({ data: foodItems, status: 201 }), {
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to add item", status: 500 }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  }
}

export async function PUT(request: any) {
  try {
    const { id, name, description } = await request.json()

    if (!id || !name || !description) {
      return new Response(
        JSON.stringify({ error: "Invalid data", status: 400 }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
    }

    const itemIndex = foodItems.findIndex((item) => item.id === id)
    if (itemIndex === -1) {
      return new Response(
        JSON.stringify({ error: "Item not found", status: 404 }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
    }

    foodItems[itemIndex] = { id, name, description }

    return new Response(JSON.stringify({ data: foodItems, status: 200 }), {
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to update item", status: 500 }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  }
}

export async function DELETE(request: any) {
  try {
    const { id } = await request.json()

    if (!id) {
      return new Response(
        JSON.stringify({ error: "Invalid data", status: 400 }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
    }

    const itemIndex = foodItems.findIndex((item) => item.id === id)
    if (itemIndex === -1) {
      return new Response(
        JSON.stringify({ error: "Item not found", status: 404 }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
    }

    foodItems.splice(itemIndex, 1)

    return new Response(JSON.stringify({ data: foodItems, status: 200 }), {
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to delete item", status: 500 }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  }
}
