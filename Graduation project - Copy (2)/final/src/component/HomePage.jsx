import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import { fetchData, searchProducts } from './api';

const HomePage = ({ onAddToCart, searchTerm }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const delayDebounce = setTimeout(async () => {
      try {
        setLoading(true);

        let data;
        if (searchTerm.trim() !== '') {
          data = await searchProducts(searchTerm);
        } else {
          data = await fetchData('products');
        }

        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('خطأ أثناء تحميل المنتجات:', error);
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  const addToCart = (product) => {
    onAddToCart(product);
  };

  if (loading) return <p>جاري تحميل المنتجات...</p>;

  return (
    <div className="main-container">
      <div className="banner">

        <p className="prodact">تصفح تشكيلتنا الواسعة من قطع غيار السيارات الأصلية</p>
        <img src="/images/image websit.jpg" alt="Banner" />

         <h2 className="prodact">منتجاتنا</h2>
      </div>

      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="product-card" key={product._id || product.id}>
              <img src={product.image} alt={product.name} className="product-img" />
              <div className="product-info">
                <p className="product-name">{product.name}</p>
                <div className="price-cart">
                  <span
                    className="cart-icon"
                    onClick={() => addToCart(product)}
                    title="أضف إلى السلة"
                    style={{ cursor: 'pointer' }}
                  >
                    🛒
                  </span>
                  <span className="price">{product.price} شيكل</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">لا توجد نتائج مطابقة</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;

/*import React, { useState, useEffect } from 'react';
import './HomePage.css';
import products from './Data.jsx';

const ImageSlider = () => {
  const images = [
    '/images/أفضل مواقع شراء قطع غيار السيارات 2022.jpg',
   // '/images/image websit.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 20000); // كل 30 ثانية

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-slider">
      <img
        src={images[currentIndex]}
        alt="slider"
        className="slider-image"
      />
    </div>
  );
};

const HomePage = ({ onAddToCart, searchTerm }) => {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main-container">
      <ImageSlider />

      

      <div className="banner">
        <div className="overlay" />
        <div className="banner-text"></div>
      </div>

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} className="product-img" />
              <div className="product-info">
                <p className="product-name">{product.name}</p>
                <div className="price-cart">
                  <span
                    className="cart-icon"
                    onClick={() => onAddToCart(product)}
                    title="أضف إلى السلة"
                    style={{ cursor: 'pointer' }}
                  >
                    🛒
                  </span>
                  <span className="price">{product.price} شيكل</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">لا توجد نتائج مطابقة</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;*/