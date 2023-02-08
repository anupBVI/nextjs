import React from "react";
import { useRouter } from "next/router";

const Review = () => {
  const router = useRouter();
  //   const productId = router.query.productId;
  //   const reviewId = router.query.reviewId;

  const { productId, reviewId } = router.query;
  return (
    <h2>
      Review {reviewId} for product {productId}
    </h2>
  );
};

export default Review;
