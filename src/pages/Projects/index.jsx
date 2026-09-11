import Typewriter from "../../components/Typewriter";
import ScrollReveal from "../../components/ScrollReveal";
import movieApp from "../../assets/movie-app.png";
import todoList from "../../assets/todo-list.png";
import usdUzs from "../../assets/usd-uzs.png";
import colorPallete from "../../assets/color-pallete.png";

const projects = [
  {
    title: "NepuTV",
    desc: "Android TV WebView wrapper for nepu.to with full D-pad navigation, hardware-accelerated 4K playback, and automatic TV keyboard support.",
    url: "https://github.com/ulugbek-ghub/NepuTV",
    img: movieApp,
  },
  {
    title: "To-Do-List-React",
    desc: "A clean and functional to-do list app built with React — add, complete, and manage your daily tasks.",
    url: "https://github.com/ulugbek-ghub/To-Do-List-React",
    img: todoList,
  },
  {
    title: "USD-to-UZS-React",
    desc: "Simple USD to Uzbek Som currency converter.",
    url: "https://github.com/ulugbek-ghub/USD-to-UZS-React",
    websiteUrl: "https://usd-to-uzs-react.vercel.app",
    img: usdUzs,
  },
  {
    title: "Color-Pallete-React",
    desc: "Interactive color palette generator — pick, preview, and explore color combinations.",
    url: "https://github.com/ulugbek-ghub/Color-Pallete-React",
    img: colorPallete,
  },
];

function Projects() {
  return (
    <section className="px-6 sm:px-8 md:px-16 py-[100px] md:py-[160px] max-w-[1200px] mx-auto">
      <ScrollReveal>
        <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-dim)] mb-6 font-[family-name:var(--font-body)]">Projects</p>
      </ScrollReveal>
      <ScrollReveal stagger={1}>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-[family-name:var(--font-heading)] text-[var(--text)] leading-[0.92] tracking-[-0.04em] mb-12">
          <Typewriter text="Selected work" delay={55} />
        </h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border)]">
        {projects.map((p, i) => (
          <ScrollReveal key={p.title} stagger={Math.min(i + 1, 4)}>
            <div
              className="group relative bg-[var(--surface)] p-6 sm:p-8 card-lift card-shadow"
            >
              <a
                href={p.websiteUrl || p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block no-underline"
              >
                <div className="aspect-[16/10] overflow-hidden mb-6 bg-[var(--bg)]">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-70 transition-[transform,opacity] duration-[450ms] ease-[var(--ease-out)] group-hover:opacity-100 group-hover:scale-[1.03]"
                  />
                </div>
              </a>
              <h3 className="text-[13px] font-medium uppercase tracking-[0.15em] text-[var(--text)] mb-3 font-[family-name:var(--font-body)]">
                {p.title}
              </h3>
              <p className="text-[13px] leading-[1.6] text-[var(--text-secondary)] font-[family-name:var(--font-body)] mb-4">
                {p.desc}
              </p>
              <div className="flex gap-3">
                {p.websiteUrl && (
                  <a
                    href={p.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-[12px] font-medium uppercase tracking-[0.1em] bg-[var(--text)] text-[var(--bg)] rounded transition-[transform,opacity] duration-[200ms] ease-[var(--ease-out)] hover:opacity-80 no-underline btn-press"
                  >
                    Website
                  </a>
                )}
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-[12px] font-medium uppercase tracking-[0.1em] border border-[var(--border)] text-[var(--text)] rounded transition-[transform,background-color,color,border-color] duration-[200ms] ease-[var(--ease-out)] hover:bg-[var(--text)] hover:text-[var(--bg)] no-underline btn-press"
                >
                  Repo
                </a>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

export default Projects;
