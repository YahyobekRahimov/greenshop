import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import LoginButton from "./Header/LoginButtons";
import Login from "./Login";
import { useState } from "react";
import Register from "./Register";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoginWindow } from "../redux/loginWindowSlice";

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 500,
   maxHeight: "600px",
   height: "100%",
   bgcolor: "background.paper",
   boxShadow: 24,
   borderRadius: 4,
};

export default function TransitionsModal() {
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
<<<<<<< HEAD
   const [loginspan, setLoginSpan] = useState();
   const [registrspan, setRegistrSpan] = useState(false);
=======
   const loginWindowOpen = useSelector(
      (state) => state.loginWindowSlice
   );
   console.log(loginWindowOpen);
   const dispatch = useDispatch();
>>>>>>> 72b9f9eba1e157a7903fae53fcf298b7a50dae44

   return (
      <div>
         <div>
            <LoginButton handleOpen={handleOpen} />
         </div>
         <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
               backdrop: {
                  timeout: 500,
               },
            }}
         >
            <Fade in={open}>
               <Box sx={style}>
<<<<<<< HEAD
                  <div className="flex flex-col gap-14 px-[6.25rem]">
                     <h1 className="mt-[3rem] cursor-pointer  text-center text-xl font-medium">
                        <button
                           onClick={clickSpanLogin}
                           className={`button-link ${
                              loginspan
                                 ? "text-green-700"
                                 : "text-black"
                           }`}
                        >
                           Login
                        </button>
                        {" | "}
                        <button
                           onClick={clickSpanRegistr}
                           className={`button-link ${
                              loginspan
                                 ? "text-black"
                                 : "text-green-700"
                           }`}
                        >
                           Register
                        </button>
                     </h1>
                     {loginspan ? <Login /> : <Registr />}
=======
                  <div
                     className={`flex max-h-[600px] h-full flex-col justify-around px-[6.25rem] py-[3.125rem]`}
                  >
                     <div className="gap-5 flex flex-col w-full text-center text-xl font-medium">
                        <div className="flex justify-center items-center gap-3">
                           <Button
                              sx={{
                                 color: loginWindowOpen
                                    ? "var(--green-primary)"
                                    : "black",
                                 textTransform: "capitalize",
                                 fontFamily: "Cera Pro",
                                 fontSize: "1.3rem",
                              }}
                              variant="text"
                              onClick={() =>
                                 dispatch(toggleLoginWindow(true))
                              }
                           >
                              Login
                           </Button>
                           <span>|</span>
                           <Button
                              sx={{
                                 color: loginWindowOpen
                                    ? "black"
                                    : "var(--green-primary)",
                                 fontFamily: "Cera Pro",
                                 fontSize: "1.3rem",
                                 textTransform: "capitalize",
                              }}
                              variant="text"
                              onClick={() =>
                                 dispatch(toggleLoginWindow(false))
                              }
                           >
                              Register
                           </Button>
                        </div>
                        <h2 className="text-sm mb-[0.875rem]">
                           {loginWindowOpen
                              ? "Enter your username and password to login."
                              : "Please, enter a username, email and password to register"}
                        </h2>
                     </div>
                     <div>
                        {loginWindowOpen ? (
                           <Login setOpen={setOpen} />
                        ) : (
                           <Register setOpen={setOpen} />
                        )}
                     </div>
>>>>>>> 72b9f9eba1e157a7903fae53fcf298b7a50dae44
                  </div>
               </Box>
            </Fade>
         </Modal>
      </div>
   );
}
