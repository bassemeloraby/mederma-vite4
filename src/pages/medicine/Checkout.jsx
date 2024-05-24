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
    setlistsCount(listsCount -1)
  };
  return (
    <Fragment>
      <SectionTitle text="Checkout" />
      <div className="mt-8">
        <h4 className="mb-4 capitalize">total lists : {listsCount}</h4>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>options</th>
              </tr>
            </thead>
            <tbody>
              {items.map((li, i) => {
                const { Description } = li;
                return (
                  <tr key={i}>
                    <td>{Description}</td>
                    <td>
                      {" "}
                      <button
                        onClick={() => deleteSpecialAr(li._id)}
                        className="btn btn-accent btn-sm me-2"
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default Checkout;
