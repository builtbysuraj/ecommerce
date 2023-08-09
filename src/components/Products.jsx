import { Box } from "@mui/material"

import { useSearchFilter } from "../hooks/useSearchFilter"
import SingleProduct from "./SingleProduct"

export default function Products() {
  const { filteredProducts } = useSearchFilter()
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
