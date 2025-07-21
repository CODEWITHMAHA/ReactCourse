import { useState } from "react";

const State = () => {
  const [count,setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(()=> count+1);
    console.log(count);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleButtonClick}>Increment</button>
    </>
  );
};

export default State;
