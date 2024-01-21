import { TextField } from "@mui/material";

const CartTotal = () => {
  return (
    <div>
      <h1>Cart Totals </h1>
      <span>Coupon Apply</span>
      <div className="flex">
        <TextField
          className="outline-primary -mr-1"
          id="outlined-basic"
          label="Enter coupon code here..."
          variant="outlined"
        />
        <button className="bg-primary text-white pl-[2.188rem] pr-[1.563rem] px-6 text-[0.938rem] ">
          Aapply
        </button>
        <p>hello</p>
      </div>
    </div>
  );
};

export default CartTotal;
