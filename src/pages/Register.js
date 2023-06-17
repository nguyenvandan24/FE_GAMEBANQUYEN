import React, {useRef, useState} from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";
import {Button} from "../styles/Button";
import {useNavigate} from "react-router-dom";
import bcrypt from 'bcryptjs';
import sha256 from 'crypto-js/sha256';






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
        let errormessage= 'please enter the value in';
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
            toast.warning('password incorrect ');

        }
        if(!isproceed){
            toast.warning(errormessage);
        }else {
            if (/^[a-zA=Z0-9]+@[a-zA=Z0-9]+\.[A-Za-z]+$/.test(email)){

            }else{
                isproceed =false;
                toast.warning('please enter the valid email ');
            }
        }

        return isproceed;
    }
    // Kiểm tra username đã tồn tại trong cơ sở dữ liệu
    // const isUsernameExists = (id) => {
    //     return fetch(`http://localhost:3000/users?id=${id}`)
    //         .then((response) => response.json())
    //         .then((users) => users.length > 0);
    //
    // };
    // const isUsernameExists = (username) => {
    //     const users = router.db.get('users').value();
    //     const existingUser = users.find((user) => user.username === username);
    //     return !!existingUser;
    // };





    const handledsubmit= (e) => {
        e.preventDefault();

        // Mã hóa mật khẩu
        const hashedPass = bcrypt.hashSync(pass, 10);
        window.localStorage.setItem(
            "login",
            JSON.stringify({ id, hashedPass })
        );
        // console.log(hashedPass);

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

            // fetch('http://localhost:3000/users', {
            //     method: "POST",
            //     headers: {'Content-Type': 'application/json'},
            //     body: JSON.stringify(regobj)
            // })
            //     .then((res) => {
            //         toast.success('Register sucessfully');
            //         navigate('/login');
            //     })
            //     .catch((err) => {
            //         toast.success('Faile:' + err.message);
            //
            //
            //     });
            // Kiểm tra username, email đã tồn tại trong cơ sở dữ liệu
            fetch('http://localhost:3000/users')
                .then((response) => response.json())
                .then((data) => {
                    const existingUser = data.find((user) => user.id === id);
                    const existingEmail = data.find((user) => user.email === email);

                    if (existingUser) {
                        toast.error('Username already exists');
                    } else if (existingEmail) {
                        toast.error('Email already exists');

                    } else {
                        fetch('http://localhost:3000/users', {
                            method: "POST",
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify(regobj)
                        })
                            .then(() => {
                                toast.success('Register successfully');
                                navigate('/login');
                            })
                            .catch((err) => {
                                toast.error('Failed: ' + err.message);
                            });
                    }
                })
                .catch((err) => {
                    toast.error('Failed: ' + err.message);
                });

        }

    }



// class Regiser extends React.Component{
//     render() {
    return (
        <Wrapper>
            <div className="register-container">
                <h2 className="common-heading">Register</h2>
                <div className="container" onSubmit={handledsubmit}>
                    <div className="contact-form">
                        <form method="POST" className="contact-inputs">
                            <label className="text">Full name</label>
                            <input value={fullname} onChange={e=>fullnamechange(e.target.value)} className="input" type="text" placeholder="Full name" name="username" autoComplete="off" required/>

                            <label className="text">Email</label>
                            <input value={email} onChange={e=>emailchange(e.target.value)} className="input" type="email" name="Email" placeholder="Email" autoComplete="off" required/>

                            <label className="text">Phone</label>
                            <input value={phone} onChange={e=>phonechange(e.target.value)} className="input" type="phone" name="Phone" placeholder="Phone" autoComplete="off" required/>

                            <label className="text">Username</label>
                            <input value={id} onChange={e=>idchange(e.target.value)} className="input" type="text" placeholder="Username" name="username" autoComplete="off" required/>

                            <label className="text">Password</label>
                            <input value={pass} onChange={e=>passchange(e.target.value)} className="input" type="password" name="password" placeholder="Password" autoComplete="off" required/>

                            <label className="text">Re-Password</label>
                            <input value={repass} onChange={e=>repasschange(e.target.value)} className="input" type="password" name="password" placeholder="Re-password" autoComplete="off" required/>

                            <div style={{textAlign: "right"}}>
                                <Button  className="register" type="submit"  >Register</Button>
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
