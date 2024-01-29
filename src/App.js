import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import FooterScreen from "./Components/Footer/FooterScreen";
import TrendingPage from "./Components/TrendingPage/TrendingPage";
import ProductPage from "./Components/productPage/ProductPage";
import toast, { Toaster } from "react-hot-toast";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Toaster/>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory category="men" />} />
          <Route path="/women" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kids" />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/trending-items" element={<TrendingPage />} />
          <Route path="/product/:id" element={<ProductPage/>} />
        </Routes>
        <FooterScreen />
      </BrowserRouter>
    </div>
  );
}

export default App;
