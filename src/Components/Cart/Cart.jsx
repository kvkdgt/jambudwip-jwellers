import React, { useEffect, useState } from "react";
import "./Cart.css";
import cartItems from "./cartItems.json";
import trendingItemsData from "../TrendingItems/trendingItems.json";
import productImage from "../Assets/products/1.jpg";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const navigate = useNavigate();

  const redirectToProduct = (id)=>{
    navigate(`/product/${id}`)
  }
  return (
    <>
      <div className="cart-container">
        <div className="text-section">
          <i class="fa-solid fa-cart-shopping"></i>&nbsp;My Cart
        </div>
        <div className="main-cart">
          <div className="cart-list">
            {cartItems.products.map((value) => {
              return (
                <>
                  <div className="cart-item">
                    <div className="cart-image" >
                      <img src={productImage} alt="" className="item-img" />
                    </div>
                    <div className="item-details">
                      <div className="heading">{value.name}</div>
                      <div className="category-heading">{value.category}</div>
                      <div className="price-item">
                        <div className="price-content">
                          <table>
                            <tr>
                              <th>Price</th>
                              <th>Quantity</th>
                              <th>Total</th>
                            </tr>
                            <tr>
                              <td>
                                {value.currency}
                                {value.newPrice ? value.newPrice : value.price}
                              </td>
                              <td>{value.quantity}</td>
                              <td>
                                {value.newPrice
                                  ? value.newPrice * value.quantity
                                  : value.price * value.quantity}
                                {value.currency}
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="cart-buttons">
                      <div className="cart-button-remove">Remove from cart</div>
                    </div>
                  </div>
                  <hr />
                </>
              );
            })}

            <div
              style={{ padding: "0px 25px" }}
              className="container-trending trending-container-cart"
            >
              <div className="trending-items">
                <h2 className="items-title">You may also like</h2>
                <span className="show-btn">
                  Show all &nbsp;
                  <i class="fa-solid fa-arrow-right"></i>
                </span>
              </div>
              <div class="container">
                {trendingItemsData.products.map((value) => {
                  return (
                    <div className="productList">
                      <div class="product product-in-cart">
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
            </div>
          </div>
          <div className="cart-checkout">
            <div className="cart-checkout-container">
              <div className="cart-checkout-title">Order Summary</div>
              <hr />
              <div className="total-count">
                <div className="sub-total">
                  <div className="sub-total-text">Sub Total</div>
                  <div className="sub-total-text">₹3000</div>
                </div>
                <div className="sub-total">
                  <div className="sub-total-text">Delivery Charge</div>
                  <div className="sub-total-text">₹49</div>
                </div>
              </div>
              <hr />
              <div className="sub-total">
                <div className="total-text">Total</div>
                <div className="total-text">₹3000</div>
              </div>
              <div className="checkout-btn">Checkout</div>
              <div className="policies">
                By continuing to Checkout, you are agreeing to our{" "}
                <a href="#" target="_blank">
                  Terms of User
                </a>{" "}
                and{" "}
                <a href="#" target="_blank">
                  Privacy Policy.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
