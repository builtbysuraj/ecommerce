import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material"
import { useContext } from "react"

import { ProductContext } from "../state/ProductContext"

export default function SingleProduct({ product }) {
  const {
    cartState: { cart },
    cartDispatch,
  } = useContext(ProductContext)

  return (
    <Card sx={{ maxWidth: 345, height: 300, width: 250 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.thumbnail}
        alt={product.title}
        sx={{ height: 140 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6">
          {product.title}
        </Typography>
        <Typography color="text.secondary">Price: ${product.price}</Typography>
        {product.fastDelivery && <Typography>Fast delivery</Typography>}
      </CardContent>
      <CardActions>
        {cart?.some((p) => p.id === product.id) ? (
          <Button
            onClick={() =>
              cartDispatch({
                type: "REMOVE_FROM_CART",
                payload: product,
              })
            }
          >
            Remove to cart
          </Button>
        ) : (
          <Button
            onClick={() =>
              cartDispatch({
                type: "ADD_TO_CART",
                payload: product,
              })
            }
            disabled={product.outOfStock}
          >
            {product.outOfStock ? "Out of Stock" : "Add to cart"}
          </Button>
        )}
      </CardActions>
    </Card>
  )
}
