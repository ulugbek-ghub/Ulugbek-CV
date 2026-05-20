import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const theme = dark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [dark]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const linkClass = ({ isActive }) =>
    `text-[12px] font-medium uppercase tracking-[0.18em] text-[var(--text-dim)] no-underline py-2 transition-colors duration-300 hover:text-[var(--text)] ${isActive ? 'text-[var(--text)]' : ''}`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center items-center px-8 md:px-16 h-[72px] border-b border-[var(--border)] bg-[var(--bg)]">
      {isMobile && (
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-transparent border-none text-[var(--text)] text-xl cursor-pointer p-0"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '—' : '+'}
        </button>
      )}

      <div className={`${isMobile ? (menuOpen ? 'flex' : 'hidden') : 'flex'} flex-col md:flex-row fixed md:static top-[72px] left-0 w-full md:w-auto h-[calc(100vh-72px)] md:h-auto bg-[var(--bg)] md:bg-transparent items-center justify-center gap-10 md:gap-12 z-40 ${isMobile && menuOpen ? 'flex' : ''}`}>
        <NavLink to="/" className={linkClass} end onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/projects" className={linkClass} onClick={() => setMenuOpen(false)}>Projects</NavLink>
        <NavLink to="/contact" className={linkClass} onClick={() => setMenuOpen(false)}>Contact</NavLink>
        <NavLink to="/about" className={linkClass} onClick={() => setMenuOpen(false)}>About</NavLink>
        <button
          aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={() => setDark(p => !p)}
          className="bg-transparent border-none text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--text-dim)] cursor-pointer transition-colors duration-300 hover:text-[var(--text)] font-[family-name:var(--font-body)]"
        >
          <span className="inline-flex items-center gap-3">
            <span className={`transition-opacity duration-300 ${dark ? 'opacity-100' : 'opacity-30'}`}>Dark</span>
            <span className="w-[28px] h-px bg-[var(--text-dim)] relative">
              <span className={`absolute top-1/2 -translate-y-1/2 w-[5px] h-[5px] rounded-full bg-[var(--text)] transition-all duration-300 ${dark ? 'left-0' : 'left-[23px]'}`} />
            </span>
            <span className={`transition-opacity duration-300 ${dark ? 'opacity-30' : 'opacity-100'}`}>Light</span>
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;