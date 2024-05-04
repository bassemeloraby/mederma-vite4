import React, { Fragment } from "react";
import { Hero } from "../components";
import { customFetch } from "../utils";
const url = "/allDrugs?wasfaty=true";

export const loader = async () => {
  const response = await customFetch(url);
  console.log(response.data)
  // const drugs = response.data.data;
  // return { drugs };
  return null;
};

const Landing = () => {
  return (
    <Fragment>
      {" "}
      <Hero />
    </Fragment>
  );
};

export default Landing;
