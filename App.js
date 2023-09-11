import './pages/Main';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main.js";
import Kategori from "./pages/Kategori";
import Urunler from "./pages/Urunler";
import Evtekstili from "./pages/Evtekstili";
import Dekorasyon from "./pages/Dekorasyon"
import Mobilya from "./pages/Mobilya"
import Bebetekstili from "./pages/Bebetekstili"
import İnsaat from "./pages/İnsaatMalzemeleri"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Kategori" element={<Kategori />}></Route>
        <Route path="/Urunler" element={<Urunler />}></Route>
        <Route path="/evtekstili" element={<Evtekstili />}></Route>
        <Route path="/bebetekstili" element={<Bebetekstili />}></Route>
        <Route path="/mobilya" element={<Mobilya />}></Route>
        <Route path="/dekorasyon" element={<Dekorasyon />}></Route>
        <Route path="/insaatmalzemeleri" element={<İnsaat />}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
