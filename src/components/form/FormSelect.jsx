import React from "react";

const FormSelect = ({ label, name, list, defaultValue, size, onInput }) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <select
        name={name}
        id={name}
        // className={`select select-bordered ${size}`}
        className={`input input-bordered ${size}`}
        defaultValue={defaultValue}
        onInput={onInput}
      >
        {list.map((item, i) => {
          return (
            <option key={i} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormSelect;
