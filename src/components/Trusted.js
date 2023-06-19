import React from "react";
import styled from "styled-components";

class Trusted extends React.Component{
    render() {
        return(
            <Wrapper className="brand-section">
                <div className="container">
                    <h3>Được tin cậy bởi 100+ công ty</h3>
                </div>
            </Wrapper>
        );
    }
}

const Wrapper = styled.section`
    padding: 9rem 0;
    background-color: ${({ theme }) => theme.colors.bg};
    
    .brand-section {
      padding: 12rem 0 0 0;
    }
  
    h3 {
      text-align: center;
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.text};
      font-size: 2rem;
      font-weight: bold;
    }
    img {
      min-width: 10rem;
      height: 10rem;
    }
    .brand-section-slider {
      margin-top: 3.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
    }
    @media (max-width: ${({ theme }) => theme.media.mobileToDesktop}){
      .brand-section-slider {
        margin-top: 3.2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        text-align: center;
      }
    }
`;
export default Trusted;