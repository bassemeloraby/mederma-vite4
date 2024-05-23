import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { customFetch } from "../../utils";
import noPhoto from "../../assets/noPhoto.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";

export const loader = async ({ params }) => {
  const response = await customFetch(`/allProducts/${params.id}`);
  console.log(response.data);
  const product = response.data;
  return product;
};
const SingleDrug = () => {
  const product = useLoaderData();
  console.log(product);
  const { _id, description, publicPrice, scientificName, marketingCompany } =
    product;
  // const cartItems = useSelector((state) => state.cartState.cartItems);

  // console.log(cartItems[0].productID);
  // console.log(cartItems.length);
  // const { _id, TradeName, publicPrice, scientificName, marketingCompany } =
  // products;
  const dispatch = useDispatch();

  const cartProduct = {
    // cartID: _id + Math.random(),
    productID: _id ,
    description,
    scientificName,
    marketingCompany,
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
          alt={description}
          className="w-96 h-96 object-cover rounded-lg lg:w-full  "
        />
        {/* DRUG INFO */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{description}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {scientificName}
          </h4>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {publicPrice} {publicPrice && "SR"}
          </h4>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {marketingCompany}
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
