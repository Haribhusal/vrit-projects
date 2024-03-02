import React from "react";

const User = (props) => {
  console.log(props);
  return (
    <div
      className="flex items-center gap-4 bg-gray-200 my-3
           p-5 rounded-md border-2 border-gray-400"
    >
      <img src={""} alt="" className="h-16 w-16 rounded-full" />
      <div className="info">
        <h3 className="text-blue-600">{name}</h3>
        <p className="bg-blue-600 text-[10px] text-white rounded-sm inline-block px-2"></p>
      </div>
    </div>
  );
};

export default User;
