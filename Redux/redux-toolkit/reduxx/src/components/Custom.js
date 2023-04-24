import React from "react";
import "./custom.css";
import { useSelector } from "react-redux";

const Custom = ({ id, setShowPopup }) => {
  const allUsers = useSelector((state) => state.app.user);

  const singleUser = allUsers.filter((element) => element.id === id);
  console.log(singleUser);

  return (
    <>
      <h1>Hello</h1>
      <div className="model">
        <div className="model-container">
          <button onClick={() => setShowPopup(false)}>Close</button>
          <h2>{id.name}</h2>
          <h3>{id.email}</h3>
          <h4>{id.age}</h4>
          <p>{id.gender}</p>
        </div>
      </div>
    </>
  );
};

export default Custom;

// import React from "react";
// import "./custom.css";
// import { useSelector } from "react-redux";

// const Custom = ({ id, showPopup, setShowPopup }) => {
//   const allUsers = useSelector((state) => state.app.user);

//   // const singleUser = allUsers.filter((element) => element.id === id);
//   // console.log(singleUser);

//   return (
//     <>
//       <h1>Hello</h1>
//       <div className="model">
//         <div className="model-container">
//           <button onClick={() => setShowPopup(false)}>Close</button>
//           <h2>{id.name}</h2>
//           <h3>{id.email}</h3>
//           <h4>{id.age}</h4>
//           <p>{id.gender}</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Custom;


