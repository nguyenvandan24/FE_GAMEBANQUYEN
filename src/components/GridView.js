import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
const GridView = () => {
    const [products, setProducts] = useState([]);
    const [defaultProducts, setDefaultProducts] =useState([]);
    const [sortOption, setSortOption] = useState('default');

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setDefaultProducts(data)
            })
            .catch(error => {
                console.log("Lỗi:" , error);
            });
    },[]);

    const sortProducts = (option) => {
        if(option === 'default'){
            setProducts(defaultProducts);
        }else {
            let sortedProducts = [...products];

            if(option === 'priceDescending'){
                sortedProducts.sort((a,b) => b.price - a.price);
            }else {
                if (option === 'priceAscending'){
                    sortedProducts.sort((a,b) => a.price - b.price)
                }
            }
            setProducts(sortedProducts);
        }
        setSortOption(option);
    }
    return (
        <Wrapper className="section">
            <div className="arrange-price">
                <label>Sắp xếp:</label>
                <select id="sort" value={sortOption} onChange={(e) => sortProducts(e.target.value)}>
                    <option value="default">Mặc định</option>
                    <option value="priceDescending">Giá giảm dần</option>
                    <option value="priceAscending">Giá tăng dần</option>
                </select>
            </div>
            <div className="container grid grid-three-column">
                {products.map(product => (
                    <NavLink to={`/product_detail/${product.id}`} key={product.id}>
                        <div className="card" id="listProducts">
                            <div className="card-img">
                                <figure>
                                    <img width={250} src={product.img} alt="" />
                                </figure>
                            </div>
                            <div className="card-data">
                                <div className="card-data-flex">
                                    <h3>{product.name}</h3>
                                    <p className="card-data--price-x">{product.price}VNĐ</p>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                ))}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  .arrange-price {
    padding-bottom: 2rem;
  }
  .container {
    max-width: 120rem;
  }
  .grid {
    gap: 3.2rem;
  }
  figure {
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
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }
  .card {
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    .card-data {
      padding: 0 1rem;
    }
    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }
    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }
    .btn {
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
export default GridView;