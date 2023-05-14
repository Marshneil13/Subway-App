import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editSubway, getSubwayById } from "../../actions/subwayActions";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import Success from "../../components/Success";
import { Link } from "react-router-dom";

export default function EditSubway() {
  var url = window.location.href;
  var subwayId = url.split("/")[5];
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [sixInch, setSixInch] = useState(0);
  const [footLong, setFootLong] = useState(0);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const getSubwayByIdState = useSelector(
    (state) => state.getSubwayByIdReducers
  );
  const editSubwayState = useSelector((state) => state.editSubwayReducers);

  const { subway, error, loading } = getSubwayByIdState;
  const { editLoading, editSuccess, editError } = editSubwayState;

  useEffect(() => {
    if (subway) {
      if (subway._id === subwayId) {
        setName(subway.name);
        setDescription(subway.description);
        setCategory(subway.category);
        setSixInch(subway.prices[0]["six inch"]);
        setFootLong(subway.prices[0]["foot-long"]);
        setImage(subway.image);
      } else {
        dispatch(getSubwayById(subwayId));
      }
    } else {
      dispatch(getSubwayById(subwayId));
    }
  }, [subway, dispatch, subwayId]);

  function handleSubmit(e) {
    let IconUrl =
      category === "veg"
        ? "https://i.ibb.co/nPRDxJH/icons8-vegetarian-food-symbol-48.png"
        : "https://i.ibb.co/wY9dHkY/icons8-non-vegetarian-food-symbol-48.png";
    e.preventDefault();
    const editedSubway = {
      _id: subwayId,
      name,
      image,
      description,
      category,
      prices: {
        "six inch": sixInch,
        "foot-long": footLong,
      },
      icon: IconUrl,
    };
    console.log("Updated Subway", editedSubway);
    dispatch(editSubway(editedSubway));
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
        <h1>Edit Subway</h1>
        <h1>Subway Id = {subwayId}</h1>
        {loading && <Loader />}
        {editLoading && <Loader />}
        {editSuccess && <Success success={"Subway updated successfully"} />}
        {editError && <Error error={"Something went wrong"} />}

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
              setSixInch(parseInt(e.target.value));
            }}
          />
          <input
            required
            className="form-control"
            type="number"
            placeholder="foot-long varient price"
            value={footLong}
            onChange={(e) => {
              setFootLong(parseInt(e.target.value));
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
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
