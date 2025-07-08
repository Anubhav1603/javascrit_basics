import { useReducer } from "react";

export const BetterCount = () => {
  const InitialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "Increment": {
        return { count: state.count + 1 };
      }
      case "Decrement": {
        return { count: state.count - 1 };
      }
      default: {
        return state;
      }
    }
  };
  const [state, dispatch] = useReducer(reducer, InitialState);
  return (
    <>
      <br />
      <br />
      <br />
      <h1>Example of useReducer</h1>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "Increment" })}>+</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>-</button>
    </>
  );
};
