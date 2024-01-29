import React, { useState } from "react";
import "./TrendingItems.css";
import trendingItemsData from "./trendingItems.json";
import productImage from "../Assets/products/1.jpg";
import banarasi from "../Assets/products/banarasi.jpg";
import { Link, useNavigate } from "react-router-dom";


const TrendingItems = () => {
  const navigate = useNavigate();
  const navigateToTrendingPage = ()=>{
    navigate('trending-items')
  }

  const redirectToProduct = (id)=>{
    navigate(`product/${id}`)

  }
  return (
    <div style={{ padding: "25px" }} className="container-trending">
      <div className="trending-items">
        <h2 className="items-title">Trending Products</h2>
        <span className="show-btn" onClick={()=>navigateToTrendingPage()}>
          Show all &nbsp;
          <i class="fa-solid fa-arrow-right"></i>
        </span>
      </div>
      <div class="container">
        {trendingItemsData.products.map((value) => {
          return (
            <div  className="productList">
              {value.recommended ? (
                <div className="discount">
                  <div className="discount-text">Recommended</div>
                </div>
              ) : (
                ""
              )}
              <div class="product">
                <img src={productImage} alt="Product 1" onClick={()=>redirectToProduct(value.id)}/>
                <div class="product-info">
                  <h3 onClick={()=>redirectToProduct(value.id)}>{value.name}</h3>
                  <p>{value.description}</p>
                </div>
                {value.newPrice ? (
                  <p class="price"> <span style={{fontSize:'12px'}}>
                    <s>{value.price}
                  
                    <sup>{value.currency}</sup></s></span>&nbsp;&nbsp;
                    <span style={{color:'green'}}>{value.newPrice}
                    <sup>{value.currency}</sup></span>
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
      <div className="trending-items" style={{justifyContent:'center'}}>
        <h2 className="items-title">Categories</h2>
        
      </div>
      <div className="container" style={{marginTop: '10px', background: '#f3f3f3'}}>
        <div className="category">
          <div>
            <h3>Banarasi Sari</h3>
          </div>
        </div>

        <div className="category" >
          <div>
            <h3>Chanderi Sari</h3>
          </div>
        </div>

        <div className="category">
          <div>
            <h3>Bandhani</h3>
          </div>
        </div>

        <div className="category">
          <div>
            <h3>Paithani</h3>
          </div>
        </div>

        <div className="category">
          <div>
            <h3>Kanchipuram Silk Sari</h3>
          </div>
        </div>

        <div className="category">
          <div>
            <h3>Baluchari Sari</h3>
          </div>
        </div>
        
        

      </div>

      <div className="trending-items">
        <h2 className="items-title">New Arrivals</h2>
        <span className="show-btn">
          Show all &nbsp;
          <i class="fa-solid fa-arrow-right"></i>
        </span>
      </div>
      <div class="container">
        {trendingItemsData.products.map((value) => {
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
                  <p class="price"> <span style={{fontSize:'12px'}}>
                    <s>{value.price}
                  
                    <sup>{value.currency}</sup></s></span>&nbsp;&nbsp;
                    <span style={{color:'green'}}>{value.newPrice}
                    <sup>{value.currency}</sup></span>
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
    </div>
  );
};

export default TrendingItems;
