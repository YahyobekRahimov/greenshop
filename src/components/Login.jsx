import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ setOpen }) {
   const usernameEmail = useRef();
   const passwordRef = useRef();

   const [usernameEmailError, setUsernameEmailError] = useState("");
   const [passwordError, setPasswordError] = useState("");

   const navigate = useNavigate();

   function validate() {
      if (
         !usernameEmail.current.value ||
         usernameEmail.current.value.length <= 3
      ) {
         setUsernameEmailError(
            "Please, enter a valid username or email"
         );
         return false;
      } else {
         setUsernameEmailError("");
      }

      if (!passwordRef.current.value) {
         setPasswordError(
            "You have entered an incorrect email or password"
         );
         return false;
      } else {
         setPasswordError("");
      }

      return true;
   }

   function handleSubmit(e) {
      e.preventDefault();
      if (!validate()) {
         return;
      }
      const users = JSON.parse(localStorage.getItem("users")) ?? [];
      if (users) {
         const index = users.findIndex(
            (user) =>
               user.username === usernameEmail.current.value ||
               user.email === usernameEmail.current.value
         );
         if (users[index].password === passwordRef.current.value) {
            setOpen(false);
            navigate("/");
         }
      }
   }
   return (
      <div className="flex flex-col items-center">
         <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col w-full gap-[1rem]">
               <div>
                  <TextField
                     fullWidth
                     label="Username or Email"
                     variant="outlined"
                     inputRef={usernameEmail}
                  />
                  <span className="text-red-700">
                     {usernameEmailError}
                  </span>
               </div>
               <div>
                  <TextField
                     fullWidth
                     label="Password"
                     variant="outlined"
                     type="password"
                     inputRef={passwordRef}
                  />
                  <span className="text-red-700">
                     {passwordError}
                  </span>
               </div>
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
               type="submit"
            >
               Login
            </Button>
         </form>
      </div>
   );
}
