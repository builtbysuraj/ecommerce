import { CssBaseline } from "@mui/material"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import App from "./App"
import { ProductProvider } from "./state/ProductContext"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductProvider>
      <CssBaseline />
      <App />
    </ProductProvider>
  </BrowserRouter>
)
