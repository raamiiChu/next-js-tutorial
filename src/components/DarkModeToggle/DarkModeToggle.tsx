import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const DarkModeToggle = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("AppContext must be used within a AppContextProvider");
  }

  const { mode, toggle } = themeContext;

  return (
    <nav
      className="relative w-3/4 flex justify-between items-center px-3 border-2 border-[#53c28b70] rounded-3xl cursor-pointer"
      onClick={toggle}
    >
      <div className="text-xs">🔆</div>
      <div className="text-xs">🌙</div>
      <div
        className={`${
          mode === "dark" ? "left-3" : "right-3"
        } absolute w-4 h-4 bg-primary rounded-full`}
      />
    </nav>
  );
};

export default DarkModeToggle;
