import MyInputs from "../../Shop/CheckOut/MyInputs";
import { Button, FormControl } from "@mui/material";

const Personalnfo = () => {
  return (
    <div className="w-full">
      <p>Personal Information</p>
      <FormControl fullWidth>
        <div className="w-full grid grid-cols-2 gap-y-5 gap-x-[2rem]">
          <MyInputs
            label="First Name"
            name="firstName"
            required={true}
            className="w-full"
          />
          <MyInputs label="Last Name" name="lastName" required={true} />
          <MyInputs
            label="Email address"
            placeholder=""
            name="zip"
            required={true}
          />
          <MyInputs
            label="Phone Number"
            placeholder=""
            name="phone"
            type="number"
            required={true}
          />
          <MyInputs
            label="Username"
            placeholder=""
            name="username"
            required={true}
          />
          <MyInputs label="Photo" text="true" />
          <div className="flex flex-col gap-4">
            <h2 className="w-full mb-2 mt-3">Password Change</h2>
            <MyInputs
              label="Current password"
              name="password"
              type="password"
              required={true}
            />

            <MyInputs
              label="New password"
              name="password"
              type="password"
              required={true}
            />

            <MyInputs
              label="Confirm new password"
              name="password"
              type="password"
              required={true}
            />

            <Button
              variant="contained"
              style={{ width: "160px", fontSize: "14px" }}
            >
              Save Change
            </Button>
          </div>
        </div>
      </FormControl>
    </div>
  );
};

export default Personalnfo;
