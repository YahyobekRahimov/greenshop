import { MenuItem, Select } from "@mui/material";
import { React } from "react";

const MyInputs = ({
  label = "",
  type = "text",
  name = "",
  required,
  showSelect,
  placeholder = "",
  options,
  ...otherProps
}) => {
  if (showSelect) {
    const optionsArray = options.split(",").map((option) => option.trim());

    return (
      <div className="mb-4 w-[21.875rem] mr-6">
        <form>
          <label htmlFor={name} className="block text-gray-700 font-bold mb-2">
            {label} {required && <span className="text-red-700">*</span>}
          </label>
          <Select
            value={name}
            size="small"
            className="w-full "
            name={name}
            required={required}
            {...otherProps}
          >
            {optionsArray.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </form>
      </div>
    );
  }

  return (
    <div className="mb-4 w-[21.875rem] mr-6">
      <form>
        <label htmlFor={name} className="block text-gray-700 font-bold mb-2">
          {label} {required && <span className="text-red-600">*</span>}
        </label>
        <input
          id={name}
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className={`border border-gray-300 p-2 w-full rounded-md ${
            required && !otherProps.value ? "border-x-gray-500" : ""
          }`}
          {...otherProps}
        />
      </form>
    </div>
  );
};

export default MyInputs;
