import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { useRef, useState } from "react";

export default function Register({ setOpen }) {
   const usernameRef = useRef();

   const emailRef = useRef();

   const passwordRef = useRef();

   const confirmRef = useRef();

   const [nameError, setNameError] = useState("");
   const [emailError, setEmailError] = useState("");
   const [passwordError, setPasswordError] = useState("");
   const [confirmError, setConfirmError] = useState("");
   const [passwordMatch, setPasswordMatch] = useState("");

   function validate() {
      if (!usernameRef.current.value) {
         setNameError("Please, enter a username");
         return false;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (
         !emailRef.current.value ||
         !emailPattern.test(emailRef.current.value)
      ) {
         setEmailError("Please, enter a valid email");
         return false;
      }
      if (!passwordRef.current.value) {
         setPasswordError("Please, enter a password");
         return false;
      }
      if (!confirmRef.current.value) {
         setConfirmError("Please, confirm your password");
         return false;
      }
      if (passwordRef.current.value !== confirmRef.current.value) {
         setPasswordMatch("Passwords don't match");
         return false;
      } else if (
         passwordRef.current.value === confirmRef.current.value
      ) {
         setPasswordMatch("");
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
      <div className="flex flex-col items-center justify-center">
         <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col w-full mb-4">
               <div className="pt-4">
                  <TextField
                     fullWidth
                     type="text"
                     onChange={changeInput}
                     label="Username"
                     variant="outlined"
                     inputRef={usernameRef}
                  />
                  <span className="text-red-700">{nameError}</span>
               </div>
               <div className="pt-4">
                  <TextField
                     type="email"
                     fullWidth
                     onChange={changeInputEmail}
                     label="Enter your email address"
                     variant="outlined"
                     inputRef={emailRef}
                  />
                  <span className="text-red-700">{emailError}</span>
               </div>
               <div className="pt-4">
                  <TextField
                     fullWidth
                     type="password"
                     onChange={changeInputPassword}
                     label="Password"
                     variant="outlined"
                     inputRef={passwordRef}
                  />
                  <span className="text-red-700">
                     {passwordError}
                  </span>
               </div>
               <div className="pt-4">
                  <TextField
                     fullWidth
                     onChange={changeInputConfirm}
                     label="Confirm Password"
                     variant="outlined"
                     type="password"
                     inputRef={confirmRef}
                  />
                  <span className="text-red-700">{confirmError}</span>
                  <span className="text-red-700">
                     {passwordMatch}
                  </span>
               </div>
            </div>
            <Button
               type="submit"
               variant="contained"
               size="large"
               sx={{ width: "100%", marginTop: "2rem" }}
            >
               Register
            </Button>
         </form>
      </div>
   );
}
