"use client";

import { createContext, useState } from "react";

type ThemeContext = {
  mode: string;
  toggle: () => void;
};

export const ThemeContext = createContext<ThemeContext | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    setMode((prev) => {
      return prev === "dark" ? "light" : "dark";
    });
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
