import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {NavLink, useParams} from "react-router-dom";
import PageNavigation from "../components/PageNavigation";
import {Container} from "../styles/Container";
import Tabs from "../components/Tabs";
import Comment from "../components/Comment";
import {Button} from "../styles/Button";
import {toast} from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import {useTranslation} from "react-i18next";

const ProductDetail = () => {
    const { t, i18n } = useTranslation();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const username = sessionStorage.getItem("username");
    const [quantity, setQuantity] = useState(1);
    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    useEffect(() => {
        fetch(`http://localhost:3000/products/${id}`)
            .then(response => response.json())
            .then(data => {
                setProduct(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    useEffect(() => {
        const userCartKey = `cartItems_${username}`;
        const storedCartItems = localStorage.getItem(userCartKey);
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, [username]);

    const handleAddToCart = (event) => {

        const userCartKey = `cartItems_${username}`;
        const storedCartItems = localStorage.getItem(userCartKey);

        let updatedCartItems = [];

        if(storedCartItems){
            updatedCartItems = JSON.parse(storedCartItems);
        }

        const existingProduct = updatedCartItems.find((item) => item.id === product.id);
        if (existingProduct) {
            event.preventDefault();
            // Product already exists in the cart
            // Perform any desired action like showing a message
            toast.warning("Sản phẩm đã tồn tại trong giỏ hàng");
            return;
        }

        updatedCartItems.push({...product, quantity});

        localStorage.setItem(userCartKey, JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
        toast.success("Thêm vào giỏ hàng thành công");
    }

    if (!product) {
        return <div>Loading...</div>;
    }

    return(
        <Wrapper>
            <PageNavigation title={product.id} />
            <Container className="container">
                <div className="grid grid-two-column">
                    <div className="product_images">
                        <img width={500} src={product.img}/>
                    </div>

                    <div className="product_data">
                        <h2>{product.name}</h2>
                        <p className="product-data-price product-data-real-price">
                            {t('price')}: {product.price}VNĐ
                        </p>
                        <div className="product-data-info">
                            <p>
                                {t('category')} :<span> {product.category} </span>
                            </p>
                        </div>
                        <hr/>
                       <div className="amount">
                            <button onClick={handleDecreaseQuantity}>
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <span className="quantity">{quantity}</span>
                            <button onClick={handleIncreaseQuantity}>
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                       </div>
                        <div className="addToCart">
                            <NavLink to="/cart">
                                <Button className="btn" onClick={handleAddToCart}>{t('addToCart')}</Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <Tabs>
                    <div label={t('description')}>
                        {product.description}
                    </div>
                    <div label={t('otherFeature')}>
                        {product.mainfeature}
                    </div>
                    <div label={t('system')}>
                        {t('experience')} {product.name}, {t('computer')}:<br/>

                        <b>{t('opera')}:</b> {product.hedieuhanh}<br/>
                        <b>{t('microprocessor')}:</b> {product.bovixuly}<br/>
                        <b>RAM:</b> {product.bonho}<br/>
                        <b>{t('graphics')}:</b> {product.dohoa}<br/>
                        <b>{t('hardDisk')}:</b> {product.dungluongocung}<br/>
                    </div>
                    <div label={t('download')}>
                        {t('link')}<br/>
                        {t('file')}<br/>
                        {t('complete')} {product.name} {t('freely')}
                    </div>
                </Tabs>
                <Comment id={id}/>
            </Container>
        </Wrapper>
    );
}
const Wrapper = styled.section`  
  .container {
    padding: 9rem 0;
  }

  .product_images {
    display: flex;
    align-items: center;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
  .addToCart{
    padding-top: 2em;
  }
  
  .amount{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80px;
    padding-top: 2em;
  }
  
  .amount button{
    border: none;
    background: none;
    cursor: pointer;
  }
  
  .quantity {
    margin: 0 10px;
    font-size: 2rem;
  }
`;
export default ProductDetail;