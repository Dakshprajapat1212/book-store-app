import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutHero from "./pages/About";
import Navbar from "./components/Navbar";
import CartDrawer from "./components/CartDrawer";
import Toast from "./components/Toast";
import "./App.css";
import Books from "./pages/Books";
import Contact from "./pages/Contact";
import OrdersPage from "./pages/order";
import Cart from "./pages/Cart";
import BookDetails from "./pages/BookDetails";

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <Navbar />

      {/* Global Components */}
      <CartDrawer />
      <Toast />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutHero />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
