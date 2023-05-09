import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddSubway() {
  const [name, setName] = useState("");
  const [sixInch, setSixInch] = useState();
  const [footLong, setFootLong] = useState();
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const subway = {
      name,
      image,
      description,
      category,
      prices: {
        sixInch: sixInch,
        footLong: footLong,
      },
    };
  }
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h2 style={{ fontSize: "40px" }}>Admin Panel</h2>

          <ul className="adminFunctions">
            <li>
              <Link to="/admin/userslist">Users List</Link>
            </li>
            <li>
              <Link to="/admin/subwaylist">Subway List</Link>
            </li>
            <li>
              <Link to="/admin/addsubway">Add New Subway</Link>
            </li>
            <li>
              <Link to="/admin/orderslist">Orders List</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="adminFormDiv">
        <h2 style={{ fontSize: "30px" }} className="adminHead text-center">
          Add Subway
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="six inch varient price"
            value={sixInch}
            onChange={(e) => {
              setSixInch(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="foot-long varient price"
            value={footLong}
            onChange={(e) => {
              setFootLong(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="image url"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
            // review image field
          />
          <button type="submit" className="btn">
            Add Subway
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddSubway;
