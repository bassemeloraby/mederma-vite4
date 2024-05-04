import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { customFetch } from "../../utils";
import noPhoto from "../../assets/noPhoto.jpg";

export const loader = async ({ params }) => {
  const response = await customFetch(`/allDrugs/${params.id}`);
  console.log(response.data);
  return { drug: response.data };
};
const SingleDrug = () => {
  const drug = useLoaderData();
  console.log(drug.drug);
  const { TradeName, PublicPrice, ScientificName, MarketingCompany } = drug.drug[0];
  console.log(TradeName)
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/drugs">drugs</Link>
          </li>
        </ul>
      </div>
      {/* DRUG */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2  lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={noPhoto}
          alt={TradeName}
          className="w-96 h-96 object-cover rounded-lg lg:w-full  "
        />
        {/* DRUG INFO */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{TradeName}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {ScientificName}
          </h4>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {PublicPrice}
          </h4>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {MarketingCompany}
          </h4>
        </div>
      </div>{" "}
    </section>
  );
};

export default SingleDrug;
