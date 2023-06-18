// Cart.js
import React, {useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {Button} from "../styles/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMinus, faPlus, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    const usenavigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const username = sessionStorage.getItem("username");

    const handleIncreaseQuantity = (productId) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.id === productId) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
        localStorage.setItem(`cartItems_${username}`, JSON.stringify(updatedCartItems));
    };

    const handleDecreaseQuantity = (productId) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.id === productId && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
        localStorage.setItem(`cartItems_${username}`, JSON.stringify(updatedCartItems));
    };

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
        const totalPrice = cartItems.reduce(
            (total, item) => total + Number(item.price) * item.quantity,
            0
        );
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
                        <th>Số lượng</th>
                        <th>Tổng</th>
                        <th>Xóa</th>
                    </tr>
                    </thead>

                    <tbody>
                    {cartItems && cartItems.map((item) => (
                        <tr key={item.id}>
                            <td><img src={item.img}/></td>
                            <td>{item.name}</td>
                            <td>{item.price}VNĐ</td>
                            <td>
                                <div className="quantity-container">
                                    <button onClick={() => handleDecreaseQuantity(item.id)}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    <span className="quantity">{item.quantity}</span>
                                    <button onClick={() => handleIncreaseQuantity(item.id)}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </div>
                            </td>
                            <td>{item.price * item.quantity}</td>
                            <td><div className="remove">
                                <FontAwesomeIcon icon={faTrashAlt} onClick={() => removeFromCart(username, item.id)}/>
                            </div></td>
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
    font-size: 2rem;
  }
  .total,
  .checkout {
    display: flex;
    margin-left: 81%;
    padding-bottom: 50px;
  }
  .quantity-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80px;
    margin: 0 auto;
  }

  .quantity-container button {
    border: none;
    background: none;
    cursor: pointer;
  }

  .quantity {
    font-weight: bold;
    margin: 0 10px;
  }
  .remove{
    color: red;
  }
`;
export default Cart;
