import { Box, Typography } from "@mui/material"
import { useContext } from "react"
import { ProductContext } from "../state/ProductContext"

export default function TotalPrice() {
  const {
    cartState: { cart },
  } = useContext(ProductContext)

  const totalPrice = cart?.reduce((total, item) => total + item.price, 0)

  return (
    <Box>
      <Typography variant="h4">Total Price: ${totalPrice}</Typography>
    </Box>
  )
}
