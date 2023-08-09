import { createContext, useReducer } from "react"
import { data } from "../db/data"
import { ProductReducer, cartReducer } from "./ProductReducer"

export const ProductContext = createContext()

const initialState = {
  products: data,
  includeOutOfStock: false,
  fastDeliveryOnly: false,
  searchQuery: "",
  sortPrice: ""
}

const cartInitialState = {
  data,
  cart: [],
}

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState)
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState)
  return (
    <ProductContext.Provider
      value={{ state, dispatch, cartState, cartDispatch }}
    >
      {children}
    </ProductContext.Provider>
  )
}
