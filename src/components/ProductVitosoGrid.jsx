import React, { Fragment, forwardRef } from "react";
import { Link } from "react-router-dom";
import { VirtuosoGrid } from "react-virtuoso";
import noPhoto from "../assets/noPhoto.jpg";

const gridComponents = {
  List: forwardRef(({ style, children, ...props }, ref) => (
    //1
    <div
      ref={ref}
      {...props}
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        ...style,
      }}
    >
      {children}
    </div>
  )),
  //2
  Item: ({ children, ...props }) => (
    <div
      {...props}
      style={{
        padding: "0.5rem",
        width: "33%",
        display: "flex",
        flex: "none",
        // alignContent: "stretch",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  ),
};

const ItemWrapper = ({ children, ...props }) => (
  //3
  <div
    {...props}
    style={{
      // display: "flex",
      // flex: 1,
      textAlign: "center",
      padding: "1rem 1rem",
      border: "1px solid gray",
      width: "-webkit-fill-available",
      // whiteSpace: "nowrap",
    }}
  >
    {children}
  </div>
);

const ProductVitosoGrid = ({ contents }) => {
  return (
    <Fragment>
      <VirtuosoGrid
        style={{ height: 500 }}
        data={contents}
        totalCount={10500}
        components={gridComponents}
        itemContent={(index, drug) => {
          const {
            description,
            publicPrice,
            scientificName,
            strength,
            strengthUnit,
            parts,
          } = drug;
          return (
            <ItemWrapper>
              <Link
                key={drug._id}
                to={`/drugs/${drug._id}`}
                className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
              >
                <figure className="px-4 pt-4">
                  <img
                    src={noPhoto}
                    alt={description}
                    className="rounded-xl h-64 md:h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title capitalize tracking-wider">
                    {description}
                    {parts}
                    {strength}
                    {strengthUnit}
                  </h2>
                  <span className="text-secondary">{publicPrice}</span>
                  <span className="text-primary">{scientificName}</span>
                </div>
              </Link>
            </ItemWrapper>
          );
        }}
      />
      <style>{`html, body, #root { margin: 0; padding: 0 }`}</style>
    </Fragment>
  );
};

export default ProductVitosoGrid;
