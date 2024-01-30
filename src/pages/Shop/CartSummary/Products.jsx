import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { SwiperSlide } from "swiper/react";

const Products = ({ product }) => {
  return (
    <div className="mb-16">
      <Card sx={{ width: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt={product.name}
          />
          <CardContent>
            <h1 className="text-sm">{product.name}</h1>
            <span className="text-primary pb-40">${product.price}</span>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Products;
