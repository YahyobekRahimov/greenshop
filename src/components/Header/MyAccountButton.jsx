import { useState } from "react";

import { Divider, IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { deleteCookie } from "../../JavaScript/Cookies";
import { Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function MyAccountButton() {
   const [anchorEl, setAnchorEl] = useState(null);
   const open = Boolean(anchorEl);
   const navigate = useNavigate();
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   function handleProfileClick() {
      handleClose();
   }
   function handleMyAccountClick() {
      handleClose();
   }

   function handleLogout() {
      handleClose();
      deleteCookie("userInfo");
      navigate("/");
   }
   return (
      <div>
         <IconButton
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            variant="contained"
            size="large"
         >
            <AccountCircleIcon fontSize="large" />
         </IconButton>
         <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
               vertical: "bottom",
               horizontal: "left",
            }}
            transformOrigin={{
               vertical: "top",
               horizontal: "left",
            }}
         >
            <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
            <MenuItem onClick={handleMyAccountClick}>
               My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
         </Menu>
      </div>
   );
}
