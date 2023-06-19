// Cart.js
import React, {useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {Button} from "../styles/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMinus, faPlus, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {toast} from "react-toastify";
import CheckoutForm from "../components/CheckoutForm";

const Cart = () => {
    const usenavigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [showCheckout, setShowCheckout] = useState(false);
    const username = sessionStorage.getItem("username");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [note, setNote] = useState("");

    const currentDate = new Date();
    const seconds = currentDate.getSeconds();
    const minutes = currentDate.getMinutes();
    const hours = currentDate.getHours();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

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

    const clearCart =() => {
        const order = {
            items: cartItems,
            totalPrice: calculateTotalPrice() + "VNĐ",
            user: {
                name: name,
                email: email,
                phone: phone,
                note: note,
            },
            createDate: `${hours}:${minutes}:${seconds}  ${day}:${month}:${year}`,
            //createDate: new Date().getFullYear(),//Thêm ngày tạo đơn hàng
        }
        localStorage.setItem(`order_${username}`, JSON.stringify(order));
        localStorage.removeItem(`cartItems_${username}`);
        setCartItems([]);
    }
    const handleCheckout = () => {
        const order = {
            items: cartItems,
            totalPrice: calculateTotalPrice() + "VNĐ",
            user: {
                name: name,
                email: email,
                phone: phone,
                note: note,
            },
            createDate: `${hours}:${minutes}:${seconds}  ${day}:${month}:${year}`,
        };

        fetch(`http://localhost:3000/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
        }).then((response) => response.json())
            .then((data) => {
                console.log(data);
                clearCart();
                setShowCheckout(false);
                toast.success("Thanh toán thành công (-_-).");
            }).catch(() => {
            toast.error("Lỗi");
        });
    };

    const handleFormCheckout = (event) => {
        event.preventDefault();//Ngăn chặn hành vi mặc định của trinh duyệt
        if (name && email && phone){
            handleCheckout()
        }else {
            toast.error("Vui lòng nhập đầy đủ thông tin.");
        }
    };
    const handleShowCheckout = () => {
        setShowCheckout(true);
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
                            <td>{item.price} VNĐ</td>
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
                            <td>{item.price * item.quantity} VNĐ</td>
                            <td><div className="remove">
                                <FontAwesomeIcon icon={faTrashAlt} onClick={() => removeFromCart(username, item.id)}/>
                            </div></td>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>
            <p className="total">Tổng tiền: {calculateTotalPrice()} VNĐ</p>
            <div>
                {showCheckout ? (
                    <CheckoutForm
                        name={name}
                        email={email}
                        phone={phone}
                        note={note}
                        handleFormCheckout={handleFormCheckout}
                        setName={setName}
                        setEmail={setEmail}
                        setPhone={setPhone}
                        setNote={setNote}
                        totalPrice={calculateTotalPrice()}
                        cartItems={cartItems}
                    />
                ):(
                    <div className="checkout">
                        <Button  onClick={handleShowCheckout}>Thanh toán</Button>
                    </div>
                )}
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
    font-size: 1.5rem;
  }
  .total,
  .checkout {
    display: flex;
    margin-left: 77%;
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
