import logo from "./logo.svg";
import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { BrowserRouter, Route, Link, Switch, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Payment from "./components/Payment";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/cart" exact element={<CartPage />} />
          <Route path="/checkout" exact element={<Payment />} />
          <Route path="/register" exact element={<RegisterPage />} />
          <Route path="/login" exact element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
