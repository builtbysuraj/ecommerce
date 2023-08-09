import {
  Box,
  FormControl,
  Input,
  MenuItem,
  Select,
  TextField,
} from "@mui/material"

import { useFilters } from "../hooks/useFilters"

export default function Filters() {
  const {
    state,
    handleSortChange,
    handleStockChange,
    handleDeliveryChange,
    handleSearchChange,
    handleClearClick,
  } = useFilters()

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
