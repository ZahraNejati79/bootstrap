import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import SingleItemPage from "./pages/SingleItemPage";
import CartPage from "./pages/CartPage";
import CartProvider from "./Context/CartProvider";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/singleitem/:id" element={<SingleItemPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
