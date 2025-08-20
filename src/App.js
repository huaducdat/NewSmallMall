import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Product from "./components/Product";
import Cart from "./components/Cart";
import { useEffect, useMemo, useState } from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider, CssBaseline } from "@mui/material";
import axios from "axios";

function App() {
  const [mode, setMode] = useState("light");
  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);
  const switchTheme = (m) => {
    setMode(m);
  };

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route
          path="/"
          element={<Home changeTheme={switchTheme} themeMode={mode} products ={products}/>}
        />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
