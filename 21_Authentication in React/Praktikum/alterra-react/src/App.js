import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Landingpage from "./components/Home/Landingpage";
import CreateProducts from "./components/Home/CreateProducts";
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
          <Route path="/createproduct" element={<CreateProducts />}></Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product-details/:id" element={<TablesDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
