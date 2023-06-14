import React, {useEffect, useState} from "react";
// import {useProductContext} from "../context/productcontext";
import styled from "styled-components";
import Product from "./Product";
import {NavLink} from "react-router-dom";
import FormatPrice from "../heplers/FormatPrice";
import axios from "axios";
import ProductItem from "./ProductItem";


const FeatureProduct = () => {
    // const { isLoading, featureProducts } = useProductContext();

    // if (isLoading){
    //     return <div> ......Loading</div>;
    // }

    return <Wrapper className="section">
        <div className="container">
            <div className="intro-data">Check Now!</div>
            <div className="common-heading"> Our Feature Services </div>
            <div className="grid grid-three-column">

                {/*<NavLink to="/product_detail/:id">*/}
                {/*    <div className="card" id="listProducts">*/}
                {/*        <div className="card-img">*/}
                {/*            <figure>*/}
                {/*                <img src="/images/categories-01.jpg" alt="" />*/}
                {/*                /!*<figcaption className="caption"></figcaption>*!/*/}
                {/*            </figure>*/}
                {/*        </div>*/}
                {/*        <div className="card-data">*/}
                {/*            <div className="card-data-flex">*/}
                {/*                <h3>Game</h3>*/}
                {/*                <p className="card-data--price-x">{<FormatPrice price="50"/>}</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</NavLink>*/}
                {/*<NavLink to="/product_detail/:id">*/}
                {/*    <div className="card">*/}
                {/*        <div className="card-img">*/}
                {/*            <figure>*/}
                {/*                <img src="/images/categories-01.jpg" alt="" />*/}
                {/*                /!*<figcaption className="caption"></figcaption>*!/*/}
                {/*            </figure>*/}
                {/*        </div>*/}
                {/*        <div className="card-data">*/}
                {/*            <div className="card-data-flex">*/}
                {/*                <h3>Game</h3>*/}
                {/*                <p className="card-data--price-x">50$</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</NavLink>*/}
                {/*<NavLink to="/product_detail/:id">*/}
                {/*    <div className="card">*/}
                {/*        <div className="card-img">*/}
                {/*            <figure>*/}
                {/*                <img src="/images/categories-01.jpg" alt="" />*/}
                {/*                /!*<figcaption className="caption"></figcaption>*!/*/}
                {/*            </figure>*/}
                {/*        </div>*/}
                {/*        <div className="card-data">*/}
                {/*            <div className="card-data-flex">*/}
                {/*                <h3>Game</h3>*/}
                {/*                <p className="card-data--price-x">50$</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</NavLink>*/}
                {/*{*/}
                {/*    featureProducts.map((curElem) => {*/}
                {/*        return <Product  key={curElem.id} {...curElem} />*/}
                {/*    })*/}
                {/*}*/}
            </div>
        </div>
    </Wrapper>;
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

      .container {
        max-width: 120rem;
      }
      
      figure{
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
        transition: all 0.5s linear;
        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          transition: all 0.2s linear;
          cursor: pointer;
        }
        
        &:hover::after {
          width: 100%;
        }
        
        &:hover img{
          transform: scale(1.2);
        }
        img {
          max-width: 90%;
          margin-top: 1.5rem;
          height: 20rem;
          transition: all 0.2s linear;
        }
        
        .caption {
          position: absolute;
          top: 15%;
          right: 10%;
          text-transform: uppercase;
          background-color: ${({ theme }) => theme.colors.bg};
          color: ${({ theme }) => theme.colors.help};
          padding: 0.8rem 2rem;
          font-size: 1.2rem;
          border-radius: 2rem;
        }
      }
      .card {
        background-color: #61dafb;
        border-radius: 1rem;

        .card-img{
          border-radius: 1rem;
        }
        .card-data {
          padding: 0 2rem;
          display: inline-block;
        }
        .card-data-flex {
          margin: 2rem 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        h3{
          color: ${({ theme }) => theme.colors.text};
          text-transform: capitalize;
          display: inline-block;
        }

        .card-data--price-x {
            // color: ${({ theme }) => theme.colors.help};
          display: inline-block;
          padding-left: 240px;
        }

        .btn{
          margin: 2rem auto;
          background-color: rgb(0 0 0 / 0%);
          border: 0.1rem solid rgb(98 84 243);
          display: flex;
          justify-content: center;
          align-items: center;

          &:hover {
            background-color: rgb(98 84 243);
          }

          &:hover a {
            color: #fff;
          }

          a {
            color: rgb(98 84 243);
            font-size: 1.4rem;
          }
        }
      }
`;
export default FeatureProduct;
