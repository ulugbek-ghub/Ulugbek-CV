import Navbar from "../../components/navbar";
import Typewriter from "../../components/Typewriter";
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
    <>
      <Navbar />
      <section className="px-8 md:px-16 py-[120px] md:py-[160px] max-w-[1200px] mx-auto">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-dim)] mb-6 font-[family-name:var(--font-body)]">Projects</p>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-[family-name:var(--font-heading)] text-[var(--text)] leading-[0.92] tracking-[-0.04em] mb-12">
          <Typewriter text="Selected work" delay={55} />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border)]">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              className="group relative bg-[var(--surface)] p-8 no-underline transition-all duration-300 hover:bg-[var(--surface)]"
            >
              <div className="aspect-[16/10] overflow-hidden mb-6 bg-[var(--bg)]">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover opacity-70 transition-all duration-500 group-hover:opacity-100"
                />
              </div>
              <h3 className="text-[13px] font-medium uppercase tracking-[0.15em] text-[var(--text)] mb-3 font-[family-name:var(--font-body)]">
                {p.title}
              </h3>
              <p className="text-[13px] leading-[1.6] text-[var(--text-secondary)] font-[family-name:var(--font-body)]">
                {p.desc}
              </p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;