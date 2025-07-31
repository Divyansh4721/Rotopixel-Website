import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Products from "./pages/Products.js";
import Profile from "./pages/Profile.js";
import Contact from "./pages/Contact.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
