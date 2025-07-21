import { useState } from "react";
const LiftingTheStateUp = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputValue} />
    </div>
  );
};

const InputComponent = ({ inputValue, setInputValue }) => {
  // const [inputValue, setInputValue] = useState(""); Lift the state up
  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
};

const DisplayComponent = ({inputValue}) => {
  return (
    <>
      <h1>Display Component</h1>
      <p>Your name is: {inputValue} </p>
    </>
  );
};

export default LiftingTheStateUp;
