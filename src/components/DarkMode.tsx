"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };
  return (
    <button
      className="bg-gray-700 text-white px-3 py-1 rounded mr-2"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? <SunIcon color="yellow" /> : <MoonIcon />}
    </button>
  );
};

export default DarkMode;
