import { useState } from "react";

const UseStateChallenge = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const handleIncrement = () => {
    // if(count >= 100)  return;  
    setCount(count + step);}

     const handleDecrement = () => {
    // if(count <= 0 )  return;  
    setCount(count - step);}

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full bg-blue-300 p-10 rounded-lg shadow-lg">
        <h1>useState Challenge</h1>
        <p>{count}</p>
        <label>step:</label>
        <input
          className="ml-5 p-4 border-1 border-white outline-none rounded-2xl"
          type="number"
          onChange={(e) => setStep(Number(e.target.value))}
          placeholder="Enter no"
        />
        <div className="grid grid-cols-3 gap-2 mt-5">
          <button
           onClick={ handleIncrement} disabled={count >= 100}
          className="bg-blue-500 text-white p-4 rounded-lg cursor-pointer hover:bg-blue-600">
            Increment
          </button>
          <button
          onClick={handleDecrement} disabled={count <= 0}
           className="bg-blue-500 text-white p-4 rounded-lg cursor-pointer hover:bg-blue-600">
            Decrement
          </button>
          <button
          onClick={()=>setCount(0)}
          className="bg-blue-500 text-white p-4 rounded-lg cursor-pointer hover:bg-blue-600">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseStateChallenge;
