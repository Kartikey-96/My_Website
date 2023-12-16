import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Product from "./pages/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import UserForm from "./pages/UserForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/form" element={<UserForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
