import React from "react";

const Product = (props) => {
  // Get the product data from props
  const { image, name, description, price } = props;

  // Define a function to handle adding the product to the cart
  const handleAddToCart = () => {
    console.log(`Added ${name} to the cart`);
  };

  // Define a function to handle viewing the product details
  const handleViewDetails = () => {
    console.log(`Viewed ${name} details`);
  };

  // Return the JSX for the product component
  return (
    <div className="product">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-description">{description}</p>
      <p className="product-price">{price}</p>
      <button className="product-addtocart" onClick={handleAddToCart}>
        Add to cart
      </button>
      <button className="product-buynow" onClick={handleViewDetails}>
        Buy Now!!
      </button>
    </div>
  );
};

export default Product;
