import React from "react";
import { customFetch } from "../utils";
import { Link, useLoaderData } from "react-router-dom";
import { ProductsContainer } from "../components";

const url = "/specialArrays";

export const loader = async ({ params }) => {
  const response = await customFetch(`${url}/${params.id}`);
  console.log(response.data);
  const list = response.data;
  return list;
};

const SingleList = () => {
  const list = useLoaderData();
  const { _id, Description, content } = list;

  return (
    <section>
      {" "}
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/checkout">checkout</Link>
          </li>
        </ul>
      </div>
      {/* LIST */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2  lg:gap-x-16">
        {/* LIST INFO */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{Description}</h1>
        </div>
        </div>
        <ProductsContainer contents={content}/>
    </section>
  );
};

export default SingleList;
