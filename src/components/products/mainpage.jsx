import React from 'react';
import Product from './product';
import products from "./items";
import Navbar from "../navbar";
import banner from '/src/assets/banner.gif';

const MainPage = () => {
  return (
    <div className="product-container">
      <header>
        <Navbar/>
      </header>
      <h1 className="title">Welcome to the shopping site</h1>
      <img src={banner} className="product-banner" alt="banner" />
      <div className="products-list">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
