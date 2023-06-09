
import './App.css';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./pages/Home";
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
import UserProfile from "./pages/UserProfile";
import {UserProvider} from "./context/UserContext";
import i18n from "./i18n";
import {I18nextProvider} from "react-i18next";
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
        <I18nextProvider i18n={i18n}>
        <BrowserRouter>

            <ThemeProvider theme={theme}>

                    <GlobalStyle />
                    <Header />
                    <ToastContainer></ToastContainer>
                    <ToastContainer></ToastContainer>
                <UserProvider>

                    <Routes>
                        <Route path="/"  element={<Home />}/>
                        <Route path="/products" element={<Products />}/>
                        <Route path="/contact" element={<Contact />}/>
                        <Route path="/product_detail/:id" element={<ProductDetail />}/>
                        <Route path="/cart" element={<Cart />}/>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/register" element={<Register />}/>
                        <Route path="/user" element={<UserProfile />}/>
                        <Route path="*" element={<ErrorPage />}/>
                    </Routes>
                    <Footer />
                </UserProvider>

            </ThemeProvider>

         </BrowserRouter>
        </I18nextProvider>
  );
}

export default App;
