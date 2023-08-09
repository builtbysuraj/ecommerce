import { useContext } from "react"
import { ProductContext } from "../state/ProductContext"

export function useFilters() {
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

  return {
    state,
    handleSortChange,
    handleStockChange,
    handleDeliveryChange,
    handleSearchChange,
    handleClearClick,
  }
}
