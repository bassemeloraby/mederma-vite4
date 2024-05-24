import React, { Fragment, useEffect, useState } from "react";
import { customFetch } from "../../utils";
import { Link, useLoaderData } from "react-router-dom";
import { SectionTitle } from "../../components";
const url = "/specialArrays";

export const loader = async () => {
  const response = await customFetch(url);
  const lists = response.data;
  // const listsDescriptions = lists.map((li) => li.Description);
  // console.log(lists);
  // console.log(listsDescriptions);
  return { lists };
};

const Checkout = () => {
  const { lists } = useLoaderData();
  // const [descriptionFilter, setDescriptionFilter] = useState("");
  const [items, setItems] = useState(lists);

  console.log(items);

  // useEffect(() => {
  //   setItems(lists.filter((li) => li.Description === descriptionFilter));
  // }, [lists, descriptionFilter]);
  // useEffect(() => {
  //   setItems(lists)
  // }, [lists]);

  const deleteSpecialAr = async (id) => {
    console.log(id);
    const response = await customFetch.delete(`${url}/${id}`);
    setItems(items.filter((list) => list._id !== id));
    console.log(items);
  };
  return (
    <Fragment>
      <SectionTitle text="Checkout" />

      <div>
        {items.map((li, i) => (
          <div key={i} className="">
            <Link>{li.Description}</Link>

            <button
              onClick={() => deleteSpecialAr(li._id)}
              className="btn btn-accent btn-sm me-2"
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Checkout;
