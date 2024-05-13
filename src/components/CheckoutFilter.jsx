import React from "react";
import FormSelect from "./form/FormSelect";

const CheckoutFilter = ({ list, onInput }) => {
  return (
    <div className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* Description  */}
      <FormSelect
        label="select list"
        type="text"
        list={list}
        size="input-sm"
        onInput={onInput}
      />
    </div>
  );
};

export default CheckoutFilter;
