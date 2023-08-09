import { data } from "../db/data"

export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      }
    default:
      return state
  }
}

export const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      if (action.payload === "ASCENDING") {
        return {
          ...state,
          products: state.products.sort((a, b) => a.price - b.price),
        }
      } else if (action.payload === "DESCENDING") {
        return {
          ...state,
          products: state.products.sort((a, b) => b.price - a.price),
        }
      } else {
        return state
      }
    case "TOGGLE_OUT_OF_STOCK":
      return { ...state, includeOutOfStock: action.payload }
    case "TOGGLE_FAST_DELIVERY":
      return { ...state, fastDeliveryOnly: action.payload }
    case "SEARCH_BY_TITLE":
      return { ...state, searchQuery: action.payload }
    case "CLEAR_FILTERS":
      return {
        products: data,
        includeOutOfStock: false,
        fastDeliveryOnly: false,
        searchQuery: "",
      }

    default:
      return state
  }
}
