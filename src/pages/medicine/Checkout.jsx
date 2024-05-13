import React, { Fragment, useState } from "react";
import { customFetch } from "../../utils";
import { useLoaderData } from "react-router-dom";
import { CheckoutFilter, SectionTitle } from "../../components";

const url = "/specialArrays";

export const loader = async () => {
  const response = await customFetch(url);
  const lists = response.data;
  const listsDescriptions = lists.map((li) => li.Description);
  console.log(lists);
  console.log(listsDescriptions);
  return { lists, listsDescriptions };
};

const Checkout = () => {
  const { lists, listsDescriptions } = useLoaderData();
  const [descriptionFilter, setDescriptionFilter] = useState();
  console.log(lists);
  console.log(listsDescriptions);
  console.log(descriptionFilter);
  return (
    <Fragment>
      <SectionTitle text="Checkout" />
      <CheckoutFilter
        list={listsDescriptions}
        onInput={(e) => setDescriptionFilter(e.target.value)}
      />
    </Fragment>
  );
};

export default Checkout;
