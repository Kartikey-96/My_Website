import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Product from "./pages/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/product" Component={Product} />
        <Route path="/login" Component={Login} />
        <Route path="/contact" Component={ContactPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
