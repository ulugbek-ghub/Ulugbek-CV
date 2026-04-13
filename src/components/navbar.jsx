import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggle = () => {
    setDark(!dark);
    document.documentElement.setAttribute("data-theme", dark ? "light" : "dark");
  };

  return (
    <nav className="navbar">
      {isMobile && (
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      )}
      
      <div className={`navbar-links ${isMobile ? (menuOpen ? 'open' : 'closed') : ''}`}>
        <NavLink to="/" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} end onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} onClick={() => setMenuOpen(false)}>Contact</NavLink>
        <NavLink to="/settings" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} onClick={() => setMenuOpen(false)}>Settings</NavLink>
        <button className="theme-toggle" onClick={toggle}>
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;