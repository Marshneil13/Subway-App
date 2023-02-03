import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Loader from "../components/Loader";
import Error from "../components/Error";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginState = useSelector((state) => state.loginUserReducer);
  const dispatch = useDispatch();
  const { loading, error } = loginState;

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
      // the above line redirects to the homepage
    }
  });
  function login() {
    const user = {
      email,
      password,
    };
    dispatch(loginUser(user));
  }
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 shadow p-3 mb-5 bg-white rounded">
          <h1 className="mb-3" style={{ fontSize: "35px" }}>
            Login
          </h1>
          {loading && <Loader />}
          {error && <Error error="Invalid Credentials" />}
          <div>
            <input
              type="email"
              required
              placeholder="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              required
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className="btn mt-3" onClick={login}>
              LOGIN
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <a href="/register">Don't have an account?</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
