import { useState, useEffect } from "react";
import { Button } from "./components/ui/button";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="cursor-pointer"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
};

export default ThemeSwitcher;
