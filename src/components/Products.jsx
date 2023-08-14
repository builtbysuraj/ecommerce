import { Grid } from "@mui/material"

import { useSearchFilter } from "../hooks/useSearchFilter"
import SingleProduct from "./SingleProduct"

export default function Products() {
  const { filteredProducts } = useSearchFilter()
  return (
    <div>
      <Grid container spacing={5} sx={{marginTop: "0px"}}>
        {filteredProducts?.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </Grid>
    </div>
  )
}
