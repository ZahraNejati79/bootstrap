import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import SingleItemPage from "./pages/SingleItemPage";
import CartPage from "./pages/CartPage";
import CartProvider from "./Context/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/loginPage";
import SingnupPage from "./pages/SingnupPage";
function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/singleitem/:id" element={<SingleItemPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SingnupPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
