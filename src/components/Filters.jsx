import {
  Box,
  FormControl,
  Input,
  MenuItem,
  Select,
  TextField,
} from "@mui/material"
import { useContext } from "react"

import { ProductContext } from "../state/ProductContext"

export default function Filters() {
  const { state, dispatch } = useContext(ProductContext)
  const handleSortChange = (e) => {
    dispatch({ type: "SORT_BY_PRICE", payload: e.target.value })
  }

  const handleStockChange = (e) => {
    dispatch({ type: "TOGGLE_OUT_OF_STOCK", payload: e.target.checked })
  }

  const handleDeliveryChange = (e) => {
    dispatch({ type: "TOGGLE_FAST_DELIVERY", payload: e.target.checked })
  }

  const handleSearchChange = (e) => {
    dispatch({ type: "SEARCH_BY_TITLE", payload: e.target.value })
  }

  const handleClearClick = () => {
    dispatch({ type: "CLEAR_FILTERS" })
  }

  return (
    <Box>
      <FormControl>
        <label htmlFor="search">Search:</label>
        <TextField
          type="text"
          id="search"
          value={state.searchQuery}
          onChange={handleSearchChange}
        />
      </FormControl>
      <FormControl>
        <label htmlFor="sort">Sort by price:</label>
        <Select
          label="Sort by price"
          labelId="sort"
          onChange={handleSortChange}
          value={state.sortPrice}
        >
          <MenuItem value="DEFAULT">Default</MenuItem>
          <MenuItem value="ASCENDING">Ascending</MenuItem>
          <MenuItem value="DESCENDING">Descending</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <label htmlFor="stock">Include out of stock:</label>
        <Input
          type="checkbox"
          id="stock"
          checked={state.includeOutOfStock}
          onChange={handleStockChange}
        />
      </FormControl>
      <FormControl>
        <label htmlFor="delivery">Fast delivery only:</label>
        <Input
          type="checkbox"
          id="delivery"
          checked={state.fastDeliveryOnly}
          onChange={handleDeliveryChange}
        />
      </FormControl>
      <button onClick={handleClearClick}>Clear filters</button>
    </Box>
  )
}
