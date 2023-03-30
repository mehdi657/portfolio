import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";
import Projects from "./pages/Projects";
import "animate.css";
import "animate.css/animate.min.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/APropos" element={<APropos />} />
      </Routes>
    </Router>
  );
}

export default App;
