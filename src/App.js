import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ThemeToggleButton from "./components/ThemeToggleButton.jsx";
import './App.css';

function App() {
  
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app-root ${theme}`}>
      
     
      <header className="navbar">
        <div className="logo">MyBrand.</div>
        
       
        <ThemeToggleButton />
      </header>

      
      <main className="hero-section">
        <h1>Welcome to the Future</h1>
        <p>
          This is a React landing page demonstrating how to use the Context API for a global dark mode toggle.
        </p>
        <a href="#start" className="cta-btn">Get Started Now</a>
      </main>

    </div>
  );
}

export default App;