import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

const CartTotal = () => {
  return (
    <div className="text-[0.938rem] text-textPrimary text-center">
      <h1 className="text-left text-lg mb-5">Cart Totals </h1>
      <span className="text-left text-sm mb-2 block">Coupon Apply</span>
      <div className="flex mb-7">
        <TextField
          className="outline-primary -mr-1"
          id="outlined-basic"
          label="Enter coupon code here..."
          variant="outlined"
        />
        <button className="bg-primary text-white px-7 text-[0.938rem] hover:bg-primaryDark">
          Apply
        </button>
      </div>
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
      <button className="bg-primary py-3 px-20 mb-4 text-white rounded hover:bg-primaryDark">
        <Link to="/shop/checkout">Proceed To Checkout</Link>
      </button>
      <Link className="text-primary hover:text-primaryDark" to="/shop">
        Continue Shopping
      </Link>
    </div>
  );
};

export default CartTotal;
