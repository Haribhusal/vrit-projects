import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const [calc, setCalc] = useState(1);

  useEffect(() => {
    setCalc((x) => x + 2);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <h2>{calc}</h2>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
    </div>
  );
}

export default Timer;
