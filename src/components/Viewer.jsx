import React from "react";

const Viewer = ({ count }) => {
  return (
    <div>
      <h4>현재 카운트 :</h4>
      <h1 style={{ fontSize: "40px" }}>{count}</h1>
    </div>
  );
};

export default Viewer;
