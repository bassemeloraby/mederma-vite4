import React, { Fragment, useEffect, useState } from "react";
import { customFetch } from "../../utils";
import { useLoaderData } from "react-router-dom";
import { CheckoutFilter, SectionTitle } from "../../components";

const url = "/specialArrays";

export const loader = async () => {
  const response = await customFetch(url);
  const lists = response.data;
  const listsDescriptions = lists.map((li) => li.Description);
  // console.log(lists);
  // console.log(listsDescriptions);
  return { lists, listsDescriptions };
};

const Checkout = () => {
  const { lists, listsDescriptions } = useLoaderData();
  const [descriptionFilter, setDescriptionFilter] = useState("");
  const [items, setItems] = useState(lists);

  console.log(items);

  useEffect(() => {
    setItems(lists.filter((li) => li.Description === descriptionFilter));
  }, [lists, descriptionFilter]);
  // useEffect(() => {
  //   setItems(lists)
  // }, [lists]);
  return (
    <Fragment>
      <SectionTitle text="Checkout" />
      <CheckoutFilter
        list={listsDescriptions}
        onInput={(e) => setDescriptionFilter(e.target.value)}
      />
      <div>
        {items.map((li, i) => (
          <div key={i}>{li.Description}
          {li.content.map((c,i)=> <h6 key={i}>{c.TradeName}</h6>)}
          </div>
          
        ))}
      </div>
    </Fragment>
  );
};

export default Checkout;
