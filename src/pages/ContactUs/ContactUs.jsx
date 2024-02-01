import Container from "../../components/Container";
import MyInputs from "../Shop/CheckOut/MyInputs";

const ContactUs = () => {
  return (
    <Container>
      <div className="mb-14 pt-10">
        <h1 className=" text-[3rem] text-[#056932] font-bold">Contact Us</h1>
        <p className="text-2xl mb-4">
          Your satisfaction is our top priority. We welcome your comments,
          questions and suggestions.
        </p>
        <div className="flex gap-14 font-bold">
          <div className="bg-[url('/src/images/contact-bg.jpg')] h-[850px] w-[500px] bg-center bg-no-repeat bg-cover"></div>
          <div className="right w-1/2 flex flex-col gap-5">
            <h1 className="text-5xl mb-2">Send Message</h1>
            <MyInputs
              label="Name"
              name="firstName"
              required={true}
              className="w-full"
            />
            <MyInputs
              label="Email"
              name="email"
              type="number"
              required={true}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
