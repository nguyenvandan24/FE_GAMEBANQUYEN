import React, {useEffect} from "react";
import styled from "styled-components";
import FilterSection from "../components/FilterSection";
import Sort from "../components/Sort";
import ProductList from "../components/ProductList";
import {useNavigate} from "react-router-dom";

const Products = () => {
    const usenavigate = useNavigate();
    useEffect(() => {
        let username = sessionStorage.getItem('username');
        if (username === '' || username === null) {
            usenavigate('/Login');

        }

    }, []);

    return( <Wrapper>
            <div className="container grid">
                {/*<div>*/}
                {/*    <FilterSection />*/}
                {/*</div>*/}
                <section className="product-view--sort">
                    <div className="sort-filter">
                        <Sort />
                    </div>
                    <div className="main-product">
                        <ProductList />
                    </div>
                </section>
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;