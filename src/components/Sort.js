import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {BsFillGridFill, BsList} from "react-icons/bs";
import {useFilterContext} from "../context/filter_context";

const Sort = () => {
    const { filter_products, grid_view, setGridView, setListView, sorting} = useFilterContext();

    return (
        <Wrapper className="sort-section">
            {/* 1st column */}
            <div className="sorting-list--grid">
                <button className= {grid_view ? "active sort-btn" : "sort-btn"}
                    onClick={setGridView}>
                    <BsFillGridFill className="icon" />
                </button>
                <button className= { !grid_view ? "active sort-btn" : " sort-btn"}
                    onClick={setListView}>
                    <BsList className="icon"/>
                </button>
            </div>
            {/* 2st column */}
            {/*<div className="product-data">*/}
            {/*    /!* tong san pham*!/*/}
            {/*    <h3><b>Game</b></h3>*/}
            {/*</div>*/}
            {/* 3rd column */}
        </Wrapper>
    )
};
const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 0.8rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #61dafb;
    }
  }
  
`;
export default Sort;
