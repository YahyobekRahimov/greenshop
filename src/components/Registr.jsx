import React from "react";
import Button from "./Button";
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
   }
   return (
      <div className="flex flex-col items-center">
         <h2 className="text-sm mb-[0.875rem]">
            Enter your email and password to register.
         </h2>
         <input
            onChange={changeInput}
            ref={nameRef}
            className={`w-[20rem]  mb-[1.5rem] border-solid border-gray-400 border-2 rounded-md outline-none py-[0.75rem] pl-[0.8rem] ${
               nameError ? "border-red-800" : "border-gray-400"
            }`}
            type="text"
            placeholder="User Name"
         />
         {nameError && nameError ? (
            <span className="text-red-800 mt-[-1rem] mb-[0.5rem]">
               Please enter Username
            </span>
         ) : (
            ""
         )}
         <input
            onChange={changeInputEmail}
            ref={emailRef}
            className={`w-[20rem]  mb-[1.5rem] border-solid border-gray-400 border-2 rounded-md outline-none py-[0.75rem] pl-[0.8rem] ${
               emailError ? "border-red-800" : "border-gray-400"
            }`}
            type="text"
            placeholder="Enter your email address"
         />
         {emailError && emailError ? (
            <span className="text-red-800 mt-[-1rem] mb-[0.5rem]">
               Please enter your Email
            </span>
         ) : (
            ""
         )}
         <input
            onChange={changeInputPassword}
            ref={passwordRef}
            className={`w-[20rem]  mb-[1.5rem] border-solid border-gray-400 border-2 rounded-md outline-none py-[0.75rem] pl-[0.8rem] ${
               passwordError ? "border-red-800" : "border-gray-400"
            }`}
            type="password"
            placeholder="Enter your Password"
         />
         {passwordError && passwordError ? (
            <span className="text-red-800 mt-[-1rem] mb-[0.5rem]">
               Please enter Password
            </span>
         ) : (
            ""
         )}
         <input
            onChange={changeInputConfirm}
            ref={cofirmRef}
            className={`w-[20rem]  mb-[1.5rem] border-solid border-gray-400 border-2 rounded-md outline-none py-[0.75rem] pl-[0.8rem] ${
               confirmError || confrimCorrect
                  ? "border-red-800"
                  : "border-gray-400"
            }`}
            type="password"
            placeholder="Enter again Password"
         />
         {confirmError && confirmError ? (
            <span className="text-red-800 mt-[-1rem] mb-[0.5rem]">
               Please enter again Password
            </span>
         ) : (
            ""
         )}
         {confrimCorrect && confrimCorrect ? (
            <span className="text-red-800 mt-[-1rem] mb-[0.5rem]">
               Please enter correct Password
            </span>
         ) : (
            ""
         )}
         <Button
            onClick={registrButtonClick}
            classes="hover:bg-primaryDark text-white rounded-md bg-primary w-[20rem] py-[0.88rem] "
         >
            Registr
         </Button>
      </div>
   );
}
