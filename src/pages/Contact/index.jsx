import Typewriter from "../../components/Typewriter";
import ScrollReveal from "../../components/ScrollReveal";

function Contact() {
  return (
    <section className="min-h-screen px-6 sm:px-8 md:px-16 py-[100px] md:py-[160px] max-w-[1200px] mx-auto">
      <ScrollReveal>
        <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-dim)] mb-6 font-[family-name:var(--font-body)]">Contact</p>
      </ScrollReveal>
      <ScrollReveal stagger={1}>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-[family-name:var(--font-heading)] text-[var(--text)] leading-[0.92] tracking-[-0.04em] mb-16">
          <Typewriter text="Get in touch" delay={55} />
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <div className="space-y-8">
          <ScrollReveal stagger={2}>
            <div>
              <p className="text-[11px] uppercase tracking-[0.15em] text-[var(--text-dim)] mb-2 font-[family-name:var(--font-body)]">Email</p>
              <a href="mailto:ulugbek@email.com" className="text-[14px] text-[var(--text-secondary)] no-underline transition-colors duration-[200ms] ease-[var(--ease-out)] hover:text-[var(--text)] font-[family-name:var(--font-body)]">
                ulugbek@email.com
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger={3}>
            <div>
              <p className="text-[11px] uppercase tracking-[0.15em] text-[var(--text-dim)] mb-2 font-[family-name:var(--font-body)]">Phone</p>
              <a href="tel:+998937422333" className="text-[14px] text-[var(--text-secondary)] no-underline transition-colors duration-[200ms] ease-[var(--ease-out)] hover:text-[var(--text)] font-[family-name:var(--font-body)]">
                +998 93 742 23 33
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger={4}>
            <div>
              <p className="text-[11px] uppercase tracking-[0.15em] text-[var(--text-dim)] mb-2 font-[family-name:var(--font-body)]">Location</p>
              <p className="text-[14px] text-[var(--text-secondary)] font-[family-name:var(--font-body)]">
                Urgench, Uzbekistan
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="space-y-8">
          <ScrollReveal stagger={3}>
            <div>
              <p className="text-[11px] uppercase tracking-[0.15em] text-[var(--text-dim)] mb-2 font-[family-name:var(--font-body)]">GitHub</p>
              <a href="https://github.com/ulugbek-ghub" target="_blank" rel="noopener noreferrer" className="text-[14px] text-[var(--text-secondary)] no-underline transition-colors duration-[200ms] ease-[var(--ease-out)] hover:text-[var(--text)] font-[family-name:var(--font-body)]">
                @ulugbek-ghub
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger={4}>
            <div>
              <p className="text-[11px] uppercase tracking-[0.15em] text-[var(--text-dim)] mb-2 font-[family-name:var(--font-body)]">Instagram</p>
              <a href="https://www.instagram.com/ulugbekk.s/" target="_blank" rel="noopener noreferrer" className="text-[14px] text-[var(--text-secondary)] no-underline transition-colors duration-[200ms] ease-[var(--ease-out)] hover:text-[var(--text)] font-[family-name:var(--font-body)]">
                @ulugbekk.s
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <ScrollReveal>
        <div className="border-t border-[var(--border)] mt-24 pt-8">
          <p className="text-[11px] text-[var(--text-dim)] font-[family-name:var(--font-body)]">
            Available for freelance &mdash; let's work together.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default Contact;
