import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import productImage from "../Assets/products/1.jpg";
import productImage2 from "../Assets/products/2.jpg";
import productImage3 from "../Assets/products/3.jpeg";
import productImage4 from "../Assets/products/4.jpg";
import { useParams } from "react-router-dom";
import trendingItemsData from "../TrendingItems/trendingItems.json";
import { useNavigate } from "react-router-dom";


const ProductPage = () => {
const navigate = useNavigate();

  const redirectToProduct = (id)=>{
    navigate(`/product/${id}`)
  }
  useEffect(()=>{
    window.scrollTo({
      top:0
    });
  },[])
  
  const { id } = useParams();
  return (
    <>
      <div className="product-main-wrapper">
        <div className="product-left-side">
          <div className="img-container">
            <div className="left-imgs">
              <img src={productImage} className="multi-imgs" alt="" />
              <img src={productImage2} className="multi-imgs" alt="" />
              <img src={productImage3} className="multi-imgs" alt="" />
              <img src={productImage4} className="multi-imgs" alt="" />
            </div>
            <div className="right-imgs">
              <img src={productImage} className="main-img" alt="" />
            </div>
          </div>
        </div>
        <div className="product-right-side">
          <div className="right-content-wrapper">
            <div className="product-title">
              Chanderi Saree from Madhya Pradesh
            </div>
            <div className="product-desc">
              The Chanderi saree is originated from Chanderi village.It is made
              from silk or cotton.The Chanderi saree is originated from Chanderi
              village.It is made from silk or cotton.
            </div>
            <div className="category-tag">
              <span className="tag-content">Sarees</span>
              <span className="price-tag">₹9,000</span>
            </div>
            <hr />
            <h3>About this item</h3>
            <ul className="ul-tag">
              <li className="about-list">
                Pure silk fabric with a natural sheen for a luxurious feel.
                Meticulous zari work featuring delicate floral motifs on borders
                and pallu. Blend of traditional craftsmanship and contemporary
                design.
              </li>
              <li className="about-list">
                Fine zari and thread work handwoven by skilled artisans.
                Intricate detailing on borders and pallu for an elegant touch.
              </li>
              <li className="about-list">
                Rich crimson hue symbolizing passion, love, and timeless beauty.
                Ensures a regal and standout look for special occasions.
              </li>
              <li className="about-list">
                Ideal for weddings, festive gatherings, and special events.
                Versatile design suitable for various cultural celebrations.
              </li>
            </ul>
            <hr />
            <h3>Promos and Gift Codes</h3>
            <div className="notes"><div className="note-label" style={{fontWeight:600}}>Note:</div>
            <div style={{marginLeft:'7px'}}>One discount can be redeemed per order. see <a href="#"> terms and conditions</a> and <a href="#"> privacy policy</a> for details.</div></div>
            <div className="promocode">
              <span>
                <div className="field">
                  <input
                    type="text"
                    placeholder="Enter Promo code"
                    className="promo-field"
                  />

                  <span className="btn-apply">APPLY</span>
                </div>
              </span>
            </div>
            <hr/>
            <div className="buttons">
              <div className="add-to-cart-product">ADD TO CART</div>
              <div className="buy-now-product">BUY NOW</div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div style={{textAlign:'center'}}><h2>Related Items</h2></div>
      <div class="container" style={{marginBottom:'25px'}}>
                {trendingItemsData.products.map((value) => {
                  return (
                    <div className="productList">
                      <div class="product product-in-cart1">
                        <img src={productImage} alt="Product 1"  onClick={()=>redirectToProduct(value.id)}/>
                        <div class="product-info">
                          <h3  onClick={()=>redirectToProduct(value.id)}>
                            {value.name.length > 25
                              ? value.name.slice(0, 25) + "..."
                              : value.name}
                          </h3>
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
                          {/* <div className="add-to-cart">Add to cart</div> */}
                          <div className="order-now">Order Now</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
    </>
  );
};

export default ProductPage;
