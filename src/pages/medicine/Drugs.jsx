import React, { Fragment, useEffect, useState } from "react";
import { Filters, ProductsContainer } from "../../components";
import { customFetch } from "../../utils";
import { useLoaderData } from "react-router-dom";

const url = "/allProducts";

export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data;
  console.log(products);
  return { products };
};

const Drugs = () => {
  const { products } = useLoaderData();

  const [items, setItems] = useState(products);
  const [searchedItems, setSearchedItems] = useState([]);
  const [query, setQuery] = useState("");
  console.log(query);
  console.log(searchedItems);
  console.log(items);
  const [scientificNameFilter, setScientificNameFilter] = useState("");
  // const [marketingCompanyFilter, setMarketingCompanyFilter] = useState("");
  // const [wasfatyFilter, setWasfatyFilter] = useState(false);

  const scientificName = [
    ...new Set(products.map((drug) => drug.scientificName)),
  ];
  // const marketingCompany = [...new Set(products.map((drug) => drug.marketingCompany))];

  const filterHandelr = () => {
    let mainDrugs = products;

    // if (wasfatyFilter === true) {
    //   mainDrugs = mainDrugs.filter((drug) => drug.wasfaty === true);
    // }

    if (scientificNameFilter) {
      mainDrugs = mainDrugs.filter(
        (drug) => drug.scientificName === scientificNameFilter
      );
    }
    // if (marketingCompanyFilter) {
    //   mainDrugs = mainDrugs.filter(
    //     (drug) => drug.marketingCompany === marketingCompanyFilter
    //   );
    // }
    setItems(mainDrugs);
  };

  useEffect(() => {
    if (!query) setSearchedItems(items);
    setSearchedItems((_) =>
      items.filter((x) =>
        x.description.toLowerCase().includes(query?.toLowerCase())
      )
    );
  }, [query, items]);

  return (
    <Fragment>
      <Filters
        contents={searchedItems}
        scientificName={scientificName}
        setScientificNameFilter={setScientificNameFilter}
        scientificNameFilter={scientificNameFilter}
        // setWasfatyFilter={setWasfatyFilter}
        // wasfatyFilter={wasfatyFilter}
        filterHandelr={filterHandelr}
        setItems={setItems}
        // MarketingCompany
        // marketingCompany={marketingCompany}
        // setMarketingCompanyFilter={setMarketingCompanyFilter}
        // marketingCompanyFilter={marketingCompanyFilter}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ProductsContainer contents={searchedItems} />
    </Fragment>
  );
};

export default Drugs;
