import { useEffect, useState } from "react";
export const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 2000);
  });
  return (
    <>
      <h1>useEffect Example</h1>
      <p>Auto Incremement {count}</p>
    </>
  );
};
