import React from "react";
import styled from "styled-components";
import {useFilterContext} from "../context/filter_context";

const FilterSection = () => {
    const {
        filters: { text, category}, updateFilterValue, all_products
    } = useFilterContext();
    //to get the unique data of earch  fields
    const getUniqueData = (data, attr) =>{
        let  newVal = data.map((curElem) =>{
            return curElem[attr];

        });

        return (newVal = ["All",...new Set(newVal)]);
        //console.log(newVal);
    }
    //we need to have the individual data of each in an array format
    const categoryOnlyData= getUniqueData(all_products, "category");

    return <Wrapper>
        {/*<div className="filter-search">*/}
        {/*    <form onSubmit={(e) => e.preventDefault()}>*/}
        {/*        <input type="text" name="text" value={text} onChange={updateFilterValue} placeholder="Search" />*/}
        {/*    </form>*/}
        {/*</div>*/}
        {/*<div className="filter-category">*/}
        {/*    <h3> Category</h3>*/}
        {/*    <div>*/}
        {/*        {categoryOnlyData.map((curElem, index) => {*/}
        {/*            return <button key = {index}*/}
        {/*                type="button" name =" category" value={category} onClick={updateFilterValue}>*/}
        {/*                {curElem}*/}
        {/*            </button>*/}

        {/*        })}*/}
        {/*    </div>*/}
        {/*</div>*/}
    </Wrapper>
};
const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size:medium;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter-category{
      div{
        display: flex;
        flex-direction: column;
        
      }
  }

`;

    export default FilterSection;
