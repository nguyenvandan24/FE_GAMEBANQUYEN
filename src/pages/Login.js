import React, {useEffect, useState} from "react";

import styled from "styled-components";
import {Button} from "../styles/Button";
import {Link, useNavigate} from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie'



const Login =()=>{
    const [username, usernameupdate]=useState('');
    const [pass, passupdate]=useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const navigate = useNavigate();


    useEffect(()=>{
        sessionStorage.clear();
        const savedUsername = Cookies.get('username');
        const savedPassword = Cookies.get('password');
        const savedRememberMe = Cookies.get('rememberMe') === 'true';

        if (savedUsername && savedPassword && savedRememberMe) {
            passupdate(savedPassword);
            usernameupdate(savedUsername);
        }
    }, []);



    const ProceedLogin = (e) =>{
        e.preventDefault();
        if(validate()){

            fetch("http://localhost:3000/users/" + username).then((res)=>{
                return res.json();
            }).then((resp)=>{
                console.log(resp);
                if(Object.keys(resp).length===0){
                    toast.error('Please enter valid user')
                }else {
                     if(resp.pass=== btoa(pass)){
                         //console.log('thanhcong');
                         toast.success('Đăng nhập thành công');
                         sessionStorage.setItem("username", username );
                         navigate('/');

                     }  else {
                            toast.error('erorr');
                        }
                        if (rememberMe) {
                            const loginInfo = {username, password: pass};
                            Cookies.set('username', username, {expires: 7});
                            Cookies.set('password', pass, {expires: 7});
                            Cookies.set('rememberMe', rememberMe ? 'true' : 'false', {expires: 7});
                        } else {
                            Cookies.remove('loginInfo');
                        }



                    }

                })

                .catch((err)=>{
                toast.error('login faile due to:' + err.message());
            })

        }
    }

    const validate=() =>{
        let result =true;
        if(username==='' || username === null){
            result = false;
            toast.warning('please enter username');
        }
        if(pass==='' || pass === null){
            result = false;
            toast.warning('please enter password');
        }
        return result;

    }

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    };

    return (
        <Wrapper>
            <div className="login-container">
                <h2 className="common-heading">Login</h2>
                <div className="container">
                    <div className="contact-form">
                        <form onSubmit={ProceedLogin} method="POST" className="contact-inputs">
                            <label className="text">Username</label>
                            <input value={username} onChange={e=>usernameupdate(e.target.value)} className="input" type="text" placeholder="Username" name="username" autoComplete="off" required/>
                            <lebel className="text">Password</lebel>
                            <input value={pass} onChange={e=>passupdate(e.target.value)}className="input" type="password" name="Password" placeholder="Password" autoComplete="off" required/>

                            <div className="remember-me">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={handleRememberMeChange}
                                />
                                <label style={{fontSize: "medium"}}>Remember Me</label>
                            </div>
                            <div className="text" style={{textAlign: "left", color: "gray", fontSize:14}}>
                                Bạn chưa có tài khoản?

                                <Link to={'/Register'}> Tạo tài khoản</Link>
                            </div>

                            <div style={{textAlign: "right"}}>
                                <Button className="login" type="submit">LOGIN</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}


const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;
  background: url("https://scr.vn/wp-content/uploads/2020/07/H%C3%ACnh-n%E1%BB%81n-Li%C3%AAn-Qu%C3%A2n-Full-HD.jpg");
  background-size: cover;

  .login-container {
    background-color: aliceblue;
    border-radius: 5rem;
    max-width: 35rem;
    height: 51rem;
    margin: auto;
  }
  .remember-me {
    margin-right: auto;
  }
  .common-heading {
    padding-top: 2rem;
  }
  .container {
    margin-top: 6rem;

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
        .login {
          width: 13rem;
          border-radius: 10px;
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

export default Login;
