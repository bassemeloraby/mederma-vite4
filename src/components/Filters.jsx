import React, { useEffect, useState } from "react";
import { Form, useLoaderData, Link } from "react-router-dom";
import FormInput from "./form/FormInput";
import FormSelect from "./form/FormSelect";
import FormCheckbox from "./form/FormCheckbox";
import FormDtalistInput from "./form/FormDtalistInput";
// import FormRange from "./form/FormRange";
// import FormCheckbox from "./form/FormCheckbox";
const Filters = ({
  contents,
  scientificName,
  setScientificNameFilter,
  scientificNameFilter,
  setWasfatyFilter,
  wasfatyFilter,
  filterHandelr,
}) => {
  // console.log("Filters", contents);
  // console.log(scientificName);
  // const { ScientificName ,wasfaty} = params;

  // const resetHandler = () => {
  //   setScientificNameFilter("");
  // };

  return (
    <div className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormDtalistInput
        name="ScientificName"
        label="select Scientific Name"
        type="text"
        size="input-sm"
        listDB={scientificName}
        defaultValue={scientificNameFilter}
        // onChange={(e) => setScientificNameFilter(e.target.value)}
        onInput={(e) => setScientificNameFilter(e.target.value)}
      />
      {/* wasfaty */}
      <FormCheckbox
        name="wasfaty"
        label="wasfaty"
        size="checkbox-sm"
        //  defaultValue={wasfaty}
        onChange={() => setWasfatyFilter(!wasfatyFilter)}
      />
      {/* BUTTONS <button type="submit" className="btn btn-primary btn-sm">
        search
      </button>{" "}
      <button onClick={resetHandler} className="btn btn-accent btn-sm">
        reset
      </button>*/}
      <button onClick={filterHandelr} className="btn btn-accent btn-sm">
        search
      </button>
    </div>
  );
};

export default Filters;
