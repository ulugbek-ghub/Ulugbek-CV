import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
  { to: "/about", label: "About" },
];

function Navbar() {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const theme = dark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [dark]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const linkClass = ({ isActive }) =>
    `text-[12px] font-medium uppercase tracking-[0.18em] no-underline py-2 relative transition-[color,opacity] duration-[180ms] ease-[var(--ease-out)] ${isActive ? 'text-[var(--text)]' : 'text-[var(--text-dim)] opacity-50 hover:opacity-100 hover:text-[var(--text)]'}`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center items-center px-8 md:px-16 h-[72px] bg-[var(--bg)]/70 backdrop-blur-[20px] backdrop-saturate-[1.4] border-b border-[var(--border)]">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-[60] focus:text-[var(--text)] focus:bg-[var(--surface)] focus:px-4 focus:py-2">
        Skip to content
      </a>

      {isMobile && (
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-transparent border-none text-[var(--text)] text-2xl cursor-pointer p-2 w-10 h-10 flex items-center justify-center btn-press"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span className="block relative w-5 h-3.5">
            <span className={`absolute left-0 w-5 h-[1.5px] bg-current transition-all duration-[300ms] ease-[var(--ease-out)] ${menuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-5 h-[1.5px] bg-current transition-opacity duration-[200ms] ease-[var(--ease-out)] ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute left-0 w-5 h-[1.5px] bg-current transition-all duration-[300ms] ease-[var(--ease-out)] ${menuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'}`} />
          </span>
        </button>
      )}

      <div className={`${isMobile ? (menuOpen ? 'flex' : 'hidden') : 'flex'} flex-col md:flex-row fixed md:static top-[72px] left-0 w-full md:w-auto h-[calc(100vh-72px)] md:h-auto bg-[var(--bg)] md:bg-transparent items-center justify-center gap-8 md:gap-12 z-40 transition-opacity duration-[250ms] ease-[var(--ease-out)]`}>
        {links.map(({ to, label, end }) => (
          <NavLink key={to} to={to} className={linkClass} end={end} onClick={() => setMenuOpen(false)}>
            {({ isActive }) => (
              <>
                {label}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--text)]/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    style={{ willChange: "transform" }}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
        <button
          aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={() => setDark(p => !p)}
          className="bg-transparent border-none text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--text-dim)] cursor-pointer transition-colors duration-[220ms] ease-[var(--ease-out)] hover:text-[var(--text)] font-[family-name:var(--font-body)] btn-press"
        >
          <span className="inline-flex items-center gap-3">
            <span className={`transition-opacity duration-[220ms] ease-[var(--ease-out)] ${dark ? 'opacity-100' : 'opacity-30'}`}>Dark</span>
            <span className="w-[28px] h-px bg-[var(--text-dim)] relative">
              <span className={`absolute top-1/2 -translate-y-1/2 w-[5px] h-[5px] rounded-full bg-[var(--text)] transition-all duration-[250ms] ease-[var(--ease-out)] ${dark ? 'left-0' : 'left-[23px]'}`} />
            </span>
            <span className={`transition-opacity duration-[220ms] ease-[var(--ease-out)] ${dark ? 'opacity-30' : 'opacity-100'}`}>Light</span>
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
