// ProductsList.tsx
import React from "react";  
import Product from "./product";

interface ProdType {
  id: number;
  image: string;
  name: string;
  description: string;
  price: string;
}

const ProductsList: React.FC<{ products: ProdType[] }> = (props) => {
  // Get the products data from props
  const { products } = props;

  // Return the JSX for the products list component
  return (
    <div className="products-list">
      {products.map((product) => (
        <Product key={product.id} {...product as ProdType} />
      ))}
    </div>
  );
};

export default ProductsList;
