import React from "react";

function Error({ error }) {
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="alert alert-danger" role="alert" style={{}}>
        {error}
      </div>
    </div>
  );
}

export default Error;
