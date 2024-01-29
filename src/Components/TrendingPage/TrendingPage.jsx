import React, { useEffect, useState } from "react";
import "./TrendingPage.css";
import productImage from "../Assets/products/1.jpg";
import TrendingItems from "./trendingItems.json";

const TrendingPage = () => {
  const [pageNum, setPageNum] = useState(1);
  const [pages, setPages] = useState([1, 2, 3, 4, 5, 6]);
  const updatePaginataion = (num) => {
    setPageNum(num);
  };
  const updatePaginationToNext = () => {
    if (pages.length == pageNum) {
      return;
    } else {
      setPageNum(pageNum + 1);
    }
  };

  const updatePaginationToBack = () => {
    if (1 == pageNum) {
      return;
    } else {
      setPageNum(pageNum - 1);
    }
  };
  return (
    <>
      <div className="filters">
        <div className="filter-wrapper">
          <div class="custom-select">
            <div className="select-class">
            Sort By:&nbsp;
            <select>
              <option value=""></option>
              <option value="">Price (Low to High)</option>
              <option value="">Price (High to Low)</option>
              <option value="">Alphabetical (A-Z)</option>
              <option value="">Alphabetical (Z-A)</option>
            </select>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        {TrendingItems.products.map((value) => {
          return (
            <div className="productList">
              {value.recommended ? (
                <div className="discount">
                  <div className="discount-text">Recommended</div>
                </div>
              ) : (
                ""
              )}
              <div class="product">
                <img src={productImage} alt="Product 1" />
                <div class="product-info">
                  <h3>{value.name}</h3>
                  <p>{value.description}</p>
                </div>
                {value.newPrice ? (
                  <p class="price">
                    {" "}
                    <span style={{ fontSize: "12px" }}>
                      <s>
                        {value.price}

                        <sup>{value.currency}</sup>
                      </s>
                    </span>
                    &nbsp;&nbsp;
                    <span style={{ color: "green" }}>
                      {value.newPrice}
                      <sup>{value.currency}</sup>
                    </span>
                  </p>
                ) : (
                  <p class="price">
                    {value.price}
                    <sup>{value.currency}</sup>
                  </p>
                )}
                <div className="buttons">
                  <div className="add-to-cart">Add to cart</div>
                  <div className="order-now">Order Now</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pagination">
        <div className="pagination-wrapper">
          <span
            className="pagination-btn "
            onClick={() => updatePaginationToBack()}
          >
            {"<"}&nbsp;Back
          </span>
          {pages.map((num) => {
            return (
              <>
                <span
                  className={
                    num == pageNum
                      ? "pagination-btn active-page"
                      : "pagination-btn"
                  }
                  onClick={() => updatePaginataion(num)}
                >
                  {num}
                </span>
              </>
            );
          })}
          <span
            className="pagination-btn"
            onClick={() => updatePaginationToNext()}
          >
            Next&nbsp;{">"}
          </span>
        </div>
      </div>
    </>
  );
};

export default TrendingPage;
