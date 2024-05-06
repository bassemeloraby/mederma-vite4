import React, { Fragment } from "react";
import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";
const url = "/allDrugs";

export const loader = async () => {
  const response = await customFetch(url);
  const drugs = response.data;
  const wasfaty = drugs.filter(drug=> drug.wasfaty === true)
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
