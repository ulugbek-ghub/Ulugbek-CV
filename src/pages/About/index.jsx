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
      <section className="max-w-[960px] mx-auto px-6 py-[110px] md:py-[130px] animate-[pageEnter_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]">
        <h2 className="text-[32px] md:text-[48px] font-light uppercase text-[var(--white)] mb-7 tracking-[2px] md:tracking-[6px]">
          About Me
        </h2>
        <p className="text-[17px] text-[var(--silver-dim)] leading-relaxed mb-9">
          I'm a 15 year old Full Stack Developer located in Uzbekistan/Khorezm/Urganch, i can create user experiences with my various coding skills.
          i can ensure that your web apps are Responsive, User-freindly and Affordable AF.
        </p>
        <p className="text-[17px] text-[var(--silver-dim)] leading-relaxed mb-9">
          I've been in this Programming business for like 2-3 years now, 
          ofc with the help of our mentors in IT-Park Urgench, Oybek brat bn G'ofur brat oddushiiii!
        </p>
        <h3 className="text-[15px] uppercase tracking-[2px] text-[var(--white)] mb-4">Skills</h3>
        <div className="flex flex-wrap gap-3 items-center">
          {skills.map((s, i) => (
            <span 
              key={s.name} 
              className="inline-flex items-center gap-2 px-2.5 border border-[var(--border)] rounded-[10px] bg-[var(--surface)] transition-all duration-[350ms] cursor-default opacity-0 animate-[popIn_0.5s_cubic-bezier(0.34,1.56,0.64,1)_forwards] overflow-hidden w-12 h-12 hover:w-auto hover:px-5 hover:border-[var(--silver)] hover:gap-3"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <img 
                className="w-7 h-7 object-contain" 
                src={s.icon || `https://cdn.simpleicons.org/${s.slug}/white`} 
                alt={s.name} 
              />
              <span className="text-[14px] font-medium uppercase tracking-[2px] text-[var(--white)] whitespace-nowrap opacity-0 transition-opacity duration-[250ms] delay-[100ms] hover:opacity-100">
                {s.name}
              </span>
            </span>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;