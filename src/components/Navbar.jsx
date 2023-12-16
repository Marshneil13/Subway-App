import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { logoutUser } from "../actions/userActions";
import { getUserCart } from "../actions/cartActions";
// imported to access the state of the cartReducer from the Navbar

function Navbar() {
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const userCartState = useSelector((state) => state.getUserCartReducers);
  const { currentUser } = userState;
  const { cartItems } = userCartState;
  console.log("Navbar USer", currentUser);
  const dispatch = useDispatch();
  //dispatch is a synchronous

  useEffect(() => {
    if (currentUser.email) dispatch(getUserCart(currentUser?.email));
  }, []);

  return (
    <div className="navDiv">
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="/">
          SANDY<span className="navbar-brand-span">SUBWAY</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {currentUser?.name ? (
              <div className="dropdown">
                <button
                  className="dropdown-btn dropdown-toggle"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {currentUser?.name}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="/orders">
                    Orders
                  </a>
                  {currentUser?.isAdmin && (
                    <a className="dropdown-item" href="/admin">
                      Admin Panel
                    </a>
                  )}
                  <a
                    className="dropdown-item"
                    href="/login"
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    <li>Logout</li>
                  </a>
                </div>
              </div>
            ) : (
              <li className="nav-item">
                <a className="nav-link login-link" href="/login">
                  Login
                </a>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" href="/cart">
                <button className="cart-btn">
                  <FaShoppingCart className="cart-icon" />
                  {` ${cartState.cartItems.length}`}
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
