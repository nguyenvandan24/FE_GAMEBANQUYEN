// Cart.js
import React, {useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {Button} from "../styles/Button";

const Cart = () => {
    const usenavigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const username = sessionStorage.getItem("username");

    const removeFromCart = (username, productId) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== productId);
        setCartItems(updatedCartItems);
        localStorage.setItem(`cartItems_${username}`, JSON.stringify(updatedCartItems));
    };

    useEffect(() => {
        //const username = sessionStorage.getItem('username');
        if (username === "" || username === null) {
            usenavigate('/Login');
        }
    }, [username, usenavigate]);


    useEffect(() => {
        const userCartKey = `cartItems_${username}`;
        const storedCartItems = localStorage.getItem(userCartKey);
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, [username]);

    const calculateTotalPrice = () => {
        const totalPrice = cartItems.reduce((total, item) => total + Number(item.price), 0);
        return totalPrice.toLocaleString(); // Convert the total price to localized string format
    };

    return (
        <Wrapper>
            <div className="cart">
                <table>
                    <thead>
                    <tr>
                        <th>Sản phẩm</th>
                        <th>Tên</th>
                        <th>Giá</th>
                        <th>Xóa</th>
                    </tr>
                    </thead>

                    <tbody>
                    {cartItems && cartItems.map((item) => (
                        <tr key={item.id}>
                            <td><img src={item.img}/></td>
                            <td>{item.name}</td>
                            <td>{item.price}VNĐ</td>
                            <td><button onClick={() => removeFromCart(username, item.id)}>Xóa</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>
            <p className="total">Tổng tiền: {calculateTotalPrice()} VNĐ</p>
            <div className="checkout">
                <Button>Thanh toán</Button>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  img{
    height: 150px;
    width: 150px;
  }
  .cart{
    align-items: center;
    padding-left: 100px;
    padding-bottom: 50px;
    padding-top: 50px;
  }
  table {
    width: 90%;
    border-collapse: collapse;
  }

  th, td{
    padding: 8px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }
  .total,
  .checkout {
    display: flex;
    margin-left: 81%;
    padding-bottom: 50px;
  }
`;
export default Cart;
