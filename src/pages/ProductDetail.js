import {useEffect} from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {useProductContext} from "../context/productcontext";
import PageNavigation from "../components/PageNavigation";
import {Container} from "../styles/Container";
import MyImage from "../components/MyImage";
import {TbReplace, TbTruckDelivery} from "react-icons/tb";
import {MdSecurity} from "react-icons/md";
import Star from "../components/Star";
import AddToCart from "../components/AddToCart";
import Tabs from "../components/Tabs";


const API = "https://api.pujakaitem.com/api/products";
const ProductDetail = () => {
    const {getProductDetail, isProductDetailLoading, productDetail} = useProductContext();
    const { id } = useParams();

    const {
        id: alias,
        name,
        company,
        price,
        description,
        category,
        stock,
        stars,
        reviews,
        image
    } = productDetail;
    useEffect( () => {
        getProductDetail(`${API}?id=${id}`);
    }, []);

    if(isProductDetailLoading){
        return <div className="page_loading"> Loading</div>
    }
    return(
        <Wrapper>
            <PageNavigation title={name} />
            <Container className="container">
                <div className="grid grid-two-column">
                    <div className="product_images">
                        <MyImage  imgs={image}/>
                    </div>

                    <div className="product_data">
                        {/*<h2>{name}</h2>*/}
                        <h2>Game bản quyền</h2>
                        <Star stars={stars} reviews={reviews}/>
                        {/*<p>{stars}</p>*/}
                        {/*<p>{reviews} reviews</p>*/}
                        <p className="product-data-price">
                            MRP:
                            <del>
                                {/*<FormatPrice price={price + 250000}/>*/}
                                500000VNĐ
                            </del>
                        </p>
                        <p className="product-data-price product-data-real-price">
                            Deal of the day: 1800000VNĐ
                            {/*<FormatPrice price={price}/>*/}
                        </p>
                        <p>{description}</p>
                        <div className="product-data-warranty">
                            <div className="product-warranty-data">
                                <TbTruckDelivery className="warranty-icon" />
                                <p>Free Delivery</p>
                            </div>

                            <div className="product-warranty-data">
                                <TbReplace className="warranty-icon" />
                                <p>30 Days Replacement</p>
                            </div>

                            <div className="product-warranty-data">
                                <TbTruckDelivery className="warranty-icon" />
                                <p>Thapa Delivered </p>
                            </div>

                            <div className="product-warranty-data">
                                <MdSecurity className="warranty-icon" />
                                <p>2 Year Warranty </p>
                            </div>
                        </div>

                        <div className="product-data-info">
                            <p>
                                Available:
                                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
                            </p>
                            <p>
                                ID<span> {id} ID200</span>
                            </p>
                            <p>
                                Brand :<span> {company} DNHCODE </span>
                            </p>
                        </div>
                        <hr/>
                        {/*{stock > 0 && <AddToCart product={productDetail} />}*/}
                        <AddToCart />
                    </div>
                </div>
                <Tabs>
                    <div label="Descriptions">
                        [Tên Game] là một tựa game [mô tả chi tiết về nội dung game, cốt truyện, hệ thống gameplay và tính năng đặc biệt].
                        Người chơi sẽ được tham gia vào một thế giới tuyệt vời, đắm mình trong những cuộc phiêu lưu đầy thách thức và hấp dẫn.
                        Hãy chuẩn bị cho mình những trận đấu hào hùng, khám phá những khu vực bí ẩn,
                        và tận hưởng cảm giác hồi hộp khi đối đầu với những kẻ thù nguy hiểm.
                    </div>
                    <div label="Main feature">
                        1. [Liệt kê các tính năng chính của game, ví dụ: đồ họa tuyệt đẹp, hệ thống chiến đấu đa dạng,
                        cấu trúc thế giới mở, chế độ chơi đơn và chơi đa người trực tuyến, v.v.]<br/>
                        2. ...<br/>
                        3. ...
                    </div>
                    <div label="System Requirements">
                        Để có trải nghiệm tốt nhất khi chơi [Tên Game], hãy đảm bảo rằng máy tính của bạn đáp ứng các yêu cầu hệ thống sau:<br/>

                        Hệ điều hành: [Hệ điều hành]<br/>
                        Bộ vi xử lý: [Bộ vi xử lý]<br/>
                        RAM: [RAM]<br/>
                        Đồ họa: [Yêu cầu đồ họa]<br/>
                        Không gian đĩa cứng: [Không gian trống yêu cầu]<br/>
                    </div>
                    <div label="Installation instructions">
                        Tải file cài đặt game từ [Liên kết tải game].<br/>
                        Chạy file cài đặt và làm theo hướng dẫn trên màn hình.<br/>
                        Hoàn tất quá trình cài đặt và thưởng thức [Tên Game] một cách tự do và miễn phí!
                    </div>
                </Tabs>
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