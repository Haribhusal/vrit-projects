import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Hari");
  const [visible, setVisible] = useState(false);

  return (
    <div>
      This is counter component {number} {name}
      <hr />
      {visible && (
        <div className="banner bg-blue-800 p-10 m-10 text-white text-5xl rounded-lg">
          This is Banner
        </div>
      )}
      <button
        className="bg-red-600 text-white p-5"
        onClick={() => setVisible(!visible)}
      >
        Hide this Banner
      </button>
      <button onClick={() => setName("Ramesh")}>Update Name</button>
      <button onClick={() => setNumber(number + 1)}>Increase Value</button>
    </div>
  );
}

export default Counter;
