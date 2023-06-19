import React, { useState} from "react";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";
import {Button} from "../styles/Button";
import {Link, useNavigate} from "react-router-dom";
import bcrypt from 'bcryptjs';


const Register = () =>{
    const [fullname, fullnamechange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [id, idchange] = useState("");
    const [pass, passchange] = useState("");
    const [repass, repasschange] = useState("");
    const [errorMessage, setErrorMessage] = useState('');



    const navigate=useNavigate();
    const IsValidate= () =>{
        let isproceed=true;
        let errormessage= 'Nhập lại mật khẩu';
        if(fullname==null || fullname==''){
            isproceed=false;
            errormessage += 'fullName';
        }
        if(email==null || email==''){
            isproceed=false;
            errormessage += 'email';
        }
        if(phone==null || phone==''){
            isproceed=false;
            errormessage += 'phone';
        }
        if(id==null || id==''){
            isproceed=false;
            errormessage += 'id';
        }
        if(pass==null || pass==''){
            isproceed=false;
            errormessage += 'pass';
        }
        if(repass==null || repass==''){
            isproceed=false;
            errormessage += 'repass';
        }
        if (pass !== repass) {
            isproceed=false;
            toast.warning('Sai mật khẩu ');

        }
        if(!isproceed){
            toast.warning(errormessage);
        }else {
            if (/^[a-zA=Z0-9]+@[a-zA=Z0-9]+\.[A-Za-z]+$/.test(email)){

            }else{
                isproceed =false;
                toast.warning('nhập email ');
            }
        }

        return isproceed;
    }





    const handledsubmit= (e) => {
        e.preventDefault();

        // Mã hóa mật khẩu
        const hashedPass =btoa(pass);


        if (IsValidate()) {
            if (pass.length <= 8 || repass <= 8) {
                toast.error('Mật khẩu phải lớn hơn hoặc bằng 8 ký tự.');
                return;
            }
            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/;
            if (!passwordRegex.test(pass)) {
                toast.error("Mật khẩu phải chứa chữ cái và ký tự đặc biệt.")
                return;
            }
            let regobj = {fullname, email, phone, id, pass: hashedPass, repass:hashedPass};
            console.log(regobj);

            fetch('http://localhost:3000/users')
                .then((response) => response.json())
                .then((data) => {
                    const existingUser = data.find((user) => user.id === id);
                    const existingEmail = data.find((user) => user.email === email);

                    if (existingUser) {
                        toast.error('tên tài khoản đã tồn tại');
                    } else if (existingEmail) {
                        toast.error('Email đã tồn tại');

                    } else {
                        fetch('http://localhost:3000/users', {
                            method: "POST",
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify(regobj)
                        })
                            .then(() => {
                                toast.success('Tạo tài khoản thành công');
                                navigate('/login');
                            })
                            .catch((err) => {
                                toast.error('Lỗi');
                            });
                    }
                })
                .catch((err) => {
                    toast.error('Failed: ' + err.message);
                });

        }

    }




    return (
        <Wrapper>
            <div className="register-container">
                <h2 className="common-heading">Đăng ký</h2>
                <div className="container" onSubmit={handledsubmit}>
                    <div className="contact-form">
                        <form method="POST" className="contact-inputs">
                            <label className="text">Họ tên</label>
                            <input value={fullname} onChange={e=>fullnamechange(e.target.value)} className="input" type="text" placeholder="Họ và tên" name="username" autoComplete="off" required/>

                            <label className="text">Email</label>
                            <input value={email} onChange={e=>emailchange(e.target.value)} className="input" type="email" name="Email" placeholder="Email" autoComplete="off" required/>

                            <label className="text">SĐT</label>
                            <input value={phone} onChange={e=>phonechange(e.target.value)} className="input" type="phone" name="Phone" placeholder="xxx.xxx.xxx" autoComplete="off" required/>

                            <label className="text">Tên tài khoản</label>
                            <input value={id} onChange={e=>idchange(e.target.value)} className="input" type="text" placeholder="Tên ta khoản" name="username" autoComplete="off" required/>

                            <label className="text">Mật khẩu</label>
                            <input value={pass} onChange={e=>passchange(e.target.value)} className="input" type="password" name="password" placeholder="Nhập mật khẩu" autoComplete="off" required/>

                            <label className="text">Nhập lại mật khẩu</label>
                            <input value={repass} onChange={e=>repasschange(e.target.value)} className="input" type="password" name="password" placeholder="Nhập lại mật khẩu" autoComplete="off" required/>
                            <div className="text" style={{textAlign: "left", color: "gray", fontSize:14}}>

                                <Link to={'/Login'}>Bạn đã có tài khoản?</Link>
                            </div>

                            <div style={{textAlign: "right"}}>
                                <Button  className="register" type="submit"  >Đăng ký</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}


const Wrapper = styled.section`
  padding: 31px 0px 91px 73px;;
  text-align: center;
  background: url("https://munetviet.com/sukien/images/bg_event.jpg");
  background-size: cover;
  .register-container {
    background-color: aliceblue;
    border-radius: 5rem;
    max-width: 40rem;
    height: 82rem;
    margin: auto;
  }
  .common-heading {
    padding-top: 2rem;
  }
  .container {
    margin-top: -5rem;

    .contact-form {
      max-width: 30rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        .text{
          font-size: 20px;
          text-align: left;
        }
        .input {
          width: 30rem;
          border-radius: 10px;
          text-transform: none;
        }
        .register {
          width: 13rem;
          border-radius: 10px;
          margin-bottom: 20px;
          margin-top: -33px;
        }

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

export default Register;
