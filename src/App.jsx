import './App.css';
import Navigation from "../components/Navigation/Navigation"; // Nawigacja
import Background from "../components/Navigation/Background"; // Twoje tło
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation />  {/* Możesz usunąć, jeśli nie chcesz nawigacji */}
      <Background isLoginPage={true} />  {/* Twoje tło */}
    </Router>
  );
}

export default App;
