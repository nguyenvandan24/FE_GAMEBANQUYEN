import React from "react";
import styled from "styled-components";
import {Button} from "../styles/Button";
class Regiser extends React.Component{
    render() {
        return (
            <Wrapper>
                <div className="register-container">
                    <h2 className="common-heading">Register</h2>
                    <div className="container">
                        <div className="contact-form">
                            <form method="POST" className="contact-inputs">
                                <label className="text">Full name</label>
                                <input className="input" type="text" placeholder="Full name" name="username" autoComplete="off" required/>
                                <lebel className="text">Email</lebel>
                                <input className="input" type="email" name="Email" placeholder="Email" autoComplete="off" required/>
                                <label className="text">Username</label>
                                <input className="input" type="text" placeholder="Username" name="username" autoComplete="off" required/>
                                <lebel className="text">Password</lebel>
                                <input className="input" type="password" name="password" placeholder="Password" autoComplete="off" required/>
                                <lebel className="text">Re-Password</lebel>
                                <input className="input" type="password" name="password" placeholder="Re-password" autoComplete="off" required/>
                                <div style={{textAlign: "right"}}>
                                    <Button className="login" type="submit">Register</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Wrapper>
        );
    }
}

const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;
    .register-container {
      background-color: aliceblue;
      border-radius: 5rem;
      max-width: 40rem;
      height: 78rem;
      margin: auto;
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

export default Regiser;
