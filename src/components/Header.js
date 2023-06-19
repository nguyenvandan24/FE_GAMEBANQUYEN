import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { TbShoppingBag } from "react-icons/tb";
import { FaUser } from "react-icons/fa";

const Header = ({ }) => {

    return (
        <MainHeader>
            <NavLink to="/">
                <img className="logo" src="./images/logodnh.jpg" alt="my logo img" />
            </NavLink>
            <StyledNav>
                <div className="navbar">
                    <ul className="navbar-lists">
                        <li>
                            <NavLink to="/" className="navbar-link home-link">
                                Trang chủ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" className="navbar-link">
                                Sản phẩm
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="navbar-link">
                                Thông tin
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="navbar-link">
                                Liên hệ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/user" className="navbar-link">
                                <FaUser className="fa-user" />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart" className="navbar-link cart-trolley--link">
                                <TbShoppingBag className="cart-trolley" />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </StyledNav>
        </MainHeader>
    );
};

const MainHeader = styled.header`
  height: 10rem;
  background-color: cornflowerblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    padding-left: 3rem;
    height: 5rem;
  }
`;

const StyledNav = styled.nav`
 .navbar-lists {
              display: flex;
              gap: 4.8rem;
              align-items: center;
              
              .navbar-link {
                &:link,
                &:visited {
                  display: inline-block;
                  text-decoration: none;
                  font-size: 1.5rem;
                  font-weight: 500;
                  padding-right: 2rem;
                  text-transform: uppercase;
                  color: ${({ theme }) => theme.colors.black};
                  transition: color0.3s linear;
                }
                
                &:hover,
                &:active {
                  color: ${({ theme }) => theme.colors.help};
                }
              }
            }
          
          .mobile-navbar-btn {
            display: none;
            background-color: transparent;
            cursor: pointer;
            border: none;
          }
          
          .mobile-nav-icon[name="close-outline"] {
            display: none;
          }
          
          .close-outline {
            display: none;
          }
          
          .cart-trolley--link {
            position: relative;
            
            .cart-trolley {
              position: relative;
              font-size: 3rem;
            }
            
            .cart-total--item {
              width: 2rem;
              height: 2rem;
              position: absolute;
              background-color: red;
              color: #000;
              border-radius: 50%;
              display: grid;
              place-items: center;
              top: -10%;
              left: 40%;
              background-color: ${({ theme }) => theme.colors.help};
            }
          }
          
          .user-login--name {
            text-transform: capitalize;
          }
          
          .user-logout,
          .user-login {
            font-size: 1.4rem;
            padding: 0.8rem 1.4rem;
          }
          
          @media (max-width: ${({ theme }) => theme.colors.mobileToDesktop}) {
            .mobile-navbar-btn {
              display: inline-block;
              z-index: 9999;
              border: ${({ theme }) => theme.colors.black};
              
              .mobile-nav-icon {
                font-size: 4.2rem;
                color: ${({ theme }) => theme.colors.black};
              }
            }
            
            .active .mobile-nav-icon {
              display: none;
              font-size: 4.2rem;
              position: absolute;
              top: 30%;
              right: 10%;
              color: ${({ theme }) => theme.colors.black};
              z-index: 9999;
            }
            
            .active .close-outline {
              display: inline-block;
            }
            
            .navbar-lists {
              width: 100vw;
              height: 100vh;
              position: absolute;
              top: 0;
              left: 0;
              background-color: #fff;
              
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              
              visibility: hidden;
              opacity: 0;
              transform: translateX(100%);
              transition: all 3s linear;
            }
            
            .active .navbar-lists {
              visibility: visible;
              opacity: 1;
              transform: translateX(0);
              z-index: 999;
              transform-origin: right;
              transition: all 3s linear;
              
              .navbar-link {
                font-size: 4.2rem;
              }
            }
            
            .cart-trolley--link {
              position: relative;
              
              .cart-trolley {
                position: relative;
                font-size: 5.2rem;
              }
              
              .cart-total--item {
                width: 4.2rem;
                height: 4.2rem;
                font-size: 2rem;
              }
            }
            
            .user-logout.
            .user-login {
              font-size: 2.2rem;
              padding: 0.8rem 1.4rem;
            }
          }
`;

export default Header;
