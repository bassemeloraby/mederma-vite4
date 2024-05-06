import React, { Fragment, forwardRef } from "react";
import { VirtuosoGrid } from "react-virtuoso";

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
      width: "-webkit-fill-available"
      // whiteSpace: "nowrap",
    }}
  >
    {children}
  </div>
);

const ProductVitosoGrid = ({ items }) => {
  return (
    <Fragment>
      <VirtuosoGrid
        style={{ height: 500 }}
        data={items}
        totalCount={10500}
        components={gridComponents}
        itemContent={(index, drug) => {
          const { TradeName, PublicPrice, ScientificName } = drug;
          return (
            <ItemWrapper>
              <h6>{TradeName}</h6>
              <h6>{PublicPrice}</h6>
            </ItemWrapper>
          );
        }}
      />
      <style>{`html, body, #root { margin: 0; padding: 0 }`}</style>
    </Fragment>
  );
};

export default ProductVitosoGrid;
