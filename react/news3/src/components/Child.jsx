import React from "react";

const Child = ({ name, bgColor, isMarried }) => {
  console.log(isMarried);
  console.log(bgColor);
  return (
    <div style={{ backgroundColor: bgColor }} className=" my-3">
      {name}
      {isMarried === "true" ? "Married" : "Not Married"}
    </div>
  );
};

export default Child;
