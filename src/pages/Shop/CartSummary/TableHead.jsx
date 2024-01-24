import { Checkbox, FormControlLabel } from "@mui/material";

const TableHead = ({ checked, setChecked }) => {
  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  return (
    <thead className="border-b-2 -ml-10">
      <tr className="mb-3 -ml-4 grid grid-cols-[0.9fr_2.3fr_0.5fr_1fr_1fr] items-center justify-items-center">
        <th className=" py-2">
          <FormControlLabel
            control={
              <Checkbox
                checked={checked[0] && checked[1]}
                indeterminate={checked[0] !== checked[1]}
                onChange={handleChange1}
              />
            }
            label="Products"
            inputProps={{ "aria-label": "controlled" }}
          />
        </th>
        <th className="px-6 py-2">Name</th>
        <th className="px-6 py-2">Price</th>
        <th className="px-6 py-2">Quantity</th>
        <th className="px-6 py-2">Action</th>
      </tr>
    </thead>
  );
};

export default TableHead;
