import Button from "./Button";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

export default function Login() {
   return (
      <div className="flex flex-col items-center">
         <h2 className="text-sm mb-[0.875rem]">
            Enter your username and password to login.
         </h2>
         <div className="flex flex-col w-full gap-[1rem]">
            <TextField
               fullWidth
               id="outlined-basic"
               label="Username or Email"
               variant="outlined"
            />
            <TextField
               fullWidth
               id="outlined-basic"
               label="Password"
               variant="outlined"
               type="password"
            />
            <Link
               className="text-right text-primary hover:underline"
               to="/"
            >
               Forgot Password?
            </Link>
         </div>
         <Button classes="hover:bg-primaryDark text-white rounded-md bg-primary w-full py-[0.88rem] mt-7">
            Login
         </Button>
      </div>
   );
}
