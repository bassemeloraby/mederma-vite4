import React from "react";
import { Virtuoso } from "react-virtuoso";

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
            <div
              style={{
                background: index % 2 === 0 ? "#ffbb00" : "#ffcc99",
                color: "#333",
                padding: "10px",
                fontSize: "16px",
                fontFamily: "Arial, sans-serif",
                border: "1px solid #ccc",
                borderRadius: "5px",
                margin: "5px 0",
              }}
              className=""
            >
              <div>
                <h6>{TradeName} </h6>
                <h6>{ScientificName} </h6>
                <h6>{PublicPrice} SR </h6>
              </div>
              
            </div>
          );
        }}
      />
    </div>
  );
};

export default ProductVitosoList;
