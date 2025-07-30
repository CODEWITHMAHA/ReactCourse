import { createContext } from "react";
import { useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleToggleTheme = () => {
    return setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const LightDark = () => {
  const { theme, handleToggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={`p-4 h-lvh w-lvw flex flex-col gap-2 justify-center items-center ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <h1 className={`${theme === "dark" ? "text-white" : "text-black"}`}>
        Dark Light Mode Website
      </h1>
      <p className={`${theme === "dark" ? "text-white" : "text-black"}`}>
        Hello !! My React V19 Fans
      </p>
      <button
        className= "bg-blue-500 py-1 px-2 rounded-2xl"
        onClick={handleToggleTheme}
      >
        {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};
