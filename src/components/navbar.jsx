import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
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

  const linkClass = ({ isActive }) =>
    `text-[15px] font-medium uppercase tracking-[2px] text-[var(--silver-dim)] no-underline py-2 px-4 whitespace-nowrap transition-colors duration-200 hover:text-[var(--white)] ${isActive ? 'text-white' : ''}`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center items-center px-5 md:px-12 py-5 border-b border-[var(--border)] bg-black/30 backdrop-blur-[12px]">
      {isMobile && (
        <button 
          className="absolute left-4 top-3.5 bg-transparent border border-[var(--border)] text-[var(--silver-light)] text-2xl px-2 py-1 rounded-md"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      )}
      
      <div className={`flex gap-4 md:gap-12 items-center flex-wrap justify-center ${isMobile ? (menuOpen ? 'flex-col fixed top-16 left-0 right-0 bg-[var(--surface)] py-6 gap-5 border-b border-[var(--border)] transition-transform duration-300' : 'hidden') : ''}`}>
        <NavLink to="/" className={linkClass} end onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/projects" className={linkClass} onClick={() => setMenuOpen(false)}>Projects</NavLink>
        <NavLink to="/contact" className={linkClass} onClick={() => setMenuOpen(false)}>Contact</NavLink>
        <NavLink to="/about" className={linkClass} onClick={() => setMenuOpen(false)}>About</NavLink>
        <button 
          className="flex items-center justify-center min-w-14 h-10 ml-2 px-5 py-2.5 border border-[var(--border)] bg-[var(--surface)] text-[var(--silver-light)] text-base rounded-lg transition-all duration-200 hover:border-[var(--silver)] hover:text-[var(--white)]"
          onClick={toggle}
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;