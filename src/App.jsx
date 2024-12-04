import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/page";
import Navbar from "./assets/components/navbar/index";
import Footer from "./assets/components/footer/index";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
