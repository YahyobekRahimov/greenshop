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

   const loginWindowOpen = useSelector(
      (state) => state.loginWindowSlice
   );
   console.log(loginWindowOpen);
   const dispatch = useDispatch();

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
                  </div>
               </Box>
            </Fade>
         </Modal>
      </div>
   );
}
