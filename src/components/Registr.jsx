import React, { useRef } from "react";
import Button from "./Button";
import { TextField } from "@mui/material";
import { useRef, useState } from "react";

export default function Registr({ setOpen }) {
   const nameRef = useRef();

   const emailRef = useRef();

   const passwordRef = useRef();

   const cofirmRef = useRef();
   const [nameError, setNameError] = useState(false);
   const [emailError, setEmailError] = useState(false);
   const [passwordError, setPasswordError] = useState(false);
   const [confirmError, setConfirmError] = useState(false);
   const [confrimCorrect, setConfrimCorrectError] = useState(false);

   function validate() {
      if (!nameRef.current.value) {
         setNameError(true);
         return false;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (
         !emailRef.current.value ||
         !emailPattern.test(emailRef.current.value)
      ) {
         setEmailError(true);
      }
      if (!passwordRef.current.value) {
         setPasswordError(true);
         return false;
      }
      if (!cofirmRef.current.value) {
         setConfirmError(true);
         return false;
      }
      if (passwordRef.current.value !== cofirmRef.current.value) {
         setConfrimCorrectError(true);
         return false;
      } else if (
         passwordRef.current.value === cofirmRef.current.value
      ) {
         setConfrimCorrectError(false);
      }
      return true;
   }
   function changeInput(e) {
      if (e.target.value.length > 1) {
         setNameError(false);
      }
   }
   function changeInputEmail(e) {
      if (e.target.value.length > 1) {
         setEmailError(false);
      }
   }
   function changeInputPassword(e) {
      if (e.target.value.length > 1) {
         setPasswordError(false);
      }
   }
   function changeInputConfirm(e) {
      if (e.target.value.length > 1) {
         setConfirmError(false);
      }
   }
   function clearValue() {
      nameRef.current.value = "";
      emailRef.current.value = "";
      passwordRef.current.value = "";
      cofirmRef.current.value = "";
   }
   function SaveLocalstore() {
      const userData = {
         name: nameRef.current.value,
         email: emailRef.current.value,
         password: passwordRef.current.value,
      };

      const userDataString = JSON.stringify(userData);

      document.cookie = `username = ${nameRef.current.value}`;

      let data = localStorage.getItem("users")
         ? JSON.parse(localStorage.getItem("users"))
         : [];
      let user = {
         name: nameRef.current.value,
         email: emailRef.current.value,
         password: passwordRef.current.value,
      };
      data.push(user);
      localStorage.setItem("users", JSON.stringify(data));
   }

   function registrButtonClick() {
      if (!validate()) {
         return;
      }
      SaveLocalstore();
      clearValue();
      setOpen(false);
   
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
