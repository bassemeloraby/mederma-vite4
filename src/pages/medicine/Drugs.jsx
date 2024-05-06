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
  const [items, setItems] = useState(drugs);
  const [scientificNameFilter, setScientificNameFilter] = useState("");
  const [wasfatyFilter, setWasfatyFilter] = useState(false);
  console.log(wasfatyFilter);

  // useEffect(() => {
  const scientificName = [...new Set(drugs.map((drug) => drug.ScientificName))];
  // }, [drugs]);

  const filterHandelr = () => {
    let mainDrugs = drugs;

    if (wasfatyFilter === true) {
      mainDrugs = mainDrugs.filter((drug) => drug.wasfaty === true);
    }

    if (scientificNameFilter) {
      mainDrugs = mainDrugs.filter(
        (drug) => drug.ScientificName === scientificNameFilter
      );
    }

    // if (!scientificNameFilter || wasfatyFilter === false) {
    //   setItems(mainDrugs);
    // }
    setItems(mainDrugs);
  };

  // console.log("Drugs page", drugs);
  // console.log("scientificNameFilter", scientificNameFilter);
  // console.log("items", items);

  return (
    <Fragment>
      <Filters
        contents={items}
        scientificName={scientificName}
        setScientificNameFilter={setScientificNameFilter}
        scientificNameFilter={scientificNameFilter}
        setWasfatyFilter={setWasfatyFilter}
        wasfatyFilter={wasfatyFilter}
        filterHandelr={filterHandelr}
        setItems={setItems}
      />
      <ProductsContainer contents={items} />
      {/* <ComplexPaginationContainer/>
      <PaginationContainer />*/}
    </Fragment>
  );
};

export default Drugs;
