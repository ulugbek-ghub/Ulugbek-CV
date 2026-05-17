import Navbar from "../../components/navbar";

const icons = {
  email: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
  github: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>,
  instagram: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  phone: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  location: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
};

function Contact() {
  const linkClass = "flex items-center gap-3 py-3 no-underline text-[var(--silver-light)] text-[17px] tracking-[1px] transition-all duration-[300ms] opacity-0 animate-[slideInRight_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards] hover:text-[var(--white)] hover:border-b border-[var(--border)] translate-x-[-20px] hover:translate-x-1 w-fit break-all";

  const iconClass = "flex items-center justify-center w-9 h-9 rounded-lg border border-[var(--border)] bg-[var(--surface)] flex-shrink-0 text-[var(--white)]";

  return (
    <>
      <Navbar />
      <section className="max-w-[960px] mx-auto px-6 py-[110px] md:py-[130px] animate-[pageEnter_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]">
        <h2 className="text-[32px] md:text-[48px] font-light uppercase text-[var(--white)] mb-7 tracking-[2px] md:tracking-[6px]">
          Contact
        </h2>
        <p className="text-[17px] text-[var(--silver-dim)] mb-9">Feel free to reach out!</p>
        <div className="flex flex-col gap-6">
          <a href="mailto:ulugbek@email.com" target="_blank" className={linkClass} style={{ animationDelay: '0s' }}>
            <span className={iconClass}>{icons.email}</span>
            My Gmail, dont spam pls:)
          </a>
          <a href="https://github.com/ulugbek-ghub" target="_blank" className={linkClass} style={{ animationDelay: '0.1s' }}>
            <span className={iconClass}>{icons.github}</span>
            Github Profile
          </a>
          <a href="https://www.instagram.com/ulugbekk.s/" target="_blank" className={linkClass} style={{ animationDelay: '0.2s' }}>
            <span className={iconClass}>{icons.instagram}</span>
            Instagram
          </a>
          <a href="tel:+998-93-742-2333" className={linkClass} style={{ animationDelay: '0.3s' }}>
            <span className={iconClass}>{icons.phone}</span>
            Phone number
          </a>
          <p className={linkClass} style={{ animationDelay: '0.4s' }}>
            <span className={iconClass}>{icons.location}</span>
            Urganch, Uzbekistan
          </p>
        </div>
      </section>
    </>
  );
}

export default Contact;