import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, showUser } from "../features/userDetailSlice";
import Custom from "./Custom";

const Read = () => {
  const dispatch = useDispatch();
  const { user, loading, searchData } = useSelector((state) => state.app);
  const [id, setUseId] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  console.log(searchData)

  useEffect(() => {
    dispatch(showUser());
  }, []);

  console.log(user);

  if (loading) {
    return <h2>Loading..</h2>;
  }
  return (
    <>
      {showPopup && (
        <Custom id={id} showPopup={showPopup} setShowPopup={setShowPopup} />
      )}
      <h2>All Data</h2>

      {user &&

        user
          .filter((element) => {
            if (searchData.length === 0) {
              return element;
            } else {
             return element.name.toLowerCase().includes(searchData.toLowerCase());
            }
          })

          .map((element) => (
            <div key={element.id} class="card ">
              <div class="card-body">
                <h5 class="card-title">{element.name}</h5>
                <h5 class="card-title">{element.email}</h5>
                <h5 class="card-title">{element.gender}</h5>
                <p class="card-text"></p>

                <button
                  class="card-link"
                  onClick={() => [setUseId(element), setShowPopup(true)]}
                >
                  view
                </button>

                <Link to={`/edit/${element.id}`} class="card-link">
                  Edit
                </Link>

                <Link
                  onClick={() => dispatch(deleteUser(element.id))}
                  class="card-link"
                >
                  Delete
                </Link>
              </div>
            </div>
          ))}
    </>
  );
};

export default Read;
