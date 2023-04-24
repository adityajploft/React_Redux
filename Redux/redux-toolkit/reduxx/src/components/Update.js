import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { upDateUser } from "../features/userDetailSlice";

const Updata = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [updateData, setUpdateData] = useState();
  const Users = useSelector((state) => state.app.user);

  useEffect(() => {
    if (id) {
      const singleUser = Users.filter((element) => element.id === id);
      setUpdateData(singleUser[0]);
    }
  }, []);

  console.log(updateData);
  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };


  const handleUpdata = (e) => {
    e.preventDefault();
    dispatch(upDateUser(updateData));
    navigate("/read")
  };

  return (
    <>
      <h1>Updata the data</h1>
      <div className="container form-ref w-50">
        <form onSubmit={handleUpdata}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={updateData && updateData.name}
              onChange={newData}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={updateData && updateData.email}
              onChange={newData}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={updateData && updateData.password}
              onChange={newData}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="number"
              name="age"
              className="form-control"
              value={updateData && updateData.age}
              onChange={newData}
            />
          </div>
          <div class="form-check">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              checked={updateData && updateData.gender === "male"}
              onChange={newData}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Male
            </label>
          </div>
          <div class="form-check">
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              checked={updateData && updateData.gender === "female"}
              onChange={newData}
            />
            <label class="form-check-label" for="flexRadioDefault2">
              female
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Updata;
