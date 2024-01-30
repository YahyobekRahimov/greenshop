import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import data from "/data/blog.posts.json";
import TrackHeader from "./TrackHeader";
import OrderDetails from "./OrderDetails";
import Products from "../CheckOut/Products";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 580,
  Height: "90vh",
  bgcolor: "background.paper",
  borderBottom: "10px solid #46A358",
  boxShadow: 24,
};

const stil = {
  color: "#fff",
  fontSize: "16px",
  textTransform: "capitalize",
};

const OrderTrack = ({ open, setOpen, handleClose }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <TrackHeader handleClose={handleClose} />
            <OrderDetails />
            <div className="px-11  mt-2 max-h-40 overflow-y-auto">
              {data &&
                data.map((item) => (
                  <Products
                    key={item.id}
                    product={item}
                    quantity={item.quantity}
                  />
                ))}
            </div>
            <div className="border-b-2">
              <div className="flex ml-36 gap-52 mb-2 text-textPrimary">
                <p className="text-[0.938rem] font-normal">Shipping</p>
                <span className="inline-block text-lg font-medium">$16.00</span>
              </div>
              <div className="flex ml-36 gap-52 text-textPrimary  pb-[20px]">
                <p className="text-base font-bold">Total</p>
                <span className="inline-block text-primary">$2,699.00</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col text-center pt-4 gap-6 items-center justify-center pb-12">
            <p>
              Your order is currently being processed. You will receive an order
              confirmation email shortly with the expected delivery date for
              your items.
            </p>

            <Button variant="contained" sx={stil}>
              Track your order
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default OrderTrack;
