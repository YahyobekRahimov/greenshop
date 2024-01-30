import { IconButton } from "@mui/material";
import HeartIcon from "/src/images/likeIcon.svg?react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
   "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
      backgroundColor: "rgb(239 68 68)",
      color: "white",
   },
}));

export default function LikedProducts() {
   const navigate = useNavigate();
   const likedProductsLength = useSelector(
      (state) => state.likedProducts.length
   );

   return (
      <IconButton onClick={() => navigate("/shop/wishlist")}>
         <StyledBadge badgeContent={likedProductsLength}>
            <HeartIcon className="w-6 h-6 stroke-black stroke-[2px]" />
         </StyledBadge>
      </IconButton>
   );
}
