import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home/home"
import Contact from "./components/contact/contact"
import Portfolio from "./components/porfolio/portfolio"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
