import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Home />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
