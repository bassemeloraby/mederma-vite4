import React, { Fragment, useState } from "react";
import { Filters, ProductsContainer } from "../../components";
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

  const [items, setItems] = useState(drugs);
  const [scientificNameFilter, setScientificNameFilter] = useState("");
  const [marketingCompanyFilter, setMarketingCompanyFilter] = useState("");
  const [wasfatyFilter, setWasfatyFilter] = useState(false);

  const scientificName = [...new Set(drugs.map((drug) => drug.ScientificName))];
  const marketingCompany = [...new Set(drugs.map((drug) => drug.MarketingCompany))];

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
    if (marketingCompanyFilter) {
      mainDrugs = mainDrugs.filter(
        (drug) => drug.MarketingCompany === marketingCompanyFilter
      );
    }
    setItems(mainDrugs);
  };

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
        // MarketingCompany
        marketingCompany={marketingCompany}
        setMarketingCompanyFilter={setMarketingCompanyFilter}
        marketingCompanyFilter={marketingCompanyFilter}
      />
      <ProductsContainer contents={items} />
    </Fragment>
  );
};

export default Drugs;
