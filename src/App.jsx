import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Wishlist from "./Components/Wishlist";
import Items from "./Components/Items";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wish" element={<Wishlist />} />
        <Route path="/items" element={<Items />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
