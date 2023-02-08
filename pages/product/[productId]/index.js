import React from "react";
import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const productId = router.query.productId; // this productId is same as file name [productId]
  return <h1> Details about product {productId} </h1>;
};

export default ProductDetails;