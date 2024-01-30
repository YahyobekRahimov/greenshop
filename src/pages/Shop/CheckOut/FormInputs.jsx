import MyInputs from "./MyInputs.jsx";

const FormInputs = () => {
  return (
    <div className="left mt-9 ">
      <h1 className="mb-4">Billing Address</h1>
      <form>
        <div className="w-[46.875rem] flex flex-wrap">
          <MyInputs label="First Name" name="firstName" required={true} />
          <MyInputs label="Last Name" name="lastName" required={true} />
          <MyInputs
            label="Country / Region"
            name="country"
            showSelect={true}
            required={true}
            options="Select a country / region, Uzbekistan, Russia"
          />
          <MyInputs label="Town / City" name="country" required={true} />
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
          <MyInputs label="Zip" placeholder="" name="zip" required={true} />
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
          <div className="flex mb-11 w-[46.875rem]">
            <input
              type="checkbox"
              className="rounded-3xl mr-2 outline-primary"
            />
            <span className="block">Ship to a different address?</span>
          </div>

          <div className="block">
            <p className="mb-2">Order notes (optional)</p>
            <textarea
              className="border-2 resize-none"
              name="text"
              id="text"
              cols="40"
              rows="5"
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormInputs;
