import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import noPhoto from "../assets/noPhoto.jpg";

const ProductsGrid = () => {
  const { drugs } = useLoaderData();
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {drugs.map((drug) => {
        const { TradeName, PublicPrice } = drug;
        return (
          <Link
            key={drug._id}
            to={`/drugs/${drug._id}`}
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure className="px-4 pt-4">
              <img
                src={noPhoto}
                alt={TradeName}
                className="rounded-xl h-64 md:h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
            <h2 className="card-title capitalize tracking-wider">{TradeName}</h2>
            <span className="text-secondary">{PublicPrice}</span>
          </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
