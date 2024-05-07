import React from "react";

const FormDtalistInput = ({
  label,
  name,
  type,
  defaultValue,
  size,
  listDB,
  onInput,
  list
}) => {
  
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
        list={list}
        onInput={onInput}
      />
      <datalist id={list}>
        {listDB.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </datalist>
    </div>
  );
};

export default FormDtalistInput;
