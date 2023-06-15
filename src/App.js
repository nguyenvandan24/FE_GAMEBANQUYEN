
import './App.css';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import ErrorPage from "./pages/ErrorPage";
import {GlobalStyle} from "./pages/GlobalStyle";
import {ThemeProvider} from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { getDatabase, ref, child, get, set } from "firebase/database";
import { database } from "./firebase/firebase";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
    const theme = {
        colors: {
            bg: "#F6F8FA",
            footer_bg: "#0a1435",
            btn: "rgb(98 84 243)",
            border: "rgba(98, 84, 243, 0.5)",
            hr: "#ffffff",
            gradient: "linearGradient(0deg, rgb(132 144 255) 0%, rgb(98, 189, 252) 100%)",
            shadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
            shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        },
        media: {
            mobileToDesktop: "768px",
            tab: "998px",
        },
    };
    return (
      <ThemeProvider theme={theme}>
      <BrowserRouter>
          <GlobalStyle />
          <Header />
          <ToastContainer></ToastContainer>
          <ToastContainer></ToastContainer>

          <Routes>
              <Route path="/"  element={<Home />}/>
              <Route path="/products" element={<Products />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/product_detail/:id" element={<ProductDetail />}/>
              <Route path="/cart" element={<Cart />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Register />}/>
              <Route path="*" element={<ErrorPage />}/>
          </Routes>
          <Footer />
      </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
