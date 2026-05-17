import Navbar from "../../components/navbar";
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
    desc: "Simple USD to Uzbek Som currency converter. Dollarni so'mda chiqaruvchi kalkulyator.",
    url: "https://github.com/ulugbek-ghub/USD-to-UZS-React",
    img: usdUzs,
  },
  {
    title: "Color-Pallete-React",
    desc: "Interactive color palette generator built with React — pick, preview, and explore color combinations.",
    url: "https://github.com/ulugbek-ghub/Color-Pallete-React",
    img: colorPallete,
  },
];

function Projects() {
  return (
    <>
      <Navbar />
      <section className="max-w-[960px] mx-auto px-6 py-[110px] md:py-[130px] animate-[pageEnter_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]">
        <h2 className="text-[32px] md:text-[48px] font-light uppercase text-[var(--white)] mb-7 tracking-[2px] md:tracking-[6px]">
          Projects
        </h2>
        <div className="flex flex-col gap-7">
          {projects.map((p, i) => (
            <a 
              key={p.title} 
              href={p.url} 
              target="_blank" 
              className="flex items-stretch gap-6 border border-[var(--border)] rounded-xl overflow-hidden no-underline bg-[var(--surface)] transition-all duration-[350ms] opacity-0 animate-[fadeInUp_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards] hover:border-[var(--silver)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(255,255,255,0.08)]"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <img 
                src={p.img} 
                alt={p.title} 
                className="w-[360px] min-h-[220px] object-cover flex-shrink-0 border-r border-[var(--border)] md:max-lg:w-[280px]"
              />
              <div className="flex flex-col justify-center py-6 pr-6 pl-0">
                <h3 className="text-[18px] font-semibold uppercase tracking-[2.5px] text-[var(--white)] mb-2.5">
                  {p.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[var(--silver-dim)]">
                  {p.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;