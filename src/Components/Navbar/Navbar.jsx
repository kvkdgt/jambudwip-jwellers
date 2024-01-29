import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/s.webp";
import cart_icon from "../Assets/cart.png";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [validationStatus, setValidationStatus] = useState(true);
  const [isLoginPopupVisible, setIsLoginPopupVisible] = useState(false);
  const [isSignupPopupVisible, setIsSignupPopupVisible] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [userData, setUserData] = useState();
  const [isLoggedin, setIsloggedin] = useState(false);
  const [newUserFirstName, setNewUserFirstName] = useState("");
  const [newUserLastName, setNewUserLastName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const [newUserConfirmPassword, setNewUserConfirmPassword] = useState("");
  const [checkPasswordValidation, setCheckPasswordValidation] = useState(true);
  const handleSignupAPI = () => {
    if (
      !newUserFirstName ||
      !newUserLastName ||
      !newUserEmail ||
      !newUserPassword ||
      !newUserConfirmPassword
    ) {
      setValidationStatus(false);
    } else {
      setValidationStatus(true);
     
    }
  };

  const navigate = useNavigate();

  const handleProfileDropDown = () => {
    if (profileDropdown) {
      setProfileDropdown(false);
    } else {
      setProfileDropdown(true);
    }
  };

  const handleLoginPopupVisiblity = () => {
    if (isLoginPopupVisible) {
      setIsLoginPopupVisible(false);
    } else {
      setIsLoginPopupVisible(true);
      setIsSignupPopupVisible(false);
      setMenu(false);
    }
  };

  const handleSignupPopupVisiblity = () => {
    if (isSignupPopupVisible) {
      setIsSignupPopupVisible(false);
    } else {
      setIsSignupPopupVisible(true);
      setIsLoginPopupVisible(false);
      setMenu(false);
    }
  };

  const handleMenu = () => {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  const handleSignup = () => {
    handleProfileDropDown();
    handleSignupPopupVisiblity();
  };

  const handleSignin = () => {
    handleProfileDropDown();
    handleLoginPopupVisiblity();
  };

  const handleCart = () => {
    if (isLoggedin) {
      navigate("/cart");
    } else {
      setIsLoginPopupVisible(true);
    }
    setMenu(false);
  };

  useEffect(() => {
    // Update the document title using the browser API
    let userData = localStorage.getItem("userData");
    let login_status = localStorage.getItem("isLoggedin");
    setIsloggedin(JSON.parse(login_status));
    setUserData(JSON.parse(userData));
  }, [isLoggedin]);
  return (
    <div>
      {menu ? (
        <>
          <div className="top-sidebar" style={{ position: "fixed" }}>
            {" "}
          </div>
          <div
            className="action-buttons-for-mobile"
            style={{ position: "fixed" }}
          >
            <div className="list-items-for-mobile close-icon">
              <i class="fa-solid fa-xmark" onClick={() => handleMenu()}></i>
            </div>

            <div className="list-for-mobile">
              {isLoggedin ? (
                <>
                  <div className="list-items-for-mobile">My Profile</div>
                  <hr />
                  <div className="logout-container-mobile">
                    <div className="list-items-for-mobile logout-mobile">
                      <i class="fa-solid fa-right-from-bracket"></i>&nbsp;
                      Logout
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="list-items-for-mobile"
                    onClick={() => handleSignupPopupVisiblity()}
                  >
                    Signup
                  </div>
                  <hr />
                  <div
                    className="list-items-for-mobile"
                    onClick={() => handleLoginPopupVisiblity()}
                  >
                    Login
                  </div>
                  <hr />
                </>
              )}
              <div className="list-items-for-mobile">My orders</div>
              <hr />
              <div
                className="list-items-for-mobile"
                onClick={() => handleCart()}
              >
                My Cart
              </div>
            </div>
          </div>{" "}
        </>
      ) : (
        ""
      )}
      {isLoginPopupVisible ? (
        <>
          <div className="top-sidebar" style={{ position: "fixed" }}>
            {" "}
          </div>
          <div className="login-wrapper">
            <div className="login-form-container">
              <div className="list-items-for-mobile close-icon-for-login">
                <i
                  class="fa-solid fa-xmark"
                  onClick={() => handleLoginPopupVisiblity()}
                ></i>
              </div>
              <div className="heading-login">Login</div>
              <div className="heading-login-2">Login to your account</div>
              <div className="inpur-field-for-login">
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="login-input"
                />
              </div>
              <div className="inpur-field-for-login password-field">
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="login-input"
                />
              </div>

              <div className="inpur-field-for-login login-btn">
                <div className="login-input login-input-btn">LOG IN</div>
              </div>
              <div className="signup-message">
                Don't have an account?{" "}
                <span
                  className="signupBtnText"
                  onClick={() => handleSignupPopupVisiblity()}
                >
                  Signup Here
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      {isSignupPopupVisible ? (
        <>
          <div className="top-sidebar" style={{ position: "fixed" }}>
            {" "}
          </div>
          <div className="login-wrapper">
            <div className="login-form-container">
              <div className="list-items-for-mobile close-icon-for-login">
                <i
                  class="fa-solid fa-xmark"
                  onClick={() => handleSignupPopupVisiblity()}
                ></i>
              </div>
              <div className="heading-login">Signup</div>
              <div className="heading-login-2">Signup to get amazing deals</div>
              {!validationStatus && (
                <div className="error-msg">
                  <div className="error-msg-data">
                    All fields are mandatory!
                  </div>
                </div>
              )}
              <div className="inpur-field-for-login">
                <input
                  type="text"
                  onChange={(e) => (
                    setNewUserFirstName(e.target.value),
                    setValidationStatus(true)
                  )}
                  placeholder="Enter First name"
                  className="login-input"
                />
                &nbsp;
                <input
                  type="text"
                  onChange={(e) => (
                    setNewUserLastName(e.target.value),
                    setValidationStatus(true)
                  )}
                  placeholder="Enter Last name"
                  className="login-input"
                />
              </div>
              <div className="inpur-field-for-login password-field">
                <input
                  type="text"
                  onChange={(e) => (
                    setNewUserEmail(e.target.value), setValidationStatus(true)
                  )}
                  placeholder="Enter Email"
                  className="login-input signup-input"
                />
              </div>
              <div className="inpur-field-for-login password-field">
                <input
                  type="password"
                  onChange={(e) => (
                    setNewUserPassword(e.target.value),
                    setValidationStatus(true)
                  )}
                  placeholder="Enter Password"
                  className="login-input signup-input"
                />
              </div>

              <div className="inpur-field-for-login password-field">
                <input
                  type="password"
                  onChange={(e) => (
                    setNewUserConfirmPassword(e.target.value),
                    setValidationStatus(true)
                  )}
                  placeholder="Confirm Password"
                  className="login-input signup-input"
                />
              </div>
              {!checkPasswordValidation && (
                <div className="err-msg-for-confirm-password">
                  Password and confirm password should be same.
                </div>
              )}
              <div className="inpur-field-for-login login-btn">
                <div
                  onClick={() => handleSignupAPI()}
                  className="login-input login-input-btn"
                >
                  SIGN UP
                </div>
              </div>
              <div className="signup-message">
                Already have an account?{" "}
                <span
                  className="signupBtnText"
                  onClick={() => handleLoginPopupVisiblity()}
                >
                  Login Here
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        " "
      )}
      <header>
        <div class="logo">
          <img src={logo} alt="Logo" />
          <div class="site-name">SHRINGAR.COM</div>
        </div>

        <div class="search-bar">
          <input
            type="text"
            class="search-input"
            placeholder="Search Product"
          />
        </div>
        <div className="bars" onClick={() => handleMenu()}>
          <i class="fa-solid fa-bars"></i>
        </div>
        <div class="action-buttons">
          <span className="nav-icons">
            <span className="nav-text-label">My orders</span>
          </span>
          <span className="nav-icons-2">
            <i
              class="fa-solid fa-circle-user hover-class"
              onClick={() => {
                handleProfileDropDown();
              }}
            ></i>
            {profileDropdown ? (
              <div className="dropdownProfile">
                <div className="signup-login">
                  <div className="list-item" style={{ paddingTop: "10px" }}>
                    Welcome, {isLoggedin ? userData.first_name : "User"}
                  </div>
                  <hr />
                  {isLoggedin ? (
                    <>
                      <div className="list-item list-item-2 hover-class-2">
                        My Profile
                      </div>
                      <div className="list-item list-item-2 hover-class-2 logout-btn">
                        <i class="fa-solid fa-right-from-bracket"></i>&nbsp;
                        Logout
                      </div>{" "}
                    </>
                  ) : (
                    <>
                      <div
                        className="list-item list-item-2 hover-class-2"
                        onClick={() => handleSignup()}
                      >
                        Sign up
                      </div>
                      <div
                        className="list-item list-item-2 hover-class-2"
                        onClick={() => handleSignin()}
                      >
                        Login
                      </div>{" "}
                    </>
                  )}
                </div>
              </div>
            ) : (
              ""
            )}
          </span>
          <span className="nav-icons" onClick={() => handleCart()}>
            <span className="cart-count">10</span>
            <i class="fa-solid fa-cart-shopping"></i>
          </span>
        </div>
      </header>
      <div className="sub-header">
        <div
          className={`list ${window.location.pathname == "/" ? "active" : ""}`}
        >
          <Link
            to="/"
            className={`link-list ${
              window.location.pathname == "/" ? "active" : ""
            }`}
          >
            Home
          </Link>
        </div>
        <div
          className={`list ${
            window.location.pathname == "/trending-items" ? "active" : ""
          }`}
        >
          <Link
            to="/trending-items"
            className={`link-list ${
              window.location.pathname == "/trending-items" ? "active" : ""
            }`}
          >
            Trending
          </Link>
        </div>
        <div className="list">Categories</div>
        <div className="list">New Arrivals</div>
      </div>
    </div>
  );
};

export default Navbar;
