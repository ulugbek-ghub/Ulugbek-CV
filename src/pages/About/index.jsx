import Navbar from "../../components/navbar";
import Typewriter from "../../components/Typewriter";
import SkillCard from "../../components/SkillCard";

const skills = [
  { name: "HTML", slug: "html5", percentage: 100 },
  { name: "Python", slug: "python", percentage: 90 },
  { name: "CSS", slug: "css3", percentage: 90 },
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
      <section className="px-8 md:px-16 py-[120px] md:py-[160px] max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-24">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-dim)] mb-6 font-[family-name:var(--font-body)]">About</p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-[family-name:var(--font-heading)] text-[var(--text)] leading-[0.92] tracking-[-0.04em] mb-8">
              <Typewriter text="Developer from Uzbekistan" delay={55} />
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-[14px] leading-[1.7] text-[var(--text-secondary)] font-[family-name:var(--font-body)]">
              I'm a 15 year old full stack developer located in Khorezm, Urgench.
              I build responsive, user-friendly web applications with clean architecture
              and a focus on user experience.
            </p>
            <p className="text-[14px] leading-[1.7] text-[var(--text-secondary)] font-[family-name:var(--font-body)]">
              With 2&ndash;3 years of experience in this field, I've worked with mentors
              at IT-Park Urgench to sharpen my skills across the full stack.
            </p>
          </div>
        </div>

        <div className="border-t border-[var(--border)] pt-12">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-dim)] mb-8 font-[family-name:var(--font-body)]">Skills</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-[var(--border)]">
            {skills.map((s) => (
              <SkillCard
                key={s.name}
                name={s.name}
                percentage={s.percentage}
                slug={s.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;