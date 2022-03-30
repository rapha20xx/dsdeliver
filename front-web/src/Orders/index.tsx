/** @format */

import { useEffect, useState } from "react";
import "./styles.css";
import ProductList from "./ProductList";
import StepHeader from "./StepHeader";
import { Product } from "./types";
import { fetchProducts } from "../api";

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts()
    .then(response => setProducts(response.data))
    .catch(error => console.log(error))
  }, []);

  return (
    <>
      <StepHeader />
      <ProductList products={products} />
    </>
  );
}

export default Orders;
