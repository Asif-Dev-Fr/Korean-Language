import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import NavbarComponent from "./components/NavbarComponent";
import Hangul from "./pages/hangul/Hangul";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/hangul" element={<Hangul />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
