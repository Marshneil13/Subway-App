import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Error({ error }) {
  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default Error;
