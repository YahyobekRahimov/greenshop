
import user from "/src/images/user.svg";
import addres from "/src/images/Location.svg";
import shoppingBag from "/src/images/shopping-bag.svg";
import heart from "/src/images/likeIcon.svg";
import repots from "/src/images/reports.svg";
import download from "/src/images/Download.svg";
import support from "/src/images/support.svg";
import logout from "/src/images/mylogout.svg";
import { Button } from "@mui/material";

export default function MyAccount() {
  return (
    <div className="w-[19.375rem] bg-softBackground rounded-lg py-[17px] pl-4">
      <h2 className="mb-6 text-lg font-bold">My Account</h2>
      <div className="flex gap-3 mb-6 cursor-pointer items-center text-textSecondary text-[0.938rem]">
        <img className="w-[18px] h-[18px]" src={user} alt="user logo" />
        <p>Account Details</p>
      </div>
      <div className="flex gap-3 mb-6 cursor-pointer items-center text-textSecondary text-[0.938rem]">
        <img className="w-[18px] h-[18px]" src={addres} alt="addres logo" />
        <p> Address </p>
      </div>
      <div className="flex gap-3 mb-6 cursor-pointer items-center text-textSecondary text-[0.938rem]">
        <img
          className="w-[18px] h-[18px]"
          src={shoppingBag}
          alt="addres logo"
        />
        <p> Orders </p>
      </div>
      <div className="flex gap-3 mb-6 cursor-pointer items-center text-textSecondary text-[0.938rem]">
        <img className="w-[18px] h-[18px]" src={heart} alt="addres logo" />
        <p> Wishlist </p>
      </div>
      <div className="flex gap-3 mb-6 cursor-pointer items-center text-textSecondary text-[0.938rem]">
        <img className="w-[18px] h-[18px]" src={repots} alt="addres logo" />
        <p> Reports </p>
      </div>
      <div className="flex gap-3 mb-6 cursor-pointer items-center text-textSecondary text-[0.938rem]">
        <img className="w-[18px] h-[18px]" src={download} alt="addres logo" />
        <p> Downloads </p>
      </div>
      <div className="flex gap-3 mb-6 cursor-pointer items-center text-textSecondary text-[0.938rem]">
        <img className="w-[18px] h-[18px]" src={support} alt="addres logo" />
        <p> Support </p>
      </div>

      <div className="border-t">
        <Button
          style={{
            color: "#46A358",
            textTransform: "capitalize",
            fontWeight: 700,
            fontSize: "0.934rem",
            marginTop: "10px",
          }}
        >
          <img
            src={logout}
            alt="logout logo"
            className="mr-[6px] text-primary"
          />
          Loguot
        </Button>
      </div>
    </div>
  );
}
