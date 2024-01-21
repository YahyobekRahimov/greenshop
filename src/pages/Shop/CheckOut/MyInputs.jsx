function MyInputs({
  label = "",
  name,
  required,
  showSelect,
  placeholder = "",
  options,
  ...otherProps
}) {
  if (showSelect) {
    const optionsArray = options.split(",").map((option) => option.trim());

    return (
      <div className="mb-4 w-[21.875rem] mr-6">
        <label htmlFor={name} className="block text-gray-700 font-bold mb-2">
          {label} {required && <span className="text-red">*</span>}
        </label>
        <select
          className="w-full border border-gray-300 rounded-md px-3 py-2 leading-tight focus:outline-none focus:shadow-outline p-2"
          name={name}
          required={required}
          {...otherProps}
        >
          {optionsArray.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className="mb-4 w-[21.875rem] mr-6">
      <label htmlFor={name} className="block text-gray-700 font-bold mb-2">
        {label} {required && <span className="text-red">*</span>}
      </label>
      <input
        id={name}
        type="text"
        name={name}
        required={required}
        placeholder={placeholder}
        className={`border border-gray-300 p-2 w-full rounded-md ${
          required && !otherProps.value ? "border-x-gray-500" : ""
        }`}
        {...otherProps}
      />
    </div>
  );
}

export default MyInputs;
