import React from "react";
import styled from "styled-components";
import {TbTruckDelivery} from "react-icons/tb";
import {GiReceiveMoney} from "react-icons/gi";
import {RiSecurePaymentLine} from "react-icons/ri";
import {MdSecurity} from "react-icons/md";


class Services extends React.Component{
    render() {
        return(
            <Wrapper>
                <div className="container">
                    <div className="grid grid-three-column">
                        <div className="services-1">
                            <div>
                                <TbTruckDelivery className="icon" />
                                <h3>Dịch vụ nhanh và miễn phí</h3>
                            </div>
                        </div>

                        <div className="services-2">
                            <div className="services-column-2">
                                <MdSecurity className="icon"/>
                                <h3>Vận chuyển không tiếp xúc</h3>
                            </div>
                            <div className="services-column-2">
                                <GiReceiveMoney  className="icon"/>
                                <h3>Đảm bảo hoàn tiền</h3>
                            </div>
                        </div>

                        <div className="services-3">
                            <div>
                                <RiSecurePaymentLine className="icon"/>
                                <h3>Hệ thống thanh toán an toàn</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        );
    }
}

const Wrapper = styled.section`
  padding: 9rem 0;
  
  .grid {
    gap: 4.8rem;
  }
  
  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background-color: ${({ theme }) => theme.colors.bg};
    text-align: center;
    align-items: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }
  
  .service-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;
    
    .services-2-column {
      background-color: ${({ theme }) => theme.colors.bg};
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }
  
  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }
  .icon {
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }
`;

export default Services;