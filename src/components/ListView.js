import styled from "styled-components";
import ProductItem from "./ProductItem";
import ListItem from "./ListItem";

const ListView = ({ products }) => {
    return (
        <Wrapper className="section">
            <div className="container grid">
                <ListItem/>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .container {
    max-width: 120rem;
  }

  .grid {
    gap: 3.2rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  .card {
    background-color: aliceblue;
    border-radius: 1rem;
    

    .card-img{
      border-radius: 1rem;
    }
    .card-data {
      padding: 0 2rem;
      display: inline-block;
    }
    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3{
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
      display: inline-block;
    }

    .card-data--price {
        // color: ${({ theme }) => theme.colors.help};
      display: inline-block;
      padding-left: 700px;
    }

    .btn{
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }

      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;

export default ListView;