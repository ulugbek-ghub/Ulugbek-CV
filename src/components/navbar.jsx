import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Set theme attribute and handle resize
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [dark]);

  const toggle = () => {
    const newDark = !dark;
    setDark(newDark);
    document.documentElement.setAttribute("data-theme", newDark ? "dark" : "light");
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
        <NavLink to="/projects" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} onClick={() => setMenuOpen(false)}>Projects</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} onClick={() => setMenuOpen(false)}>Contact</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} onClick={() => setMenuOpen(false)}>About</NavLink>
        <button className="theme-toggle" onClick={toggle}>
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;