import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { customFetch } from "../../utils";
import noPhoto from "../../assets/noPhoto.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";

export const loader = async ({ params }) => {
  const response = await customFetch(`/allDrugs/${params.id}`);
  console.log(response.data);
  return { drug: response.data };
};
const SingleDrug = () => {

  const drug = useLoaderData();
  const cartItems = useSelector((state) => state.cartState.cartItems);

  // console.log(cartItems[0].productID);
  console.log(cartItems.length);
  const { _id, TradeName, PublicPrice, ScientificName, MarketingCompany } =
    drug.drug[0];
  const dispatch = useDispatch();

  const cartProduct = {
    // cartID: _id + Math.random(),
    productID: _id ,
    TradeName,
    ScientificName,
    MarketingCompany,
  };

  const addToCart = () => {

    dispatch(addItem({ drug: cartProduct }));
  };

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
        {/* CART BTN */}
        <div className="mt-10">
          <button className="btn btn-secondary btn-md" onClick={addToCart}>
            Add to bag
          </button>
        </div>
      </div>{" "}
    </section>
  );
};

export default SingleDrug;
