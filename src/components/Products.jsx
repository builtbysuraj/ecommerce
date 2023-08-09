import { Box } from "@mui/material"
import { useContext } from "react"

import { ProductContext } from "../state/ProductContext"
import SingleProduct from "./SingleProduct"

export default function Products() {
  const {
    state,
    cartState: { cart },
  } = useContext(ProductContext)

  const filteredProducts = state?.products?.filter((product) => {
    if (!state.includeOutOfStock && product.outOfStock) return false
    if (state.fastDeliveryOnly && !product.fastDelivery) return false
    if (
      state.searchQuery &&
      !product.title.toLowerCase().includes(state.searchQuery.toLowerCase())
    )
      return false
    return true
  })

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "1rem",
          margin: "16px",
        }}
      >
        {filteredProducts?.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </Box>
    </div>
  )
}
