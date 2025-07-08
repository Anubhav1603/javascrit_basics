import { useEffect, useLayoutEffect } from "react";

export const LayoutEffect = () => {
  useEffect(() => console.log("Message from useEffect", []));
  useLayoutEffect(() => console.log("Message from useLayoutEffect", []));

  return (
    <>
      <h1>Example of useLayoutEffect Hook</h1>
    </>
  );
};
