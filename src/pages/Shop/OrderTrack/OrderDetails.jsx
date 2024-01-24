const OrderDetails = () => {
  return (
    <ul className="flex text-textSecondary pt-3 justify-between pb-4 border-b-[1px]">
      <li className="border-r-[0.063rem] pr-5 pl-10">
        <p className="text-sm">Order Number</p>
        <span className="text-base font-bold">19586687</span>
      </li>
      <li className="border-r-[0.063rem] pr-5">
        <p className="text-sm">Date</p>
        <span className="text-base font-bold">15 Sep, 2021</span>
      </li>
      <li className="border-r-[0.063rem] pr-5">
        <p className="text-sm">Total</p>
        <span className="text-base font-bold">2,699.00</span>
      </li>
      <li className="border-r-[0.063rem] pr-5">
        <p className="text-sm">Payment Method</p>
        <span className="text-base font-bold">Cash on delivery</span>
      </li>
    </ul>
  );
};

export default OrderDetails;
