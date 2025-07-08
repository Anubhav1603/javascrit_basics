import { useRef } from "react";
export const ColorChange = () => {
  const inputData = useRef();
  const changeback = () => {
    inputData.current.style.background = "blue";
  };
  return (
    <>
      <h1>Example of useRef</h1>
      <input type="text" ref={inputData} />
      <button onClick={changeback}>Change Background</button>
    </>
  );
};
