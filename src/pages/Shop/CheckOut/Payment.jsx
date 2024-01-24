import { Checkbox } from "@mui/material";
import imgPayment from "/src/images/payment.png";
import OrderTrack from "../OrderTrack/OrderTrack";
import { useState } from "react";

const Payment = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="w-[25.313rem]">
      <h1 className="mb-5">Payment Method</h1>
      <div className="wrpapper border-2 pt-3 pl-3 pb-2 flex gap-2 w-80 mb-4">
        <Checkbox />
        <img src={imgPayment} className="w-56 h-6" alt="" />
      </div>
      <div className="wrpapper border-2 pt-3 pl-3 pb-2 flex gap-2 w-80 mb-4">
        <Checkbox />
        <p>Dorect bank transfer</p>
      </div>
      <div className="wrpapper border-2 pt-3 pl-3 pb-2 flex gap-2 w-80 mb-4">
        <Checkbox />
        <p>Cash on delivery</p>
      </div>
      <button
        onClick={handleOpen}
        className="bg-primary w-80 text-white py-3 mt-10 rounded"
      >
        Place Order
      </button>
      <OrderTrack open={open} setOpen={setOpen} handleClose={handleClose} />
    </div>
  );
};

export default Payment;
