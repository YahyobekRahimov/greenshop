import MyInputs from "../../Shop/CheckOut/MyInputs";
import { FormControl } from "@mui/material";

const Personalnfo = () => {
  return (
    <div>
      <p>Personal Information</p>
      <FormControl>
        <div className="w-[46.875rem] flex flex-wrap">
          <MyInputs label="First Name" name="firstName" required={true} />
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
          <MyInputs
            label="Photo"
            text= "true"
          />
        </div>
      </FormControl>
    </div>
  );
};

export default Personalnfo;
