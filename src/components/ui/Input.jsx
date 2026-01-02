import React from "react";

const Input = ({
  id,
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
  onKeyDown,
  required,
  label = "",
  error = "", // New error prop
}) => {
  return (
    <div className="relative">
      {label && (
        <label
          htmlFor={id}
          className="absolute -top-2 left-2 inline-block rounded-lg bg-white px-1 text-xs font-medium text-default"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`block w-full input-border bg-white px-3 py-1.5 text-default placeholder:text-gray-400 placeholder:placeholder-sm focus:outline-none focus:ring-0 sm:text-sm/6 ${
          error ? "border-red-500" : ""
        } ${className}`}
      />
      {error && (
        <p className="mt-1 text-xs ps-3 text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;