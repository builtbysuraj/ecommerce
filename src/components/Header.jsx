import { AppBar, Toolbar, Typography } from "@mui/material"
import { useContext } from "react"
import { Link as RouterLink } from "react-router-dom"
import { ProductContext } from "../state/ProductContext"

export default function Header() {
  const {
    cartState: { cart },
  } = useContext(ProductContext)

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }}>
          <RouterLink to={"/"}>Home</RouterLink>
        </Typography>
        <Typography>
          <RouterLink to={"/cart"}>Cart {cart.length} </RouterLink>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
