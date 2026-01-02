import React from "react";

export default function SelectComponent({
  label,
  name,
  value,
  onChange = () => {},
  options = [],
}) {
  return (
    <div className="relative">
      <label
        htmlFor={name}
        className="absolute -top-2 left-2 inline-block rounded-lg bg-white px-1 text-xs font-medium text-gray-500"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        
        value={value}
        onChange={onChange}
        className="block w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 sm:text-sm input-border focus:outline-none focus:ring-0"
        required
      >
        <option value="" className="text-gray-400" disabled hidden>
          Select
        </option>
        {options.map((option, index) => (
          <option key={index} value={option} className="text-gray-900">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
