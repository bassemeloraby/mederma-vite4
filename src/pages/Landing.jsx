import React, { Fragment } from "react";
import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";
const url = "/allProducts";

export const loader = async () => {
  const response = await customFetch(`${url}?wasfaty=true`);
  const products = response.data;
  console.log(products)
  return { products };
};

const Landing = () => {
  return (
    <Fragment>
      {" "}
      <Hero />
      <FeaturedProducts/>
    </Fragment>
  );
};

export default Landing;
