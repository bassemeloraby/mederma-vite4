import React from "react";

import FormCheckbox from "./form/FormCheckbox";
import FormDtalistInput from "./form/FormDtalistInput";

const Filters = ({
  contents,
  // scientificName
  scientificName,
  setScientificNameFilter,
  scientificNameFilter,
  // wasfaty
  setWasfatyFilter,
  wasfatyFilter,
  // MarketingCompany
  marketingCompany,
  setMarketingCompanyFilter,
  marketingCompanyFilter,
  // functions
  filterHandelr,
}) => {
  return (
    <div className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* company  */}
      {/*<FormDtalistInput
        name="marketingCompany"
        label="select Marketing Company"
        type="text"
        size="input-sm"
        listDB={marketingCompany}
        defaultValue={marketingCompanyFilter}
        onInput={(e) => setMarketingCompanyFilter(e.target.value)}
        list="MarketingCompany"
      />*/}
      {/* ScientificName  */}
      <FormDtalistInput
        name="scientificName"
        label="select Scientific Name"
        type="text"
        size="input-sm"
        listDB={scientificName}
        defaultValue={scientificNameFilter}
        onInput={(e) => setScientificNameFilter(e.target.value)}
        list="ScientificName"
      />
      {/* wasfaty */}
      {/*  <FormCheckbox
        name="wasfaty"
        label="wasfaty"
        size="checkbox-sm"
        onChange={() => setWasfatyFilter(!wasfatyFilter)}
      />*/}
      <button onClick={filterHandelr} className="btn btn-accent btn-sm">
        search
      </button>
    </div>
  );
};

export default Filters;
