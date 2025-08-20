import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Stack,
  Button,
  Breadcrumbs,
  Divider,
} from "@mui/material";
import logoW from "../MyImgs/CompanyLogo1.png";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { Link as MuiLink, Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Hero from "./Hero";
import heroImg from "../MyImgs/162712_eat17fruitandveg_316436_crop.jpg";
import ProductsList from "./ProductsList";
import Foot from "./Foot";

function Home({ changeTheme, themeMode, navigate, products }) {
  return (
    <Box sx={{bgcolor: (theme) => theme.palette.mode === 'light'? '#d6d6d6ff': '#141414ff'}}>
      <AppBar
        position="relative"
        sx={{
          bgcolor: "black",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          overflow: "visible",
          boxShadow: "0 6px 12px black",
        }}
      >
        <Toolbar
          variant="regular"
          sx={{ justifyContent: "space-between", px: 2, flexWrap: "wrap" }}
        >
          <Stack
            direction="row"
            spacing={2}
            sx={{ alignItems: "center", flexWrap: "wrap" }}
          >
            <Typography variant="h5" fontWeight={800}>
              DHMall
            </Typography>
            <Box
              component="img"
              src={logoW}
              sx={{
                width: "60px",
                height: "auto",
              }}
            />
            <IconButton
              color="primary"
              onClick={() =>
                changeTheme(themeMode === "light" ? "dark" : "light")
              }
            >
              {themeMode === "light" ? <Brightness4 /> : <Brightness7 />}
            </IconButton>
          </Stack>
          <Stack>
            <Typography
              variant="overline"
              color="white"
              fontSize={18}
              fontWeight={700}
            >
              The Market you want, the products that you need.
            </Typography>
          </Stack>
          <Stack>
            <Button
              variant="outlined"
              color="primary"
              sx={{ fontWeight: "bold" }}
            >
              Login
            </Button>
          </Stack>
        </Toolbar>
        <Divider variant="middle" sx={{ borderColor: "#363636ff" }} />
        <Toolbar variant="dense">
          <Breadcrumbs separator="|" aria-label="breadcrumb" color="primary">
            <MuiLink
              underline="hover"
              color="primary"
              to="/"
              component={RouterLink}
              variant="body2"
            >
              Home
            </MuiLink>
            <MuiLink
              underline="hover"
              color="primary"
              to="/"
              component={RouterLink}
              variant="body2"
            >
              Account
            </MuiLink>
            <MuiLink
              underline="hover"
              color="primary"
              variant="body2"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("products");
                if (el)
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              sx={{
                cursor: "pointer",
              }}
            >
              Products
            </MuiLink>
            <MuiLink
              underline="hover"
              color="primary"
              to="/"
              component={RouterLink}
              variant="body2"
            >
              Your Cart
            </MuiLink>
          </Breadcrumbs>
        </Toolbar>
      </AppBar>
      <Hero
        title="DHMall buy smart."
        subtitle="selected products, smooth experience, flexible payment."
        primaryText="Explore now"
        secondaryText="Login"
        bgImage={heroImg}
        onPrimary={() => navigate("/products")}
        onSecondary={() => navigate("/login")}
      />
      <ProductsList id="products" listItems={products} />
      <Foot />
    </Box>
  );
}
export default Home;
