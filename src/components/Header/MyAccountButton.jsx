import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Divider, IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItemBase from "@mui/material/MenuItem";

import { deleteCookie, getCookie } from "../../JavaScript/Cookies";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import UserIcon from "/src/images/user.svg?react";
import ShoppingBagIcon from "/src/images/shopping-bag.svg?react";

import { styled } from "@mui/system";

const MenuItem = styled(MenuItemBase)(
   ({ theme }) => `
   display: flex;
   gap: 1rem;
   padding-left: 1rem;
   font-family: "Cera Pro";
`
);

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
   const [username, email] = getCookie("userInfo").split("|Divider|");

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
            sx={{
               display: "flex",
               flexDirection: "column",
               position: "relative",
            }}
         >
            <AccountCircleIcon fontSize="large" />
            <span className="text-[0.8rem] absolute bottom-[-0.1rem]">
               {username}
            </span>
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
            <MenuItem onClick={handleProfileClick}>
               <UserIcon className="h-[1.4rem]" />
               <span>Profile</span>
            </MenuItem>
            <MenuItem onClick={handleMyAccountClick}>
               <ShoppingBagIcon className="h-[1.4rem]" />
               My orders
            </MenuItem>
            <MenuItem onClick={handleMyAccountClick}>
               Support
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
         </Menu>
      </div>
   );
}
