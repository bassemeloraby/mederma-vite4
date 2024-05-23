import React, { Fragment } from "react";
import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";
const url = "/allProducts";

export const loader = async () => {
  const response = await customFetch(`${url}?wasfaty=true`);
  const wasfaty = response.data;
  console.log(wasfaty)
  return { wasfaty };
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
