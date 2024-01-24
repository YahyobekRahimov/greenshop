import icon from "/src/images/thank-you.svg";
import x from "/src/images/x.svg";

const TrackHeader = ({ handleClose }) => {
  return (
    <div className="relative bg-footerBackgroundSecondary pt-5 text-center w-full flex items-center flex-col justify-center border-b-[1px]">
      <img src={icon} alt="Thank you icon" className="h-14" />
      <p className="text-textSecondary mt-3 mb-2">
        Your order has been received
      </p>
      <img
        onClick={handleClose}
        className="absolute right-3 cursor-pointer top-4 text-2xl "
        src={x}
        alt="Close button"
      />
    </div>
  );
};

export default TrackHeader;
