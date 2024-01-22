import imgPayment from "/src/images/payment.png";

const Payment = () => {
  return (
    <div className="w-[25.313rem]">
      <h1 className="mb-5">Payment Method</h1>
      <div className="wrpapper border-2 pt-3 pl-3 pb-2 flex gap-2 w-80 mb-4">
        <input className="w-4" type="checkbox" />
        <img src={imgPayment} className="w-56 h-6" alt="" />
      </div>
      <div className="wrpapper border-2 pt-3 pl-3 pb-2 flex gap-2 w-80 mb-4">
        <input className="w-4" type="checkbox" />
        <p>Dorect bank transfer</p>
      </div>
      <div className="wrpapper border-2 pt-3 pl-3 pb-2 flex gap-2 w-80 mb-4">
        <input className="w-4" type="checkbox" />
        <p>Cash on delivery</p>
      </div>
      <button className="bg-primary w-80 text-white py-3 mt-10 rounded">
        Place Order
      </button>
    </div>
  );
};

export default Payment;
