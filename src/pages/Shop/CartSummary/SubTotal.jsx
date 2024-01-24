
const SubTotal = () => {
  return (
    <>
      <div className="flex justify-between mb-4">
        <span>Subtotal</span>
        <span className="text-lg">$2,683.00</span>
      </div>
      <div className="flex justify-between mb-5">
        <span>Coupon Discount</span>
        <span>(-) 00.00</span>
      </div>
      <div className="flex justify-between mb-7">
        <span>Shipping</span>
        <div className="flex flex-col items-end">
          <p className="text-lg mb-1">$16.00</p>
          <p className="text-primary">View shipping charge</p>
        </div>
      </div>
      <div className="flex justify-between mb-7">
        <span className="text-base">Total</span>
        <span>$2,699.00</span>
      </div>
    </>
  );
};

export default SubTotal;
