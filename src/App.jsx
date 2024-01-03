import Header from "./components/Header";
import Accueil from "./pages/Accueil";
import Projects from "./pages/Projects";
import APropos from "./pages/APropos";
import "animate.css/animate.min.css";

function App() {
  return (
    <main>
      <Header />
      <Accueil />
      <Projects />
      <APropos />
    </main>
  );
}

export default App;
