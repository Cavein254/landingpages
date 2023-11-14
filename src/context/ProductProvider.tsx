import React from "react";
import ProductContext from "./ProductsContext";
import { useState, useEffect } from "react";

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("an error occurred", { err }));
  }, []);
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
