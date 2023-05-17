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

function App() {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const cartState = useSelector((state) => state.cartReducer);

  let cart = currentUser.cart ? currentUser.cart : cartState.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cart));

  console.log("USER MAIN", currentUser);
  console.log("USER is ADMIN", currentUser.isAdmin);
  return (
    <div className="App">
      <Navbar cart={cart} />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/cart" exact element={<CartPage />} />
          <Route path="/register" exact element={<RegisterPage />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/orders" exact element={<OrdersPage />} />
          <Route path="/ordersuccess" exact element={<SuccessPage />} />
          <Route
            path="/admin"
            element={currentUser.isAdmin ? <UsersList /> : <Navigate to="/" />}
          />
          <Route path="/admin/userslist" exact element={<UsersList />} />
          <Route path="/admin/subwaylist" exact element={<SubwayList />} />
          <Route path="/admin/orderslist" exact element={<OrdersList />} />
          <Route path="/admin/addsubway" exact element={<AddSubway />} />
          <Route
            path="/admin/editsubway/:subwayid"
            exact
            element={<EditSubway />}
          />
          {/* we are not providing exact prop to the admin screen as there will be nested routes inside it */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
