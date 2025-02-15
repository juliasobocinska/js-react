import './App.css';
import Navigation from "../components/Navigation/Navigation";
import Background from "../components/Navigation/Background";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation />  
      {/*<Background isLoggedIn={true} /> */}
    <Background isLoginPage={true}/>
    </Router>
  );
}

export default App;
