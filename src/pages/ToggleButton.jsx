import { useState } from "react";
const ToggleButton = () => {
  const [isOn, setIsOn] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const toggleButton = () => {
    setIsOn(!isOn);
  };
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div
      className={`flex justify-center items-center h-screen ${
        darkMode ? "bg-gray-800" : "bg-gray-200"
      }`}
    >
      <div
        onClick={() => {
          toggleButton();
          toggleDarkMode();
        }}
        className="bg-gray-300 rounded-full  px-14 py-3"
      >
        <button
          className={`font-bold text-2xl relative m-2 p-4 border-2 border-gray-400 outline-none rounded-full cursor-pointer`}
        >
          {isOn ? "Dark" : "Light"}
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;
