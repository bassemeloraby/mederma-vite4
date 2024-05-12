import React from "react";
import { Virtuoso } from "react-virtuoso";
import noPhoto from "../assets/noPhoto.jpg";
import { Link } from "react-router-dom";

const ProductVitosoList = ({ contents }) => {

  const { _id, TradeName, PublicPrice, ScientificName, MarketingCompany } =
    contents;

  


  return (
    <div>
      <Virtuoso
        style={{ height: "600px", background: "#f8f8f8" }}
        data={contents}
        totalCount={10500}
        itemContent={(index, drug) => {
          const { TradeName, PublicPrice, ScientificName } = drug;
          return (
            <div
              key={drug._id}
              className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap  bg-base-100 shadow-xl hover:shadow-2xl duration-300 group"
            >
              <img
                src={noPhoto}
                alt={TradeName}
                className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="ml-0 sm:ml-16">
                <Link to={`/drugs/${drug._id}`}>
                  <h3 className="capitalize font-medium text-lg">
                    {TradeName}
                  </h3>
                </Link>
                <h4 className="capitalize text-md text-neutral-content">
                  {ScientificName}
                </h4>
              </div>
              <p className="font-medium ml-0 sm:ml-auto text-lg">
                {PublicPrice}
              </p>
            </div>
          );
        }}
      />
    </div>
  );
};

export default ProductVitosoList;
