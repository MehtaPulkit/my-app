import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "../hooks/useDarkMode";

export default function Switcher() {
  const [theme, setTheme] = useDarkMode();
  const isDark = theme === "dark";

  const toggleDarkMode = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="flex items-center justify-center align-middle">
      <DarkModeSwitch checked={isDark} onChange={toggleDarkMode} size={30} />
    </div>
  );
}
