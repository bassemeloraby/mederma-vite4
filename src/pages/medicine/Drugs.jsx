import React, { Fragment, useState } from "react";
import { Filters, ProductsContainer } from "../../components";
import { customFetch } from "../../utils";
import { useLoaderData } from "react-router-dom";

const url = "/allProducts";

export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data;
  console.log(products)
  return { products };
};

const Drugs = () => {
  const { products } = useLoaderData();

  const [items, setItems] = useState(products);
  const [scientificNameFilter, setScientificNameFilter] = useState("");
  // const [marketingCompanyFilter, setMarketingCompanyFilter] = useState("");
  // const [wasfatyFilter, setWasfatyFilter] = useState(false);

  const scientificName = [...new Set(products.map((drug) => drug.scientificName))];
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

  return (
    <Fragment>
      <Filters
        contents={items}
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
      />
      <ProductsContainer contents={items} />
    </Fragment>
  );
};

export default Drugs;
