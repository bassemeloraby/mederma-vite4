import React from "react";
import { Virtuoso } from "react-virtuoso";
import noPhoto from "../assets/noPhoto.jpg";
import { Link } from "react-router-dom";

const ProductVitosoList = ({ items }) => {
  return (
    <div>
      <Virtuoso
        style={{ height: "600px", background: "#f8f8f8" }}
        data={items}
        totalCount={10500}
        itemContent={(index, drug) => {
          const { TradeName, PublicPrice, ScientificName } = drug;
          return (
            <Link
              key={drug._id}
              to={`/drugs/${drug._id}`}
              className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap  bg-base-100 shadow-xl hover:shadow-2xl duration-300 group"
            >
              <img
                src={noPhoto}
                alt={TradeName}
                className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="ml-0 sm:ml-16">
                <h3 className="capitalize font-medium text-lg">{TradeName}</h3>
                <h4 className="capitalize text-md text-neutral-content">
                  {ScientificName}
                </h4>
              </div>
              <p className="font-medium ml-0 sm:ml-auto text-lg">
                {PublicPrice}
              </p>
            </Link>
          );
        }}
      />
    </div>
  );
};

export default ProductVitosoList;