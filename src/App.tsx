import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Talks from "./pages/Talks";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/talks" element={<Talks />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
