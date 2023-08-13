import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <FormControl>
        <label htmlFor="search">Search:</label>
        <TextField
          type="text"
          id="search"
          value={state.searchQuery}
          onChange={handleSearchChange}
        />
      </FormControl>
      <br />
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
      <br />
      <FormControl
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={state.includeOutOfStock}
              onChange={handleStockChange}
            />
          }
          label="Include out of stock"
        />
      </FormControl>

      <FormControl
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={state.fastDeliveryOnly}
              onChange={handleDeliveryChange}
            />
          }
          label="Fast delivery only"
        />
      </FormControl>
      <br />
      <Button variant="contained" onClick={handleClearClick}>
        Clear filters
      </Button>
    </Box>
  )
}
