import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Inquiry from "./pages/Inquiry";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}
