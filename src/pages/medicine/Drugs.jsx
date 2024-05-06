import React, { Fragment, useEffect, useState } from "react";
import {
  ComplexPaginationContainer,
  Filters,
  PaginationContainer,
  ProductsContainer,
} from "../../components";
import { customFetch } from "../../utils";
import { useLoaderData } from "react-router-dom";

const url = "/allDrugs";

export const loader = async () => {
  const response = await customFetch(url);
  const drugs = response.data;
  return { drugs };
};

const Drugs = () => {
  const { drugs } = useLoaderData();
  // // const [scientificName, setScientificName] = useState([
  //   ...new Set(drugs.map((drug) => drug.ScientificName)),
  // ]);
  const [items, setItems] = useState([]);
  const [scientificNameFilter, setScientificNameFilter] = useState("");

  // useEffect(() => {
   const scientificName =([...new Set(drugs.map((drug) => drug.ScientificName))]);
  // }, [drugs]);

  useEffect(() => {
    setItems(drugs);
    if (scientificNameFilter) {
      setItems(
        drugs.filter((drug) => drug.ScientificName === scientificNameFilter)
      );
    }
  }, [drugs, scientificNameFilter]);

  console.log("Drugs page", drugs);
  console.log("scientificNameFilter", scientificNameFilter);
  console.log("items", items);

  return (
    <Fragment>
      <Filters
        contents={items}
        scientificName={scientificName}
        setScientificNameFilter={setScientificNameFilter}
      />
      <ProductsContainer />
      {/* <ComplexPaginationContainer/>
      <PaginationContainer />*/}
    </Fragment>
  );
};

export default Drugs;
