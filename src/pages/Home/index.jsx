import { Link } from "react-router-dom";
import Typewriter from "../../components/Typewriter";
import ScrollReveal from "../../components/ScrollReveal";
import pfp from "../../assets/ulugbek-pfp.jpg";

function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-16 pt-[100px] pb-16 relative">
      <div className="max-w-[1200px] mx-auto w-full flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10 md:gap-24">
        <div className="flex-1 min-w-0">
          <ScrollReveal>
            <p className="text-[12px] uppercase tracking-[0.2em] text-[var(--text-dim)] mb-8 font-[family-name:var(--font-body)]">
              Full Stack Developer
            </p>
          </ScrollReveal>

          <ScrollReveal stagger={1}>
            <h1 className="text-[clamp(2.5rem,8vw,7.5rem)] font-[family-name:var(--font-heading)] font-bold text-[var(--text)] leading-[0.88] tracking-[-0.045em] mb-10">
              <Typewriter text="Safarboyev Ulug'bek" delay={60} />
            </h1>
          </ScrollReveal>

          <ScrollReveal stagger={2}>
            <p className="text-[14px] leading-[1.7] text-[var(--text-secondary)] max-w-[400px] mb-12 font-[family-name:var(--font-body)]">
              15 years old — full stack developer with 3 years of experience building responsive, user-focused applications.
            </p>
          </ScrollReveal>

          <ScrollReveal stagger={3}>
            <div className="flex items-center gap-5 mb-12">
              <a href="https://github.com/ulugbek-ghub" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] transition-[transform,color] duration-[200ms] ease-[var(--ease-out)] hover:text-[var(--text)] hover:scale-110 btn-press" aria-label="GitHub">
                <svg className="w-5 h-5" aria-hidden="true">
                  <use href="/icons.svg#github-icon" />
                </svg>
              </a>
              <a href="https://www.instagram.com/ulugbekk.s/" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] transition-[transform,color] duration-[200ms] ease-[var(--ease-out)] hover:text-[var(--text)] hover:scale-110 btn-press" aria-label="Instagram">
                <svg className="w-5 h-5" aria-hidden="true">
                  <use href="/icons.svg#instagram-icon" />
                </svg>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger={4}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="h-[54px] px-10 border border-[var(--text)] text-[var(--text)] no-underline text-[12px] font-medium uppercase tracking-[0.2em] transition-[transform,background-color,color,border-color] duration-[220ms] ease-[var(--ease-out)] bg-transparent cursor-pointer inline-flex items-center justify-center hover:bg-[var(--text)] hover:text-[var(--bg)] hover:scale-[1.02] active:scale-[0.98] will-change-transform font-[family-name:var(--font-body)]"
              >
                Contact
              </Link>
              <Link
                to="/projects"
                className="h-[54px] px-10 border border-[var(--border)] text-[var(--text-secondary)] no-underline text-[12px] font-medium uppercase tracking-[0.2em] transition-[transform,background-color,color,border-color] duration-[220ms] ease-[var(--ease-out)] bg-transparent cursor-pointer inline-flex items-center justify-center hover:border-[var(--text)] hover:text-[var(--text)] hover:bg-[var(--text)]/[0.08] hover:-translate-y-[2px] active:scale-[0.98] will-change-transform font-[family-name:var(--font-body)]"
              >
                Projects
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <div className="flex-shrink-0 self-center md:self-auto">
          <ScrollReveal stagger={2}>
            <div className="relative w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] overflow-hidden">
              <div className="absolute inset-0 border-2 border-[var(--text)]/20 z-10 pointer-events-none" />
              <div className="absolute inset-[6px] border border-[var(--text)]/10 z-10 pointer-events-none" />
              <img
                src={pfp}
                alt="Ulug'bek Safarboyev"
                className="w-full h-full object-cover transition-transform duration-[600ms] ease-[var(--ease-out)] hover:scale-[1.03]"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute bottom-12 right-6 sm:right-8 md:right-16 text-[11px] text-[var(--text-dim)] uppercase tracking-[0.15em] font-[family-name:var(--font-body)] text-right leading-loose hidden sm:block">
        <span className="block">Based in</span>
        <span className="block text-[var(--text-secondary)]">Urgench, Uzbekistan</span>
      </div>
    </section>
  );
}

export default Home
