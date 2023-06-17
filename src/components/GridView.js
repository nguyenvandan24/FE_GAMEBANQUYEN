import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import ReactPaginate from "react-paginate";
const GridView = () => {
    const [products, setProducts] = useState([]);
    const [defaultProducts, setDefaultProducts] =useState([]);
    const [sortOption, setSortOption] = useState('default');
    const [categoryOption, setCategoryOption] = useState('all');

    const [currentPage, setCurrentPage] = useState(0); // Trang hiện tại
    const itemsPerPage = 6; // Số lượng mục trên mỗi trang
    const pageCount = Math.ceil(products.length / itemsPerPage); // Tổng số trang

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setDefaultProducts(data)
            })
            .catch(error => {
                console.log("Lỗi:" , error);
            });
    },[]);

    const sortProducts = (option) => {
        if(option === 'default'){
            setProducts(defaultProducts);
        }else {
            let sortedProducts = [...products];

            if(option === 'priceDescending'){
                sortedProducts.sort((a,b) => b.price - a.price);
            }else {
                if (option === 'priceAscending'){
                    sortedProducts.sort((a,b) => a.price - b.price)
                }
            }
            setProducts(sortedProducts);
        }
        setSortOption(option);
    }

    const categoryProducts = (option) => {
        if (option === 'all'){
            setProducts(defaultProducts);
        } else {
            if (option === 'action'){
                const filteredProducts = defaultProducts.filter(product => product.category === 'Action');
                setProducts(filteredProducts);
            }
            if (option === 'adventure'){
                const filteredProducts = defaultProducts.filter(product => product.category === 'Adventure');
                setProducts(filteredProducts);
            }
            if (option === 'shooter'){
                const filteredProducts = defaultProducts.filter(product => product.category === 'Shooter');
                setProducts(filteredProducts);
            }
            if (option === 'sports'){
                const filteredProducts = defaultProducts.filter(product => product.category === 'Sports');
                setProducts(filteredProducts);
            }
            if (option === 'stratery'){
                const filteredProducts = defaultProducts.filter(product => product.category === 'Stratery');
                setProducts(filteredProducts);
            }
        }
        setCategoryOption(option);
    };

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const getCurrentPageData = () => {
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        //filteredProducts tim kiem trong tung trang
        return filteredProducts.slice(startIndex, endIndex);
    };
    //search
    const [search, setSearch] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const filteredData = products.filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase());
        });
        setFilteredProducts(filteredData);
    }, [products, search]);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };



    return (
        <Wrapper className="section">
            <div className="grid grid-three-column">
                <div className="arrange-price">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input
                            className="search"
                            value={search}
                            type="text"
                            name="text"
                            placeholder="Search"
                            onChange={handleChange}
                        />
                    </form>
                </div>
                <div className="arrange-category">
                    <label>Thể loại game:</label>
                    <select id="category" value={categoryOption} onChange={(e) => categoryProducts(e.target.value)}>
                        <option value="all">Tất cả</option>
                        <option value="action">Action</option>
                        <option value="adventure">Adventure</option>
                        <option value="shooter">Shooter</option>
                        <option value="sports">Sports</option>
                        <option value="stratery">Stratery</option>
                    </select>
                </div>
            <div className="arrange-price">
                <label>Sắp xếp:</label>
                <select id="sort" value={sortOption} onChange={(e) => sortProducts(e.target.value)}>
                    <option value="default">Mặc định</option>
                    <option value="priceDescending">Giá giảm dần</option>
                    <option value="priceAscending">Giá tăng dần</option>
                </select>
            </div>
            </div>
            <div className="container grid grid-three-column">
                {getCurrentPageData().map((product) => (
                    <NavLink to={`/product_detail/${product.id}`} key={product.id}>
                        <div className="card" id="listProducts">
                            <div className="card-img">
                                <figure>
                                    <img width={250} src={product.img} alt="" />
                                </figure>
                            </div>
                            <div className="card-data">
                                <div className="card-data-flex">
                                    <h3>{product.name}</h3>
                                    <p className="card-data--price-x">{product.price}VNĐ</p>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                ))}
            </div>
            <div className="pagination-container">
                <ReactPaginate
                    pageCount={pageCount}
                    onPageChange={handlePageChange}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  .search{
    height: 15px;
    width: 200px;
    text-transform: none;
  }
  padding: 9rem 0;
  .arrange-price {
    padding-bottom: 2rem;
  }
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
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    .card-data {
      padding: 0 1rem;
    }
    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }
    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }
    .btn {
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
  .pagination-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;

    .pagination {
      display: flex;
      list-style-type: none;
      margin: 0;
      padding: 0;

      li {
        margin-right: 0.5rem;
      }

      a {
        display: inline-block;
        padding: 0.5rem;
        background-color: #ffffff;
        border: 1px solid #dddddd;
        color: #333333;
        cursor: pointer;

        &:hover {
          background-color: #eeeeee;
        }

        &.active {
          background-color: #333333;
          color: #ffffff;
        }
      }
    }
  }
`;
export default GridView;