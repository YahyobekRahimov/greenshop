import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

export default function Login() {
   return (
      <div className="flex flex-col items-center">
         <form className="w-full">
            <div className="flex flex-col w-full gap-[1rem]">
               <TextField
                  fullWidth
                  label="Username or Email"
                  variant="outlined"
               />
               <TextField
                  fullWidth
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
            <Button
               variant="contained"
               size="large"
               sx={{ width: "100%", marginTop: "2rem" }}
            >
               Login
            </Button>
         </form>
      </div>
   );
}
