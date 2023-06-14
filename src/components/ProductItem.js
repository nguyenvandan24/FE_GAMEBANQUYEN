import React, { useState, useEffect } from 'react';
import {NavLink} from "react-router-dom";

const ProductItem = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            {products.map(product => (
                <NavLink to={`/product_detail/${product.id}`} key={product.id}>
                    <div className="card" id="listProducts">
                        <div className="card-img">
                            <figure>
                                <img src={product.img} alt="" />
                                {/*<figcaption className="caption"></figcaption>*/}
                            </figure>
                        </div>
                        <div className="card-data">
                            <div className="card-data-flex">
                                <h3>{product.name}</h3>
                                <p className="card-data--price-x">{product.price}</p>
                            </div>
                        </div>
                    </div>
                </NavLink>
            ))}
        </div>
    );
};

export default ProductItem;
