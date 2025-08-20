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
  const [cart, setCart] = useState(() => {
    try{
return JSON.parse(localStorage.getItem('cart')) || [];
    }catch{
      return[];
    }
  });

const addToCart= (item) => {
  setCart(prev => {
    const idx = prev.findIndex(i => i.id === item.id)
    if(idx >= 0)
    {
      const clone = [...prev];
      clone[idx] = {...clone[idx], qty: clone[idx].qty  + (item.qty ||  1) };
      return clone;
    }
    return  [...prev, {...item, qty:item.qty || 1}];
  })
};


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])


  const [loging, setLoging] = useState(false);
  const setLogin = (status) => {
    setLoging(status);
  };

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
          element={
            <Home
              changeTheme={switchTheme}
              themeMode={mode}
              products={products}
              log={loging}
              setLog={setLogin}
            />
          }
        />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/login" element={<Login setLog={setLogin} />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
