import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createuser } from "../features/userDetailSlice";
import {  useNavigate } from 'react-router-dom'

const Create = () => {
  const [users, setUsers] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const getData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users);
    dispatch(createuser(users));
    navigate("/read")

  };

  return (
    <>
    <h1>Fill the data</h1>
      <div className="container form-ref w-50">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={getData}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={getData}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={getData}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="number"
              name="age"
              className="form-control"
              onChange={getData}
            />
          </div>
          <div class="form-check">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={getData}
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
              onChange={getData}
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

export default Create;
