import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

// class Cart extends React.Component{
//     render() {
const Cart=()=>{
    const usenavigate = useNavigate();
    useEffect(() => {
        let username = sessionStorage.getItem('username');
        if (username === '' || username === null) {
            usenavigate('/Login');

        }

    }, []);
        return(
            <div>
                <h1>Cart</h1>
            </div>
        );
    }


export default Cart;