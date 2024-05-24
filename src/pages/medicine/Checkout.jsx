import React, { Fragment, useEffect, useState } from "react";
import { customFetch } from "../../utils";
import { Link, useLoaderData } from "react-router-dom";
import { ListsList, SectionTitle } from "../../components";
import { toast } from "react-toastify";
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
  const [listsCount, setlistsCount] = useState(lists.length);

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
    setlistsCount(listsCount - 1);
    toast.success("Successfully deleted")
  };
  return (
    <Fragment>
      <SectionTitle text="Checkout" />
      {listsCount ? (
        <ListsList
          items={items}
          listsCount={listsCount}
          deleteSpecialAr={deleteSpecialAr}
        />
      ) : (
        "no lists found"
      )}
    </Fragment>
  );
};

export default Checkout;
