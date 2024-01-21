import Container from "../../../components/Container";
import MyInputs from "./MyInputs";

export default function ProductCheckout() {
  return (
    <Container>
      <div className="flex mb-52">
        <div className="left">
          <h1>Billing Address</h1>
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
                label=" ."
                placeholder="Appartment, suite, unit, etc. (optional)"
                name="country"
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
                required={true}
              />
              <div className="flex mb-11 w-[46.875rem]">
                <input type="checkbox" />
                <span className="block">Ship to a different address?</span>
              </div>

              <div className="block">
                <p className="mb-2">Order notes (optional)</p>
                <textarea
                  className="border-2"
                  name="text"
                  id="text"
                  cols="40"
                  rows="5"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
