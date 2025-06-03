
/*import React from 'react';
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./component/HomePage"
//import LoginPage from './component/Login';
//import Product1 from './component/Product1';
//import LoginPage from './component/Login';
//import Product2 from './component/Product2'


function App() {
  return (
    <HomePage/>
   
  );
}*/


//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import HomePage from './component/HomePage';
//import Cart from './component/Cart';
//import LoginPage from './component/Login';
// ... واستيراد باقي الصفحات



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import HomePage from './component/HomePage';
import Cart from './component/Cart';
import LoginPage from './component/Login';
import Part from './component/Part';
import Signup from './component/Signup';
import Footer from './component/Footer';


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]); // إذا تريد استخدام في App أيضاً

  // جلب المنتجات عند تحميل التطبيق (لو تحتاجها في App)
  useEffect(() => {
    axios.get("https://your-backend-api.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("خطأ في جلب المنتجات:", error));
  }, []);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevItems) => [
        ...prevItems,
        { ...product, quantity: 1 }
      ]);
    }
  };

  const handleRemoveFromCart = (idToRemove) => {
    const newCart = cartItems.filter((item) => item.id !== idToRemove);
    setCartItems(newCart);
  };

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar
          cartItems={cartItems}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onAddToCart={handleAddToCart}
                  searchTerm={searchTerm}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  onRemoveFromCart={handleRemoveFromCart}
                />
              }
            />
           
            <Route path="/login" element={<LoginPage />} /> 
            <Route path="/signup" element={<Signup />} />
            <Route path="/part" element={<Part />} />
           
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
/*<Route path="/login" element={<LoginPage />} /> 
 <Route path="/signup" element={<Signup />} />*/