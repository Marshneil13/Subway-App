import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addSubway } from "../../actions/subwayActions";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import Success from "../../components/Success";

function AddSubway() {
  const [name, setName] = useState("");
  const [sixInch, setSixInch] = useState("");
  const [footLong, setFootLong] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const addSubwayState = useSelector((state) => state.AddSubwayReducers);
  const { success, error, loading } = addSubwayState;
  function handleSubmit(e) {
    let IconUrl =
      category === "veg"
        ? "https://i.ibb.co/nPRDxJH/icons8-vegetarian-food-symbol-48.png"
        : "https://i.ibb.co/wY9dHkY/icons8-non-vegetarian-food-symbol-48.png";
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
      icon: IconUrl,
    };
    console.log("Added Subway", subway);
    try {
      dispatch(addSubway);
      console.log("DISPATCH SUCCESSFUL");
    } catch (error) {
      console.log("DISPATCH ERROR", error);
    }
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
        {loading && <Loader />}
        {success && <Success success={"New subway added successfully"} />}
        {error && <Error error={"Something went wrong"} />}
        <form onSubmit={handleSubmit}>
          <input
            required
            className="form-control"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            required
            className="form-control"
            type="number"
            placeholder="six inch varient price"
            value={sixInch}
            onChange={(e) => {
              setSixInch(e.target.value);
            }}
          />
          <input
            required
            className="form-control"
            type="number"
            placeholder="foot-long varient price"
            value={footLong}
            onChange={(e) => {
              setFootLong(e.target.value);
            }}
          />
          <input
            required
            className="form-control"
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <input
            required
            className="form-control"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <input
            required
            className="form-control"
            type="text"
            placeholder="image url"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
            // review image field
          />
          <button type="submit" className="btn" style={{ marginTop: "20px" }}>
            Add Subway
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddSubway;
