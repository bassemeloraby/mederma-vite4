import React, { Fragment } from "react";
import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";
const url = "/allDrugs?wasfaty=true";

export const loader = async () => {
  const response = await customFetch(url);
  console.log(response.data)
  const drugs = response.data;
  return { drugs };
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
