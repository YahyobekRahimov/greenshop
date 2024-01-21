import Button from "./Button";
import { TextField } from "@mui/material";
import { useRef, useState } from "react";

export default function Registr({ setOpen }) {
   const usernameRef = useRef();

   const emailRef = useRef();

   const passwordRef = useRef();

   const confirmRef = useRef();

   const [nameError, setNameError] = useState(false);
   const [emailError, setEmailError] = useState(false);
   const [passwordError, setPasswordError] = useState(false);
   const [confirmError, setConfirmError] = useState(false);
   const [confirmCorrect, setConfirmCorrectError] = useState(false);

   function validate() {
      if (!usernameRef.current.value) {
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
      if (!confirmRef.current.value) {
         setConfirmError(true);
         return false;
      }
      if (passwordRef.current.value !== confirmRef.current.value) {
         setConfirmCorrectError(true);
         return false;
      } else if (
         passwordRef.current.value === confirmRef.current.value
      ) {
         setConfirmCorrectError(false);
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
      usernameRef.current.value = "";
      emailRef.current.value = "";
      passwordRef.current.value = "";
      confirmRef.current.value = "";
   }
   function saveToLocalStorage() {
      const userData = {
         name: usernameRef.current.value,
         email: emailRef.current.value,
         password: passwordRef.current.value,
      };

      const userDataString = JSON.stringify(userData);

      document.cookie = `username = ${usernameRef.current.value}`;

      let data = localStorage.getItem("users")
         ? JSON.parse(localStorage.getItem("users"))
         : [];
      let user = {
         name: usernameRef.current.value,
         email: emailRef.current.value,
         password: passwordRef.current.value,
      };
      data.push(user);
      localStorage.setItem("users", JSON.stringify(data));
   }

   function handleSubmit(e) {
      e.preventDefault();
      if (validate()) {
         saveToLocalStorage();
         clearValue();
         setOpen(false);
      }
   }
   return (
      <div className="flex flex-col items-center">
         <h2 className="text-sm mb-[0.875rem] text-center">
            Enter your username, email and password to register.
         </h2>
         <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col w-full gap-4 mb-4">
               <TextField
                  fullWidth
                  onChange={changeInput}
                  label="Username"
                  variant="outlined"
                  inputRef={usernameRef}
               />
               {nameError && nameError ? (
                  <span className="text-red-800 mt-[-1rem] mb-[0.5rem]">
                     Please, enter username
                  </span>
               ) : (
                  ""
               )}
               <TextField
                  fullWidth
                  onChange={changeInputEmail}
                  label="Enter your email address"
                  variant="outlined"
                  inputRef={emailRef}
               />
               {emailError && emailError ? (
                  <span className="text-red-800 mt-[-1rem] mb-[0.5rem]">
                     Please, enter your email
                  </span>
               ) : (
                  ""
               )}

               <TextField
                  fullWidth
                  onChange={changeInputPassword}
                  label="Password"
                  variant="outlined"
                  type="password"
                  inputRef={passwordRef}
               />
               {passwordError && passwordError ? (
                  <span className="text-red-800 mt-[-1rem] mb-[0.5rem]">
                     Please, enter password
                  </span>
               ) : (
                  ""
               )}

               <TextField
                  fullWidth
                  onChange={changeInputConfirm}
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  inputRef={confirmRef}
               />
               {confirmError && confirmError ? (
                  <span className="text-red-800 mt-[-1rem] mb-[0.5rem]">
                     Please enter again Password
                  </span>
               ) : (
                  ""
               )}
               {confirmCorrect && confirmCorrect ? (
                  <span className="text-red-800 mt-[-1rem] mb-[0.5rem]">
                     Please enter correct Password
                  </span>
               ) : (
                  ""
               )}
            </div>
            <Button classes="hover:bg-primaryDark text-white rounded-md bg-primary w-full py-[0.88rem] ">
               Login
            </Button>
         </form>
      </div>
   );
}
