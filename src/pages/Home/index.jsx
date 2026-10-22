import { Link } from "react-router-dom";
import ScrollReveal from "../../components/ScrollReveal";
import BrushedMetalText from "../../components/BrushedMetalText";
import pfp from "../../assets/ulugbek-pfp.jpg";

function Home() {
  return (
    <section className="min-h-dvh flex flex-col justify-center px-6 sm:px-8 md:px-16 pt-[100px] pb-16 max-w-[1200px] mx-auto relative">
      <div className="w-full flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10 md:gap-8">
        <div className="flex-1 min-w-0">
          <ScrollReveal>
            <p className="text-[12px] uppercase tracking-[0.2em] text-[var(--text-dim)] mb-8 font-[family-name:var(--font-body)]">
              Full Stack Developer
            </p>
          </ScrollReveal>

          <ScrollReveal stagger={1}>
            <BrushedMetalText
              text="Safarboyev Ulug'bek"
              delay={60}
              className="mb-10 text-[clamp(2.5rem,8vw,7.5rem)] font-[family-name:var(--font-heading)] font-bold text-[var(--text)] leading-[0.88] tracking-[-0.045em]"
            />
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
                className="h-[54px] px-10 border border-[var(--border)] text-[var(--text-secondary)] no-underline text-[12px] font-medium uppercase tracking-[0.2em] transition-[transform,background-color,color,border-color] duration-[220ms] ease-[var(--ease-out)] bg-transparent cursor-pointer inline-flex items-center justify-center hover:border-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--bg)] hover:scale-[1.02] active:scale-[0.98] will-change-transform font-[family-name:var(--font-body)]"
              >
                Projects
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <div className="glass-blend relative flex-shrink-0 self-center md:self-start md:mt-10 md:-ml-24 lg:-ml-32">
          <ScrollReveal stagger={2}>
            <div className="relative glass-card w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] p-3 overflow-hidden">
              <img
                src={pfp}
                alt="Ulug'bek Safarboyev"
                className="w-full h-full object-cover rounded-[16px] transition-transform duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.03]"
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
