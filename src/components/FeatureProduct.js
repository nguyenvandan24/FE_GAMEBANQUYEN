import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const FeatureProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return <Wrapper className="section">
        <div className="container">
            <div className="intro-data">Check Now!</div>
            <div className="common-heading"> Our Feature Services </div>
            <div className="grid grid-three-column">
                    {/* Hiển thị danh sách 3 sản phẩm */}
                    {products.slice(0, 3).map(product => (
                        <NavLink to={`/product_detail/${product.id}`} key={product.id}>
                            <div className="card" id="listProducts">
                                <div className="card-img">
                                    <figure>
                                        <img src={product.img} />
                                    </figure>
                                </div>
                                <div className="card-data">
                                    <div className="card-data-flex">
                                        <h3>{product.name}</h3>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    ))}
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

        .card-data--price {
            // color: ${({ theme }) => theme.colors.help};
          display: inline-block;
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
