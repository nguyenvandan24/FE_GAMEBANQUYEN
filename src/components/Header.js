import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { TbShoppingBag } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import {useTranslation} from "react-i18next";

export default function Header () {
    const { t, i18n } = useTranslation();

    const currentLanguage = i18n.language

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

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
                                {t('home')}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" className="navbar-link">
                                {t('product')}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="navbar-link">
                                {t('about')}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="navbar-link">
                                {t('contact')}
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
                        <div>
                            <a>
                                <li className="nav-item d-flex align-items-center header-profile2">
                                    <i className="header__navbar-icon fas fa-globe"></i>
                                    <div className="text"><h4 className="font-w500 mb-0 ms-2 text-while">{currentLanguage == 'vi' ? 'Tiếng Việt' : "English"}</h4></div>
                                    <ul className="header__navbar-user-menu">
                                        <a href="javascript:void(0);" className="header__navbar-languge-link"
                                           onClick={() => changeLanguage('vi')}>
                                            <li className="header__navber-languge-item">Tiếng Việt</li>
                                        </a>
                                        <a href="javascript:void(0);" className="header__navbar-languge-link"
                                           onClick={() => changeLanguage('en')}>
                                            <li className="header__navber-languge-item">English</li>
                                        </a>
                                    </ul>
                                </li>
                            </a>
                        </div>
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

  .header__navbar-icon {
    font-size: 1.8rem;
    color: #fff;
  }

  .font-w500 {
    font-weight: 500;
  }

  .text-white {
    color: #fff;
  }

  .header__navbar-user-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 999;
    display: none;
    padding: 0.5rem;
    background-color: #fff;
    list-style: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }

  .header__navbar-languge-link {
    text-decoration: none;
    color: #000;
    transition: color 0.3s linear;
  }

  .header__navbar-languge-link:hover {
    color: #333;
  }

  .header__navber-languge-item {
    padding: 0.5rem;
  }

  .header-profile2 {
    position: relative;
    cursor: pointer;
  }

  .header-profile2:hover .header__navbar-user-menu {
    display: block;
  }
  .text{
    padding-right: 20px;
  }
`;
