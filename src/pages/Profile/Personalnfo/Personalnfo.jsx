import MyInputs from "../../Shop/CheckOut/MyInputs";
import { FormControl } from "@mui/material";

const Personalnfo = () => {
   return (
      <div className="w-full">
         <p>Personal Information</p>
         <FormControl fullWidth>
            <div className="w-full grid grid-cols-2 gap-x-[2rem]">
               <MyInputs
                  label="First Name"
                  name="firstName"
                  required={true}
                  className="w-full"
               />
               <MyInputs
                  label="Last Name"
                  name="lastName"
                  required={true}
               />
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
            </div>
         </FormControl>
      </div>
   );
};

export default Personalnfo;
