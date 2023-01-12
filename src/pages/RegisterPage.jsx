import React from "react";
import { useState, useEffect } from "react";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  function register() {
    if (password != confirm) {
      alert("Passwords do not match");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log("USER registered", user);
    }
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5">
          <h1 className="mb-3" style={{ fontSize: "35px" }}>
            Register
          </h1>
          <form>
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
