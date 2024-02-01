import Container from "./components/Container";
import {
   BrowserRouter,
   Routes,
   Route,
   Router,
   ScrollRestoration,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import ProductView from "./pages/ProductView";
import ProductCart from "./pages/Shop/CartSummary/ProductCart";
import ProductCheckout from "./pages/Shop/CheckOut/ProductCheckout";
import Shop from "./pages/Shop/Shop";
import PlantCare from "./pages/PlantCare";
import Blogs from "./pages/Blogs/Blogs";
import FindMore from "./pages/Home/FindMore";
import ScrollToTopOnNavigation from "/src/JavaScript/ScrollToTopOnNavigation.js";
import Wishlist from "./pages/Shop/Wishlist/Wishlist";
import Profile from "./pages/Profile/Profile";
import ContactUs from "./pages/ContactUs/ContactUs";
import About from "./pages/About/About";

function App() {
   return (
      <BrowserRouter>
         <Header />
         <ScrollToTopOnNavigation />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop/:id" element={<ProductView />} />
            <Route path="/shop/cart" element={<ProductCart />} />
            <Route
               path="/shop/checkout"
               element={<ProductCheckout />}
            />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />}>
               <Route
                  path="/blogs/:category"
                  element={<Blogs />}
               ></Route>
            </Route>
            <Route path="/shop/wishlist" element={<Wishlist />} />
            <Route path="/profile" element={<Profile />} />
         </Routes>
         <Footer />
      </BrowserRouter>
   );
}

export default App;
