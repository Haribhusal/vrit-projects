import React from "react";
import Child from "./Child";

const Parent = () => {
  return (
    <div className="bg-yellow-400">
      Parent
      <Child name="Bikash" bgColor="red" isMarried="true" />
      <Child name="Ramesh" bgColor="green" isMarried="false" />
      <Child name="Ram" bgColor="blue" isMarried="false" />
      <Child name="Bineet" bgColor="purple" isMarried="true" />
    </div>
  );
};

export default Parent;
