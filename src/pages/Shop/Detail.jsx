import { Button } from "@mui/base";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import products from "../../../data/blog.posts.json";
import { AddShoppingCart } from "@mui/icons-material";

const Detail = () => {
  const handleBuyNow = (productId) => {
    console.log(`Buy Now clicked for Product ${productId}`);
  };

  const handleAddToCart = (productId) => {
    console.log(`Add to Cart clicked for Product ${productId}`);
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
      }}
    >
      {products.map(
        (product) =>
          products && (
            <Card key={product.id} style={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Price: ${product.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                padding="16px"
              >
                <IconButton
                  onClick={() => handleAddToCart(product.id)}
                  color="primary"
                >
                  <AddShoppingCart />
                </IconButton>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleBuyNow(product.id)}
                >
                  Buy Now
                </Button>
              </Box>
            </Card>
          )
      )}
    </div>
  );
};

export default Detail;
