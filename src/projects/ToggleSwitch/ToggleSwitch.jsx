import { useState } from "react";
import "./ToggleSwitch.css";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useEffect } from "react";
const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };
  const switchClass = isOn ? "on" : "off";
  const switchStyle = {
    backgroundColor: isOn ? "#3d2e6c" : "",
  };
  // Apply dark mode class to body element
  // This effect runs whenever darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-gray-800");
      document.body.classList.remove("bg-gray-200");
    } else {
      document.body.classList.add("bg-gray-200");
      document.body.classList.remove("bg-gray-800");
    }
    // Cleanup: remove both classes on unmount
    return () => {
      document.body.classList.remove("bg-gray-800", "bg-gray-200");
    };
  }, [darkMode]);

  return (
    <div className="h-screen w-full">
      <div
        className="toggle-switch"
        style={switchStyle}
        onClick={() => {
          handleToggleDarkMode();
          handleToggleSwitch();
        }}
      >
        <div className={`switch ${switchClass}`}>
          <span className="switch-state">
            {isOn ? (
              <MdDarkMode className="text-3xl" />
            ) : (
              <MdLightMode className="text-black text-3xl" />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
