import { useState, useMemo } from "react";

export const CalCulation = () => {
  const [value, setValue] = useState(0);
  const [counter, setCounter] = useState(0);
  const cubeNum = (num) => {
    console.log("Cube calculated");
    return Math.pow(num, 3);
  };
  const result = useMemo(() => cubeNum(value), [value]);
  return (
    <>
      <h1>Example of useMemo</h1>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>The cube of this number is {result}</p>
      <br />
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </>
  );
};
