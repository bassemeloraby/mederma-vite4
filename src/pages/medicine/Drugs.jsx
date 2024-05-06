import React, { Fragment } from "react";
import {
  ComplexPaginationContainer,
  Filters,
  PaginationContainer,
  ProductsContainer,
} from "../../components";
import { customFetch } from "../../utils";

const url = "/allDrugs";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  // console.log(params);
  const response = await customFetch(url, { params });
  const drugs = response.data;
  return { drugs, params };
};

const Drugs = () => {
  return (
    <Fragment>
      <Filters />
      <ProductsContainer />
      {/* <ComplexPaginationContainer/>
      <PaginationContainer />*/}
    </Fragment>
  );
};

export default Drugs;
