
const TableHead = () => {
  return (
    <thead className="border-b-2 ">
      <tr className="mb-3 grid grid-cols-[0.9fr_2.3fr_0.5fr_1fr_1fr] items-center justify-items-center">
        <th className="px-6 py-2">Products</th>
        <th className="px-6 py-2">Name</th>
        <th className="px-6 py-2">Price</th>
        <th className="px-6 py-2">Quantity</th>
        <th className="px-6 py-2">Action</th>
      </tr>
    </thead>
  );
}

export default TableHead
