import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const registerState = useSelector((state) => state.registerUserReducer);
  const { loading, success, error } = registerState;

  const dispatch = useDispatch();
  function register() {
    if (password !== confirm) {
      alert("Passwords do not match");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log("USER registered", user);

      // dispatch(registerUser(user));
      registerUser(dispatch, user);
    }
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 shadow p-3 mb-5 bg-white rounded">
          {loading && <Loader />}
          {success && <Success success="You have registered successfully!" />}
          {error && <Error error="Email already exists" />}
          <h1 className="mb-3" style={{ fontSize: "35px" }}>
            Register
          </h1>
          <div>
            <input
              type="text"
              required
              placeholder="name"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
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
            <input
              type="password"
              required
              placeholder="confirm password"
              className="form-control"
              value={confirm}
              onChange={(e) => {
                setConfirm(e.target.value);
              }}
            />
            <button className="btn mt-3" onClick={register}>
              REGISTER
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <a href="/login">Already have an account?</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
