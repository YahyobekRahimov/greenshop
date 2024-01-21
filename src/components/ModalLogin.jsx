import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LoginButton from "./Header/LoginButtons";
import Login from "./Login";
import { useState } from "react";
import Registr from "./Registr";
import { TrendingUpRounded } from "@mui/icons-material";

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 500,
   height: 600,
   bgcolor: "background.paper",
   boxShadow: 24,
   borderRadius: 4,
};

export default function TransitionsModal() {
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const [loginspan, setLoginSpan] = useState();
   const [registrspan, setRegistrSpan] = useState(false);
   

   function clickSpanLogin() {
      setLoginSpan(true);
   }

   function clickSpanRegistr() {
      setLoginSpan(false);
   }
   return (
      <div>
         <Button onClick={handleOpen}>
            <LoginButton />
         </Button>
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
                  <div className="flex flex-col gap-14 px-[6.25rem] py-[3.125rem]">
                     <h1 className="cursor-pointer text-center text-xl font-medium">
                        <div className="flex justify-center items-center gap-3">
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
                           <span>|</span>
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
                        </div>
                     </h1>
                     {loginspan ? <Login /> : <Registr />}
                  </div>
               </Box>
            </Fade>
         </Modal>
      </div>
   );
}
