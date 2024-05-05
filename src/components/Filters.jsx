import React, { useEffect, useState } from "react";
import { Form, useLoaderData, Link } from "react-router-dom";
import FormInput from "./form/FormInput";
import FormSelect from "./form/FormSelect";
import FormCheckbox from "./form/FormCheckbox";
import FormDtalistInput from "./form/FormDtalistInput";
// import FormRange from "./form/FormRange";
// import FormCheckbox from "./form/FormCheckbox";
const Filters = () => {
  const { drugs } = useLoaderData();
  const [scientificName, setScientificName] = useState([]);
  console.log(scientificName);
  useEffect(() => {
    setScientificName([...new Set(drugs.map((drug) => drug.ScientificName))]);
  }, [drugs]);
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormDtalistInput
        name="ScientificName"
        label="select Scientific Name"
        type="text"
        size="input-sm"
        listDB={scientificName}
      />

      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm">
        search
      </button>
      <Link to="/drugs" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
};

export default Filters;
