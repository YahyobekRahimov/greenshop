import { Button, TextareaAutosize } from "@mui/material";
import Container from "../../components/Container";
import MyInputs from "../Shop/CheckOut/MyInputs";

const ContactUs = () => {
  return (
    <Container>
      <div className="mb-14 pt-10">
        <h1 className="text-[3rem] text-[#056932] font-bold">Contact Us</h1>
        <p className="text-2xl mb-4">
          Your satisfaction is our top priority. We welcome your comments,
          questions and suggestions.
        </p>
        <div className="flex gap-16 font-bold">
          <div className="bg-[url('/src/images/contact-bg.jpg')] h-[750px] w-[500px] bg-center bg-no-repeat bg-cover rounded-2xl"></div>
          <div className="right w-1/2 flex flex-col gap-6">
            <h2 className="text-5xl mb-4 mt-1 text-[#056932] font-bold ">
              Send Message
            </h2>
            <MyInputs
              label="Name"
              name="firstName"
              required={true}
              className="w-full"
            />
            <MyInputs
              label="Email"
              name="email"
              type="email"
              required={true}
              className="w-full"
            />
            <MyInputs
              label="Phone"
              name="phone"
              type="number"
              required={true}
              className="w-full"
            />
            <div className="block">
              <p className="mb-2">Message</p>
              <TextareaAutosize
                className="border-2 resize-none p-2 w-full h-64"
                minRows={4}
                name="text"
                id="text"
              ></TextareaAutosize>
            </div>

            <Button
              variant="contained"
              sx={{
                padding: 2,
                width: 1 / 3,
                marginLeft: "auto",
                marginTop: 3,
              }}
            >
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
