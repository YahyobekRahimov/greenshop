import React, { useRef } from "react";
import Button from "./Button";
import { TextField } from "@mui/material";
export default function Registr() {
   const usernameRef = useRef(null);
   const emailRef = useRef(null);
   const passwordRef = useRef(null);
   const confirmPasswordRef = useRef(null);
   const validate = () => {
      if (!usernameRef.current?.value) {
         return {
            id: 0,
            error: "Please, enter a username",
            passed: false,
         };
      }
      if (!emailRef.current?.value) {
         return {
            id: 1,
            error: "Please, enter an email",
            passed: false,
         };
         false;
      }
      if (!passwordRef.current?.value) {
         return {
            id: 2,
            error: "Please, enter a password",
            passed: false,
         };
      }
      if (!confirmPasswordRef.current?.value) {
         return {
            id: 3,
            error: "Please, confirm your password",
            passed: false,
         };
      }
      const username = usernameRef.current.value;
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const confirmPassword = confirmPasswordRef.current.value;
      const users = JSON.parse(localStorage.getItem("users")) || [];
      for (let i = 0; i < users.length; i++) {
         const user = users[i];
         if (user.username === username) {
            return {
               id: 0,
               passed: false,
               error: "Sorry, this username is already taken",
            };
         }
         if (user.email == email) {
            return {
               id: 1,
               passed: false,
               error: "A user with this email already exists",
            };
         }
         if (password !== confirmPassword) {
            return {
               id: 3,
               passed: false,
            };
         }
      }
   };
   const handleSubmit = () => {
      if (!validate().passed) {
         return;
      }
   };
   return (
      <div className="flex flex-col items-center">
         <h2 className="text-sm mb-[0.875rem] text-center">
            Enter your username, email and password to register.
         </h2>
         <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col w-full gap-4 mb-4">
               <TextField
                  fullWidth
                  label="Username"
                  variant="outlined"
                  inputRef={usernameRef}
               />
               <TextField
                  fullWidth
                  label="Enter your email address"
                  variant="outlined"
                  inputRef={emailRef}
               />
               <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  type="password"
                  inputRef={passwordRef}
               />
               <TextField
                  fullWidth
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  inputRef={confirmPasswordRef}
               />
            </div>
            <Button classes="hover:bg-primaryDark text-white rounded-md bg-primary w-full py-[0.88rem] ">
               Login
            </Button>
         </form>
      </div>
   );
}
