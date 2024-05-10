import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/styles/style.css";
import LandingPage from "./pages/LandingPage";
import SearchCarPage from "./pages/SearchCarPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cars" element={<SearchCarPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
