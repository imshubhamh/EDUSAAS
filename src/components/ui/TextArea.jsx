export const TextArea = ({
  label,
  rows = 10,
  placeholder,
  value,
  onChange,
  required,
  className
}) => {
  return (
    <div className="relative">
      <label
        htmlfor="name"
       className="absolute -top-2 left-2 inline-block rounded-lg bg-white px-1 text-xs font-medium text-default"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}

      </label>
      <textarea
        id="name"
        name="name"
        type="text"
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={` block w-full input-border bg-white px-3 py-1.5 text-default placeholder:text-gray-400 placeholder:placeholder-sm focus:outline-none focus:ring-0 sm:text-sm/6 ${className}`}
        required={required}
      />
    </div>
  );
};
