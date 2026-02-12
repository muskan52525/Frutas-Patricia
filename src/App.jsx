import Header from "../src/components/Header.jsx";
import Footer from "../src/components/Footer.jsx";
import Production from "./pages/producao.jsx";
import Distribution from "./pages/distribuicao.jsx";
import Auction from "./pages/Auction.jsx";
import Brands from "./pages/marcas.jsx";
import Job from "./pages/Job.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Ethics from "./pages/Ethics.jsx";
import Contact from "./pages/Contact.jsx";
import Support from "./pages/Support.jsx";
import Empresa from "./pages/Empresa";
import Produtos from "./pages/Produtos.jsx";
import ScrollToTop from "./components/ScrollToTop";

import { Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/producao" element={<Production />} />
        <Route path="/marcas" element={<Brands />} />
        <Route path="/distribuicao" element={<Distribution />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/contactos" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/códigos-de-conduta" element={<Ethics />} />
        <Route path="/support" element={<Support />} />
        <Route path="/recrutamento" element={<Job />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
