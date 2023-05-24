import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import Nav from "./Nav";

class Header extends React.Component{
    render() {
        return(
            <MainHeader>
                <NavLink to="/">
                    <img className="logo" src="./images/logodnh.jpg" alt="my logo img" />
                </NavLink>
                <Nav />

            </MainHeader>
        );
    }
}

const MainHeader = styled.header`
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  
  .logo {
    padding-left: 3rem;
    height: 5rem;
  }
  
`;


export default Header;