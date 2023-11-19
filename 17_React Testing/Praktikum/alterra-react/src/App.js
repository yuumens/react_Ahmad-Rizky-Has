import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateProducts from "./components/AddProducts/CreateProducts";
import Landingpage from "./components/Home/Landingpage";
import Navbar from "./components/Navbar/Navbar";
import TablesDetails from "./components/Data/TablesDetails";
import PrivateRoutes from "./components/Routes/PrivateRoutes";
import LoginPage from "./components/Login/LoginPage";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route
            exact
            path="/createproduct"
            element={
              <PrivateRoutes>
                <CreateProducts />
              </PrivateRoutes>
            }
          ></Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product-details/:id" element={<TablesDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
