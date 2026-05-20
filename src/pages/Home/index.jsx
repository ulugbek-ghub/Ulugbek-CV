import Navbar from "../../components/navbar";
import Typewriter from "../../components/Typewriter";
import pfp from "../../assets/ulugbek-pfp.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 pt-[100px] pb-16 relative">
        <div className="max-w-[1200px] mx-auto w-full flex flex-col md:flex-row md:items-center md:justify-between gap-12 md:gap-24">
          <div className="flex-1 min-w-0">
            <p className="text-[12px] uppercase tracking-[0.2em] text-[var(--text-dim)] mb-8 font-[family-name:var(--font-body)]">
              Full Stack Developer
            </p>

            <h1 className="text-[clamp(3rem,8vw,7.5rem)] font-[family-name:var(--font-heading)] font-bold text-[var(--text)] leading-[0.88] tracking-[-0.045em] mb-10">
              <Typewriter text="Safarboyev Ulug'bek" delay={60} />
            </h1>

            <p className="text-[14px] leading-relaxed text-[var(--text-secondary)] max-w-[400px] mb-12 font-[family-name:var(--font-body)]">
              15 years old — full stack developer with 3 years of experience building responsive, user-focused applications.
            </p>

            <div className="flex items-center gap-5 mb-12">
              <a href="https://github.com/ulugbek-ghub" target="_blank" className="text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--text)]" aria-label="GitHub">
                <svg className="w-5 h-5" aria-hidden="true">
                  <use href="/icons.svg#github-icon" />
                </svg>
              </a>
              <a href="https://www.instagram.com/ulugbekk.s/" target="_blank" className="text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--text)]" aria-label="Instagram">
                <svg className="w-5 h-5" aria-hidden="true">
                  <use href="/icons.svg#instagram-icon" />
                </svg>
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="h-[54px] px-10 border border-[var(--text)] text-[var(--text)] no-underline text-[12px] font-medium uppercase tracking-[0.2em] transition-all duration-300 bg-transparent cursor-pointer inline-flex items-center justify-center hover:bg-[var(--text)] hover:text-[var(--bg)] font-[family-name:var(--font-body)]"
              >
                Contact
              </Link>
              <Link
                to="/projects"
                className="h-[54px] px-10 border border-[var(--border)] text-[var(--text-secondary)] no-underline text-[12px] font-medium uppercase tracking-[0.2em] transition-all duration-300 bg-transparent cursor-pointer inline-flex items-center justify-center hover:border-[var(--text)] hover:text-[var(--text)] font-[family-name:var(--font-body)]"
              >
                Projects
              </Link>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] overflow-hidden">
              <div className="absolute inset-0 border-2 border-[var(--text)]/20 z-10 pointer-events-none" />
              <div className="absolute inset-[6px] border border-[var(--text)]/10 z-10 pointer-events-none" />
              <img
                src={pfp}
                alt="Ulug'bek Safarboyev"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 right-8 md:right-16 text-[11px] text-[var(--text-dim)] uppercase tracking-[0.15em] font-[family-name:var(--font-body)] text-right leading-loose">
          <span className="block">Based in</span>
          <span className="block text-[var(--text-secondary)]">Urgench, Uzbekistan</span>
        </div>
      </section>
    </>
  );
}

export default Home