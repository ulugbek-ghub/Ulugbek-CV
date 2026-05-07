import Navbar from "../../components/navbar";
import cssIcon from "../../assets/css.svg";

const skills = [
  { name: "HTML/CSS", slug: "html5", icon: null },
  { name: "CSS", slug: null, icon: cssIcon },
  { name: "JavaScript", slug: "javascript", icon: null },
  { name: "React", slug: "react", icon: null },
  { name: "UX Design", slug: "figma", icon: null },
  { name: "Python", slug: "python", icon: null },
  { name: "Bootstrap", slug: "bootstrap", icon: null },
];

function About() {
  return (
    <>
      <Navbar />
      <section className="page">
        <h2 className="page-title">About Me</h2>
        <p className="page-desc">
          I'm a 15 year old Full Stack Developer located in Uzbekistan/Khorezm/Urganch, i can create user experiences with my various coding skills.
          i can ensure that your web apps are Responsive, User-freindly and Affordable AF.
        </p>
        <p className="page-desc">
          I've been in this Programming business for like 2-3 years now, 
          ofc with the help of our mentors in IT-Park Urgench, Oybek brat bn G'ofur brat oddushiiii!
        </p>
        <h3 className="skills-title">Skills</h3>
        <div className="skills-list">
          {skills.map((s) => (
            <span key={s.name} className="skill-badge">
              <img className="skill-badge-icon" src={s.icon || `https://cdn.simpleicons.org/${s.slug}/white`} alt={s.name} style={s.icon ? { width: '32px', height: '32px' } : undefined} />
              <span className="skill-badge-name">{s.name}</span>
            </span>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;