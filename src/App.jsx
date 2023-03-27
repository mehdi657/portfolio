import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";
import Projects from "./pages/Projects";
import "animate.css";
import "animate.css/animate.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/APropos" element={<APropos />} />
      </Routes>
    </Router>
  );
}

export default App;
