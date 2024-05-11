import React, { Fragment, useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";

import ProductVitosoList from "./ProductVitosoList";
import ProductVitosoGrid from "./ProductVitosoGrid";

const ProductsContainer = ({contents}) => {

  
  const totalProducts = contents.length;
  console.log(totalProducts);
  const [layout, setLayout] = useState("list");

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-based-content"
    }`;
  };

  return (
    <Fragment>
      {/* HEADER */}
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {totalProducts} product{totalProducts > 1 && "s"}
        </h4>
        <div className="flex gap-x-2">
          <button
            type="button"
            onClick={() => setLayout("grid")}
            className={setActiveStyles("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            type="button"
            onClick={() => setLayout("list")}
            className={setActiveStyles("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : layout === "grid" ? (
          <ProductVitosoGrid contents={contents} />
        ) : (
          // "Grid"
          <ProductVitosoList contents={contents} />
          // "List"
        )}
      </div>
    </Fragment>
  );
};

export default ProductsContainer;
