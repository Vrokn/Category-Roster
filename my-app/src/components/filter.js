import React from "react";

export default function Filter({ onChange }) {
  return (
    <label className="filter">
      <span>Filter Popular Movies: </span>
      <input
        onChange={({ target }) => onChange(target.value || false)}
        type="text"
      />
    </label>
  );
}
