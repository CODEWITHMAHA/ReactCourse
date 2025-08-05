import { useReducer } from "react";

const UseReducer = () => {
  const reducer = (state, action) => {
    console.log(state, action);
    if(action.type === "INCREMENT") {
      return state + 1;
    }
    if(action.type === "DECREMENT") {
      return state - 1;
    }
    

  };
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div className="flex flex-col items-center justify-center h-lvh text-4xl">
      <h1>Hello from useReducer Hook</h1>
      <h2>{count}</h2>
      <button className="bg-green-500 px-2 py-1 m-1 cursor-pointer rounded" onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button className="bg-red-600 px-2 py-1 m-1 cursor-pointer rounded" onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default UseReducer;
