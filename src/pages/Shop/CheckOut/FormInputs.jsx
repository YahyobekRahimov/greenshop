import { Checkbox, FormControlLabel } from "@mui/material";
import MyInputs from "./MyInputs.jsx";

const FormInputs = () => {
   return (
      <div className="left mt-9 ">
         <h1 className="mb-4">Billing Address</h1>
         <form>
            <div className="w-[46.875rem] grid grid-cols-2 gap-x-8 gap-y-4">
               <MyInputs
                  label="First Name"
                  name="firstName"
                  required={true}
               />
               <MyInputs
                  label="Last Name"
                  name="lastName"
                  required={true}
               />
               <MyInputs
                  label="Country / Region"
                  name="country"
                  showSelect={true}
                  required={true}
                  options="Select a country / region, Uzbekistan, Russia"
               />
               <MyInputs
                  label="Town / City"
                  name="country"
                  required={true}
               />
               <MyInputs
                  label="Street Address"
                  placeholder="House number and street name"
                  name="country"
                  required={true}
               />
               <MyInputs
                  label="Appartment"
                  placeholder="Appartment, suite, unit, etc. (optional)"
                  name="appartment"
                  required={false}
               />
               <MyInputs
                  label="State"
                  name="state"
                  showSelect={true}
                  required={true}
                  options="Select a state, Uzbekistan, Russia"
               />
               <MyInputs
                  label="Zip"
                  placeholder=""
                  name="zip"
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
               <div>
                  <div className="flex mb-11 w-full">
                     <FormControlLabel
                        control={<Checkbox />}
                        label="Ship to a different address?"
                        sx={{ userSelect: "none" }}
                     ></FormControlLabel>
                  </div>

                  <div className="block">
                     <p className="mb-2">Order notes (optional)</p>
                     <textarea
                        className="resize-none p-3 border border-gray-300 p-2 w-full focus:border-blue-500 focus:outline-none focus:ring-blue-200 focus:ring-2 duration-200 rounded-md"
                        name="text"
                        id="text"
                        cols="40"
                        rows="5"
                     ></textarea>
                  </div>
               </div>
            </div>
         </form>
      </div>
   );
};

export default FormInputs;
