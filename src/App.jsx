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
import ProductCart from "./pages/Shop/ProductCart";
import ProductCheckout from "./pages/ProductCheckout";
import MyAccount from "./pages/MyAccount";
import Shop from "./pages/Shop/Shop";
import PlantCare from "./pages/PlantCare";
import Blogs from "./pages/Blogs";
import FindMore from "./pages/Home/FindMore";
import ScrollToTopOnNavigation from "/src/JavaScript/ScrollToTopOnNavigation.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTopOnNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/:id" element={<ProductView />} />
        <Route path="/shop/cart" element={<ProductCart />} />
        <Route path="/shop/checkout" element={<ProductCheckout />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/plant-care" element={<PlantCare />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
