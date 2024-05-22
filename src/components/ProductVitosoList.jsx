import React from "react";
import { Virtuoso } from "react-virtuoso";
import noPhoto from "../assets/noPhoto.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

const ProductVitosoList = ({ contents }) => {
  
  const dispatch = useDispatch();

  const addHnadler = (_id) => {
    console.log(_id);
    const drugToAdd = contents.filter((drug) => drug._id === _id);
    console.log(drugToAdd[0]);
    const cartProduct = {
      // cartID: _id + Math.random(),
      productID: drugToAdd[0]._id,
      description: drugToAdd[0].description,
      scientificName: drugToAdd[0].scientificName,
      marketingCompany: drugToAdd[0].marketingCompany,
    };
    console.log(cartProduct);
    dispatch(addItem({ drug: cartProduct }));
  };

  

  return (
    <div>
      <Virtuoso
        style={{ height: "600px", background: "#f8f8f8" }}
        data={contents}
        totalCount={10500}
        itemContent={(index, drug) => {
          const { _id, description, publicPrice, scientificName } = drug;
          return (
            <div
              key={_id}
              className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap  bg-base-100 shadow-xl hover:shadow-2xl duration-300 group"
            >
              <img
                src={noPhoto}
                alt={description}
                className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="ml-0 sm:ml-16">
                <Link to={`/drugs/${_id}`}>
                  <h3 className="capitalize font-medium text-lg">
                    {description}
                  </h3>
                </Link>
                <h4 className="capitalize text-md text-neutral-content">
                  {scientificName}
                </h4>
              </div>
              <p className="font-medium ml-0 sm:ml-auto text-lg">
                {publicPrice}
              </p>
              <div className="mt-10">
                <button
                  className="btn btn-secondary btn-md"
                  onClick={() => addHnadler(_id)}
                >
                  Add to bag
                </button>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};

export default ProductVitosoList;
