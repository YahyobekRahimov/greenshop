import Container from "./components/Container";
import {
   BrowserRouter,
   Routes,
   Route,
   Router,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductView from "./pages/ProductView";
import ProductCart from "./pages/ProductCart";
import ProductCheckout from "./pages/ProductCheckout";
import MyAccount from "./pages/MyAccount";

function App() {
   return (
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route
               path="/shop/product/:id"
               element={<ProductView />}
            />
            <Route path="/shop/cart" element={<ProductCart />} />
            <Route
               path="/shop/checkout"
               element={<ProductCheckout />}
            />
         </Routes>
         <Footer />
      </BrowserRouter>
   );
}

export default App;
