
import {createContext, useContext, useEffect, useReducer} from "react";
import axios from "axios";
import reducer from "../reducer/productReducer"
import products from "../pages/Products";
const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isProductDetailLoading: false,
    productDetail: {},
}
const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({type: "MY_API_DATA", payload: products });
        }catch (error) {
            dispatch({type: "API_ERROR"});
        }
    };

    //call for productdetails
    const getProductDetail = async (url)=>{
        dispatch({ type: "SET_SNIGLE_LOADING" });
        try{
            const res = await axios.get(url);
            const productDetail = await res.data;
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: products })
        }catch (error){
            dispatch({ type: "SET_SINGLE_ERROR" });
        }
    }

    useEffect(() => {
        getProducts(API);
    }, []);
    return (
        <AppContext.Provider value={{ ...state, getProductDetail }}>
            {children}
        </AppContext.Provider>
    );
};

//custom hooks
const useProductContext = () => {
    return useContext(AppContext);
}
export {AppProvider, AppContext, useProductContext};