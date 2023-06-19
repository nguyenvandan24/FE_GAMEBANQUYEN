import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import bcrypt from "bcryptjs";

const UserProfile = () => {
    const usenavigate = useNavigate();
    const [loginInUsername, setLoginInUsername] = useState('');

    useEffect(() => {
        let username = sessionStorage.getItem('username');
        if (username === '' || username === null) {
            usenavigate('/Login');
        }else {
            setLoginInUsername(username)
        }
    }, []);


    const [id, setID] = useState("");
    const [email, setEmail] = useState("");
    const [fullname, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [pass, setPass] = useState("");
    const [repass, setRePass] = useState("");


    useEffect(() => {
        fetch(`http://localhost:3000/users/${loginInUsername}`)
            .then((response) => response.json())
            .then((data) => {
                setFullName(data.fullname);
                setEmail(data.email);
                setID(data.id);
                setPhone(data.phone);
                setPass(data.pass);
                setRePass(data.repass)
            })
            .catch((error) => {
                console.log("Error:", error);
            });
    }, [loginInUsername]);

    const handleEditClick = () => {
        setShowForm(true);
    };

    const handleSaveClick = () => {
        const hashedPass = btoa(pass);

        if (pass !== repass){
            toast.error("Mật khẩu nhập vào không trùng khớp.");
            return;
        }
        if(pass.length < 8 || repass < 8){
            toast.error("Mật khẩu phải lớn hơn hoặc bằng 8 ký tự.");
                return;
        }
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/;
        if (!passwordRegex.test(pass)){
            toast.error("Mật khẩu phải chứa chữ cái và ký tự đặc biệt.")
            return;
        }
        const updatedUser = {
            id: id,
            email: email,
            fullname: fullname,
            phone: phone,
            pass: hashedPass,
            repass: hashedPass,
        };

        fetch(`http://localhost:3000/users/${loginInUsername}`, {
            method: "PUT", // or "PATCH" if you want to partially update the user
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser),
        })
            .then((response) => response.json())
            .then((data) => {
                toast.success("Thay đổi thông tin thành công!");
                console.log("User updated successfully:", data);
                setShowForm(false);
            })
            .catch((error) => {
                console.log("Error:", error);
            });
    };


    return (
        <Wrapper>
            <div className="conn">
                <div className="container-profile">
                    <h2>User Profile</h2>
                    {showForm ? (
                        <div>
                            <div className="grid grid-two-column">
                                <div className="data-form">
                                    <label>Username: </label>
                                    <input
                                        className="input"
                                        value={id}
                                        onChange={(e) => setID(e.target.value)}
                                    />
                                </div>
                                <div className="data-form">
                                    <label>Email: </label>
                                    <input
                                        className="input"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="data-form">
                                    <label>Full Name: </label>
                                    <input
                                        className="input"
                                        value={fullname}
                                        onChange={(e) => setFullName(e.target.value)}
                                    />
                                </div>
                                <div className="data-form">
                                    <label>Phone: </label>
                                    <input
                                        className="input"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                                <div className="data-form">
                                    <label>Password: </label>
                                    <input
                                        className="input"
                                        value={pass}
                                        onChange={(e) => setPass(e.target.value)}
                                    />
                                </div>
                                <div className="data-form">
                                    <label>RePass: </label>
                                    <input
                                        className="input"
                                        value={repass}
                                        onChange={(e) => setRePass(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="button" style={{ textAlign: "right" }}>
                                <Button className="btn" type="submit" onClick={handleSaveClick}>
                                    Xác nhận
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="grid grid-two-column">
                                <div className="data-form">
                                    <label>Username:</label>
                                    <span>{id}</span>
                                </div>
                                <div className="data-form">
                                    <label>Email:</label>
                                    <span>{email}</span>
                                </div>
                                <div className="data-form">
                                    <label>Full Name:</label>
                                    <span>{fullname}</span>
                                </div>
                                <div className="data-form">
                                    <label>Phone:</label>
                                    <span>{phone}</span>
                                </div>
                            </div>
                            <div className="button-btn" style={{ textAlign: "right" }}>
                                <Button className="btn">
                                    <Link to="/login" className="navbar-link">logout</Link>
                                </Button>
                                <Button className="btn" type="submit" onClick={handleEditClick}>
                                    Edit
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  padding: 30px;
  padding-bottom: 100px;

  h2 {
    padding-top: 10px;
    text-align: center;
    font-size: 24px;
    margin-bottom: 10px;
  }

  .conn {
    justify-content: center;
    align-content: center;
  }

  .container-profile {
    padding: 1rem;
    text-align: center;
    background-color: aliceblue;
    border-radius: 5rem;
    max-width: 60rem;
    height: 30rem;
    margin: auto;
  }

  .input {
    border-radius: 10px;
    height: 20px;
    text-transform: none;
  }

  .button {
    padding-top: 10px;
   margin-right: 49px;


    .btn {
      border-radius: 15px;
      text-transform: none;
      height: 50px;
      
    }
  }

  .button-btn {
    padding-top: 50px;
    display: flex;
    justify-content: space-between;

    .btn {
      border-radius: 15px;
      text-transform: none;
      height: 50px;
      margin-left: 30px;
      margin-right: 33px;
    }
  }

  .data-form {
    text-align: left;
    margin-left: 30px;
    font-size: 15px;
  }


`;

export default UserProfile;