import { useCallback, useState } from "react";
import { Header } from "./header";
export const Callback = () => {
  const [counter, setCounter] = useState(0);
  const newfn = useCallback(() => {}, []);
  return (
    <>
      <br />
      <br />
      <br />
      <h1>Example of useCallback</h1>
      <Header newfn={newfn} />
      Counter {counter}
      <button onClick={() => setCounter(counter + 1)}>++increment</button>
    </>
  );
};
