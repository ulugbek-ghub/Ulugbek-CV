import Navbar from "../../components/navbar";
import SkillCard from "../../components/SkillCard";

const skills = [
  { name: "HTML", slug: "html5", percentage: 100 },
  { name: "Python", slug: "python", percentage: 90 },
  { name: "CSS", slug: "css", percentage: 90 },
  { name: "Bootstrap", slug: "bootstrap", percentage: 70 },
  { name: "Figma", slug: "figma", percentage: 65 },
  { name: "Git", slug: "git", percentage: 60 },
  { name: "React", slug: "react", percentage: 60 },
  { name: "JavaScript", slug: "javascript", percentage: 50 },
];

function About() {
  return (
    <>
      <Navbar />
      <section className="max-w-[960px] mx-auto px-6 py-[110px] md:py-[130px] animate-[diagonalEnter_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]">
        <h2 className="text-[32px] md:text-[48px] font-light uppercase text-[var(--white)] mb-7 tracking-[2px] md:tracking-[6px] opacity-0 animate-[fadeSlide_0.6s_0.1s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          About Me
        </h2>
        <p className="text-[17px] text-[var(--silver-dim)] leading-relaxed mb-9 opacity-0 animate-[fadeSlide_0.6s_0.2s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          I'm a 15 year old Full Stack Developer located in Uzbekistan/Khorezm/Urganch, i can create user experiences with my various coding skills.
          i can ensure that your web apps are Responsive, User-freindly and Affordable AF.
        </p>
        <p className="text-[17px] text-[var(--silver-dim)] leading-relaxed mb-12 opacity-0 animate-[fadeSlide_0.6s_0.3s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          I've been in this Programming business for like 2-3 years now, 
          ofc with the help of our mentors in IT-Park Urgench, Oybek brat bn G'ofur brat oddushiiii!
        </p>
        <h3 className="text-[15px] uppercase tracking-[2px] text-[var(--white)] mb-6 opacity-0 animate-[fadeSlide_0.6s_0.4s_cubic-bezier(0.16,1,0.3,1)_forwards]">Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((s, i) => (
            <div 
              key={s.name} 
              className="opacity-0 animate-[popIn_0.5s_cubic-bezier(0.34,1.56,0.64,1)_forwards]"
              style={{ animationDelay: `${0.05 * i}s` }}
            >
              <SkillCard 
                name={s.name}
                percentage={s.percentage}
                icon={`https://cdn.simpleicons.org/${s.slug}/white`}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;