import React from "react";
import SectionTitle from "./SectionTitle";
import { useLoaderData } from "react-router-dom";
import ProductVitosoGrid from "./ProductVitosoGrid";

const FeaturedProducts = () => {
  const { wasfaty } = useLoaderData();

  return (
    <div className="pt-24">
      <SectionTitle text="featured products" />
      <ProductVitosoGrid contents={wasfaty} />
    </div>
  );
};
export default FeaturedProducts;
