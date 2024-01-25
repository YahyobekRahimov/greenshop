import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCookie, getCookie } from "../JavaScript/Cookies";

export default function Login({ setOpen }) {
   const usernameEmail = useRef();
   const passwordRef = useRef();

   const [usernameEmailError, setUsernameEmailError] = useState("");
   const [passwordError, setPasswordError] = useState("");

   const navigate = useNavigate();

   function validate() {
      let hasNoError = true;
      if (!usernameEmail.current.value) {
         setUsernameEmailError(
            "Please, enter a valid username or email"
         );
         hasNoError = false;
      } else if (usernameEmail.current.value.length <= 3) {
         setUsernameEmailError(
            "User or email has to be longer than 3 characters"
         );
         hasNoError = false;
      } else {
         setUsernameEmailError("");
      }

      if (!passwordRef.current.value) {
         setPasswordError("You must enter your password");
         hasNoError = false;
      } else if (passwordRef.current.value.length >= 8) {
         setPasswordError(
            "The password must at least be 8 characters"
         );
         hasNoError = false;
      } else {
         setPasswordError("");
      }

      return hasNoError;
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

         if (
            index !== -1 &&
            users[index].password === passwordRef.current.value
         ) {
            setOpen(false);
            setCookie(
               "userInfo",
               `${users[index].username}|Divider|${users[index].email}`,
               24 * 60 // 2 months
            );
            navigate("/");
         } else {
            console.log("incorrect password");
            setPasswordError(
               "You have entered an incorrect email or password"
            );
         }
      }
   }
   return (
      <div className="flex flex-col items-center">
         <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col w-full gap-[1rem]">
               <div>
                  <TextField
                     autoFocus
                     fullWidth
                     label="Username or Email"
                     variant="outlined"
                     inputRef={usernameEmail}
                     onChange={(e) =>
                        e.target.value.length > 0 &&
                        usernameEmailError
                           ? setUsernameEmailError("")
                           : ""
                     }
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
                     onChange={(e) =>
                        e.target.value.length > 0 && passwordError
                           ? setPasswordError("")
                           : ""
                     }
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
