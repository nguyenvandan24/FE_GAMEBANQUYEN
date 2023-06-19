import styled from "styled-components";
import {Button} from "../styles/Button";
import React, {useState} from "react";

const CheckoutForm = ({name, email, phone, note, handleFormCheckout, setName, setEmail, setPhone, setNote, totalPrice, cartItems}) => {

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

    const handleNoteChange = (event) => {
        setNote(event.target.value);
    }

    return(
        <Wrapper>
            <div className="grid grid-two-column">
                <div>
                    <form className="infor-input" onSubmit={handleFormCheckout}>
                        <label>Tên khách hàng *</label>
                        <input className="input" type="text" value={name} onChange={handleNameChange} placeholder="Vui lòng nhập tên khách hàng."/><br/>
                        <label>Email *</label>
                        <input className="input" type="email" value={email} onChange={handleEmailChange} placeholder="Vui lòng nhập eamil khách hàng."/><br/>
                        <label>Số điện thoại *</label>
                        <input className="input" type="text" value={phone} onChange={handlePhoneChange} placeholder="Vui lòng nhập số điện thoại khách hàng."/><br/>
                        <label>Ghi chú</label>
                        <textarea className="input" type="text" value={note} onChange={handleNoteChange} placeholder="Ghi chú."/><br/>
                        <div className="checkout-btn">
                            <div className="button">
                                <Button claName="btn-checkout" type="submit" >Xác nhận thanh toán</Button>
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <h2>Thông tin sản phẩm</h2>
                    <table>
                        <thead>
                        <tr className="grid grid-three-column">
                            <th>Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Giá</th>
                        </tr>
                        </thead>

                        <tbody>
                        {cartItems.map((item) => (
                            <tr className="grid grid-three-column" key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price} VNĐ</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <div className="total-price">
                        <p >Tổng tiền: {totalPrice} VNĐ</p>
                    </div>
                    <div className="bank">
                        <p>Ngân hàng BIDV - 3141000427412 - Nguyễn Trung Hiếu - Chi nhánh Đông Sài Gòn</p>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
  padding: 50px;
  h2{
    font-size: 25px;
  }
    .infor-input {
      padding-left: 20px;
      display: flex;
      flex-direction: column;
    }
  .input {
    border-radius: 10px;
    text-transform: none;
  }
  label 
  {
    font-size: 1.5rem;
  }
  .checkout-btn{
    padding-left: 200px;
  }
  .button {
    width: 300px;
    text-align: right;

    .btn-checkout{
      border-radius: 10px;
    }
  }
  .total-price{
    text-align: right;
    padding-right: 67px;
    padding-top: 10px;
    padding-bottom: 20px;
  }
  td, th{
    font-size: 1.5rem;
  }
  .bank{
    color: gray;
  }
`;

export default CheckoutForm;