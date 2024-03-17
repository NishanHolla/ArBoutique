// MainPage.js
import React from "react";
import ProductsList from "./productList";

// Define some dummy data for the products
const products = [
  {
    id: 1,
    image: "https://source.unsplash.com/random/300x300?sig=1",
    name: "Product 1",
    description: "This is a description of product 1",
    price: "$10.00",
  },
  {
    id: 2,
    image: "https://source.unsplash.com/random/300x300?sig=2",
    name: "Product 2",
    description: "This is a description of product 2",
    price: "$20.00",
  },
  {
    id: 3,
    image: "https://source.unsplash.com/random/300x300?sig=3",
    name: "Product 3",
    description: "This is a description of product 3",
    price: "$30.00",
  },
];

function MainPage() {
  // Return the JSX for the main page component
  return (
    <div className="container">
      <h1 className="title">Welcome to the shopping site</h1>
      <ProductsList products={products} />
    </div>
  );
}

export default MainPage;
