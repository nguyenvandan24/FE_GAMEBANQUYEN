import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import styled from "styled-components";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
    return (
        <Wrapper>
            {/*<div className="cart-button">*/}
            {/*    <div className="amount-toggle">*/}
            {/*        <button onClick={() => setDecrease()}>*/}
            {/*            <FaMinus />*/}
            {/*        </button>*/}
            {/*        <div className="amount-style">{amount} 1</div>*/}
            {/*        <button onClick={() => setIncrease()}>*/}
            {/*            <FaPlus />*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="cart-button">
                <div className="amount">
                    <button>
                        <FaMinus />
                    </button>
                    <div className="amount-style">{amount} 1</div>
                    <button>
                        <FaPlus />
                    </button>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  button {
    border: none;
    background-color: #fff;
    border-radius: 0.5rem;
    cursor: pointer;
  }
    .amount {
      margin-bottom: 3rem;
      margin-top: 3rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  .amount-style{
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 2rem;
  }
`;
export default CartAmountToggle;