import React, { Fragment } from "react";
import {
  Filters,
  PaginationContainer,
  ProductsContainer,
} from "../../components";
import { customFetch } from "../../utils";

const url = "allDrugs";

export const loader = async ({ request }) => {
  const response = await customFetch(url);
  const drugs = response.data
  return {drugs};
};

const Drugs = () => {
  return (
    <Fragment>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </Fragment>
  );
};

export default Drugs;
