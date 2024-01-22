import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import SubTotal from "./SubTotal";

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
      <SubTotal />
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
