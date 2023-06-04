import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import FormatPrice from "../heplers/FormatPrice";

const Products = (curElem) => {
     const {id, name, image, price, category} = curElem;
    return (
        <NavLink to={`/product_detail/${id}`}>
            <div className="card">
                <figure>
                    <img src={image} alt={name} />
                    <figcaption></figcaption>
                </figure>
                <div className="card-data">
                    <div className="card-data-flex">
                        <h3>{name}</h3>
                        <p className="card-data--price">{<FormatPrice price={price}/>}</p>
                    </div>
                </div>
            </div>
        </NavLink>
        // <Wrapper>
        //     <div className="container grid grid-filter-column">
        //         <div>
        //             <FilterSection/>
        //         </div>
        //         <section className="product-view--sort">
        //             <div className="sort-filter">
        //                 <Sort/>
        //             </div>
        //             <div className="main-product">
        //                 <ProductList/>
        //             </div>
        //         </section>
        //     </div>
        // </Wrapper>
    );
}
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