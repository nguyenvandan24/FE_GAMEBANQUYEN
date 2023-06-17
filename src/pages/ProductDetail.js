import {useEffect, useState} from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import PageNavigation from "../components/PageNavigation";
import {Container} from "../styles/Container";
import Star from "../components/Star";
import AddToCart from "../components/AddToCart";
import Tabs from "../components/Tabs";
import Comment from "../components/Comment";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

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
                        <Star/>
                        <p className="product-data-price product-data-real-price">
                            Giá: {product.price}
                        </p>
                        <div className="product-data-info">
                            <p>
                                Thể loại :<span> {product.category} </span>
                            </p>
                        </div>
                        <hr/>
                        <AddToCart />
                    </div>
                </div>
                <Tabs>
                    <div label="Mô tả">
                        {product.description}
                    </div>
                    <div label="Tính năng khác">
                        {product.mainfeature}
                    </div>
                    <div label="Yêu cầu hệ thống">
                        Để có trải nghiệm tốt nhất khi chơi {product.name}, hãy đảm bảo rằng máy tính của bạn đáp ứng các yêu cầu hệ thống sau:<br/>

                        <b>Hệ điều hành:</b> {product.hedieuhanh}<br/>
                        <b>Bộ vi xử lý:</b> {product.bovixuly}<br/>
                        <b>RAM:</b> {product.bonho}<br/>
                        <b>Đồ họa:</b> {product.dohoa}<br/>
                        <b>Không gian đĩa cứng:</b> {product.dungluongocung}<br/>
                    </div>
                    <div label="Hướng dẫn tải">
                        Khách hàng sẽ nhận được mã code hoặc đường link để tải game. Sau đó tiến hành nhấn tải game.<br/>
                        Chạy file cài đặt và làm theo hướng dẫn trên màn hình.<br/>
                        Hoàn tất quá trình cài đặt và thưởng thức {product.name} một cách tự do!
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
`;
export default ProductDetail;