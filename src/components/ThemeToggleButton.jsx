import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './ThemeToggleButton.css';

function ThemeToggleButton() {
  const { theme, ToggleTheme } = useContext(ThemeContext);
    let isDark = theme === "dark";

  return (
    <div className="theme-switch-wrapper">
      <span className="theme-label">Light</span>
      <button
        className={`toggle-track ${isDark ? "dark" : "light"}`}
        onClick={ToggleTheme}
        aria-label="Toggle theme"
      >
        <span className="toggle-knob"></span>
      </button>
      <span className="theme-label">Dark</span>
    </div>
  );
}

export default ThemeToggleButton;