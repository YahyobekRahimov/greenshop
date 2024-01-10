import * as React from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import Search from "../../images/search.svg?react";
import ModalCard from "./ModalCard";
import Data from '../../../data/data.json'
import { useState, useEffect, useRef } from "react";

const Fade = React.forwardRef(function Fade(props, ref) {
   const {
      children,
      in: open,
      onClick,
      onEnter,
      onExited,
      ownerState,
      ...other
   } = props;
   const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
         if (open && onEnter) {
            onEnter(null, true);
         }
      },
      onRest: () => {
         if (!open && onExited) {
            onExited(null, true);
         }
      },
   });

   return (
      <animated.div ref={ref} style={style} {...other}>
         {React.cloneElement(children, { onClick })}
      </animated.div>
   );
});

Fade.propTypes = {
   children: PropTypes.element.isRequired,
   in: PropTypes.bool,
   onClick: PropTypes.any,
   onEnter: PropTypes.func,
   onExited: PropTypes.func,
   ownerState: PropTypes.any,
};

const style = {
   width: "70%",
   height: "70%",
   position: "absolute",
   top: "40%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   bgcolor: "background.paper",
   borderRadius: "1rem",
   boxShadow: 24,
   p: 4,
   background: "var(--soft-background)",
};

export default function SpringModal() {
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const ModalInputRef =useRef('');
   const [newData, setNewData] = useState([]);
 

   function ModulClick(e){
      if (!ModalInputRef.current.value) {
         return;
      }
      let searchValue = ModalInputRef.current.value.toLowerCase();
      let NewData = Data.filter((item) => {
         return item.name.toLowerCase().includes(searchValue);
      });
      setNewData(NewData);
   }
   useEffect(() => {
     setNewData([])
    }, [open]);
    
   return (
      <div>
         <Button className="hover:rounded-full" onClick={handleOpen}>
            <Search />
         </Button>
         <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
               backdrop: {
                  TransitionComponent: Fade,
               },
            }}
         >
            <Fade in={open}>
               <Box sx={style}>
                  <Typography
                     id="spring-modal-title"
                     variant="h6"
                     component="h2"
                     className="flex gap-4"
                  >
                     <input
                     ref={ModalInputRef} 
                     placeholder="What are looking for ?"
                        className="placeholder:text-gray-600 placeholder:tracking-widest text-2xl ml-5 w-[90%] p-3 text-[0.875rem] duration-200 border-gray-300 shadow-input focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:border-r-0 rounded-lg"
                        type="text"
                     />
                     <button onClick={ModulClick} className=" hover:bg-primaryDark bg-primary text-white text-2xl px-4 rounded-lg">Search</button>
                  </Typography>
                  <Typography
                     id="spring-modal-description"
                     sx={{ mt: 2 }}
                  >
                     <div className=" w-[98%] h-[29rem] overflow-auto mt-8 ml-5 ">
                        <ModalCard data={newData} />
                     </div>
                  </Typography>
               </Box>
            </Fade>
         </Modal>
      </div>
   );
}
