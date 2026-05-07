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
      <section className="page">
        <h2 className="page-title">Projects</h2>
        <div className="projects-list">
          {projects.map((p) => (
            <a key={p.title} href={p.url} target="_blank" className="project-card">
              <img src={p.img} alt={p.title} className="project-card-img" />
              <div className="project-card-body">
                <h3 className="project-card-title">{p.title}</h3>
                <p className="project-card-desc">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;