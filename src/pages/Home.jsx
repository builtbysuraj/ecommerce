import { Box } from "@mui/material"
import Filters from "../components/Filters"
import Products from "../components/Products"

export default function Home() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ margin: "16px", flex: 1 }}>
          <Filters />
        </Box>
        <Box sx={{ flex: 5 }}>
          <Products />
        </Box>
      </Box>
    </>
  )
}
