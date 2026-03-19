import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    root.style.colorScheme = theme;

    // save theme to local storage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}
