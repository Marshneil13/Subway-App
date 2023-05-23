import logo from "./logo.svg";
import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Payment from "./components/Payment";
import OrdersPage from "./pages/OrdersPage";
import AdminPage from "./pages/AdminPage";
import { useSelector } from "react-redux";
import UsersList from "./pages/Admin/UsersList";
import SubwayList from "./pages/Admin/SubwayList";
import OrdersList from "./pages/Admin/OrdersList";
import AddSubway from "./pages/Admin/AddSubway";
import Success from "./components/Success";
import SuccessPage from "./pages/SuccessPage";
import EditSubway from "./pages/Admin/EditSubway";
import Footer from "./components/Footer";

function App() {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  console.log("USER MAIN", currentUser);
  console.log("USER is ADMIN", currentUser?.isAdmin);
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/cart" exact element={<CartPage />} />
          <Route path="/register" exact element={<RegisterPage />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/orders" exact element={currentUser?.name ? <OrdersPage /> : <Navigate to="/login"/>} />
          <Route
            path="/ordersuccess"
            exact
            element={
              currentUser?.name ? <SuccessPage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/admin"
            element={currentUser?.isAdmin ? <UsersList /> : <Navigate to="/" />}
          />
          <Route path="/admin/userslist" exact element={currentUser?.isAdmin ? <UsersList /> : <Navigate to="/" />} />
          <Route path="/admin/subwaylist" exact element={currentUser?.isAdmin ? <SubwayList /> : <Navigate to="/" />} />
          <Route path="/admin/orderslist" exact element={currentUser?.isAdmin ? <OrdersList /> : <Navigate to="/" />} />
          <Route path="/admin/addsubway" exact element={currentUser?.isAdmin ? <AddSubway /> : <Navigate to="/" />} />
          <Route
            path="/admin/editsubway/:subwayid"
            exact
            element={currentUser?.isAdmin ? <EditSubway /> : <Navigate to="/" />}
          />
          {/* we are not providing exact prop to the admin screen as there will be nested routes inside it */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
