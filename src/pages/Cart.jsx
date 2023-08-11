import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardMedia,
  Container,
  Typography,
} from "@mui/material"
import { useContext } from "react"
import TotalPrice from "../components/TotalPrice"
import { ProductContext } from "../state/ProductContext"

export default function Cart() {
  const {
    cartState: { cart },
    cartDispatch,
  } = useContext(ProductContext)

  return (
    <Container>
      <Typography variant="h2">Cart</Typography>
      <span> Total items {cart.length} </span>
      {cart?.length > 0 ? (
        <>
          {cart?.map((ele) => (
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
              }}
              key={ele.id}
            >
              <section style={{ height: 100, width: 200, margin: "1rem" }}>
                <CardMedia
                  component="img"
                  height="150"
                  src={ele.thumbnail}
                  alt={ele.title}
                />
              </section>
              <Typography variant="h6"> {ele.title} </Typography>
              <Typography> ${ele.price} </Typography>
              <ButtonGroup>
                <Button>+</Button>
                <Button>-</Button>
              </ButtonGroup>
              <Button
                onClick={() => {
                  cartDispatch({
                    type: "REMOVE_FROM_CART",
                    payload: ele,
                  })
                }}
              >
                Remove
              </Button>
              <br />
            </Card>
          ))}
          <TotalPrice />
        </>
      ) : (
        <Typography variant="h3">Cart is empty</Typography>
      )}
    </Container>
  )
}
