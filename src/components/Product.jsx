import {
  Box,
  CardActionArea,
  CardContent,
  Chip,
  Toolbar,
  Rating,
  CardActions,
  Divider,
  Breadcrumbs,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Stack,
  Card,
  CardMedia,
  Container,
  AppBar,
  Button,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { HashLink } from "react-router-hash-link";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",

        bgcolor: "#e6e6e6ff",
        minHeight: "100vh",
      }}
    >
      <AppBar
        position="fixed"
        color="primary"
        sx={(theme) => ({
          position: "static",
          bgcolor: theme.palette.mode === "light" ? "#c5c5c5ff" : "#333333ff",
        })}
      >
        <Toolbar variant="dense" sx={{ justifyContent: "center" }}>
          <MuiLink
            variant="overline"
            color="text.secondary"
            underline="hover"
            to="/#products"
            component={HashLink}
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <ArrowBackIcon />
            Back to Products List
          </MuiLink>
        </Toolbar>
        <Divider />
        <Toolbar variant="dense" sx={{ justifyContent: "center" }}>
          <Breadcrumbs separator="|" aria-label="breadcrumb" color='text.secondary'>
            <MuiLink
              underline="hover"
              color="text.secondary"
              variant="body2"
              sx={{ display: "flex", gap: 1, alignItems: "center" }}
              to="/Cart"
              component={RouterLink}
            >
              <ShoppingCartIcon />
              Your Cart
            </MuiLink>
            <MuiLink
              underline="hover"
              color="text.secondary"
              variant="body2"
              sx={{ display: "flex", gap: 1, alignItems: "center" }}
              to="/"
              component={RouterLink}
            >
              Home
            </MuiLink>
          </Breadcrumbs>
        </Toolbar>
      </AppBar>
      <Stack sx={{ mb: 6 }}>
        <Container
          maxWidth="false"
          sx={{
            overflow: "visible",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          disableGutters
        >
          <Card sx={{ overflow: "visible", width: "100%", zIndex: 1 }}>
            <CardActionArea
              sx={{
                bgcolor: (theme) =>
                  theme.palette.mode === "light" ? "#1f1f1fff" : "white",
                mt: 9,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 6,
                overflow: "visible",
                "&:hover": {
                  "& .MuiCardActionArea-focusHighlight": { opacity: 0 },
                },
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                sx={{
                  objectFit: "contain",
                  transition: "1s linear .3s",
                  filter: "drop-shadow(3px 9px 9px #00000041)",
                  bgcolor: "transparent",
                  width: "240px",

                  "&:hover": {
                    transform: "scale(1.5)",
                    filter: "drop-shadow(6px 15px 6px #000000b0)",
                  },
                }}
              />
            </CardActionArea>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography variant="h6">{product.title}</Typography>
              <Chip
                label={product.category}
                variant="outlined"
                color="info"
                sx={{ p: 1 }}
              />
              <Typography variant="body1" color="primary" fontSize={24}>
                ${product.price}💵
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Rating value={product.rating?.rate} precision={0.1} readOnly />
                <Typography variant="body2" color="text.secondary">
                  Rating: {product.rating?.rate} / 5 ({product.rating?.count}
                  reviews)
                </Typography>
              </Stack>
              <Typography variant="body2" color="text.secondary">
                Product ID: {id}
              </Typography>
            </CardContent>
          </Card>
          <Stack
            spacing={1}
            sx={{
              width: "100%",
              bgcolor: (theme) => theme.palette.background.paper,
              alignItems: "center",
              py: 2,
            }}
          >
            <Button sx={{ width: 200 }} variant="contained">
              Order Now
            </Button>
            <Button
              sx={{ width: 200 }}
              variant="outlined"
              onClick={() => alert("Added")}
            >
              Add to Cart
            </Button>
          </Stack>
        </Container>
      </Stack>
    </Box>
  );
}
export default Product;
