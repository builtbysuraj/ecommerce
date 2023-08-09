import { useContext } from "react"
import { ProductContext } from "../state/ProductContext"

export function useSearchFilter() {
  const { state } = useContext(ProductContext)

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

  return { filteredProducts }
}
