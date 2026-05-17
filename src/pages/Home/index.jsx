import Navbar from "../../components/navbar";
import pfp from "../../assets/ulugbek-pfp.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-5 pt-20 pb-10 relative">
        <img 
          src={pfp} 
          alt="pfp" 
          className="w-36 h-36 md:w-44 md:h-44 rounded-full mb-8 md:mb-10 border-2 border-[var(--border)] object-cover opacity-0 animate-[flipIn_1s_cubic-bezier(0.16,1,0.3,1)_forwards]" 
          style={{ animationDelay: '0.2s' }}
        />
        <h1 
          className="text-[36px] md:text-[82px] font-bold uppercase text-[var(--white)] mb-5 opacity-0 animate-[revealLeft_1.2s_cubic-bezier(0.77,0,0.175,1)_forwards] tracking-[2px] md:tracking-[10px] leading-tight break-words"
          style={{ animationDelay: '0.6s' }}
        >
          Safarboyev Ulug'bek
        </h1>
        <p 
          className="text-sm md:text-base font-light uppercase text-[var(--silver-dim)] mb-5 opacity-0 animate-[blurFadeIn_1s_cubic-bezier(0.16,1,0.3,1)_forwards] tracking-[3px]"
          style={{ animationDelay: '1s' }}
        >
          15 year old Full Stack Developer with 2-3 years of experience
        </p>
        <p 
          className="text-base md:text-lg text-[var(--silver-dim)] max-w-full mb-10 leading-relaxed opacity-0 animate-[fadeIn_0.8s_ease_forwards]"
          style={{ animationDelay: '1.4s' }}
        >
          Hire me to unlock my full potential.
        </p>
        <div className="flex flex-col items-center gap-4">
          <Link 
            to="/contact" 
            className="py-[18px] px-14 border border-[var(--white)] text-[var(--white)] no-underline text-[15px] font-medium uppercase tracking-[4px] transition-all duration-300 bg-transparent rounded-[10px] opacity-0 animate-[popUp_0.8s_cubic-bezier(0.34,1.56,0.64,1)_forwards] cursor-pointer hover:bg-white hover:text-black"
            style={{ animationDelay: '1.8s' }}
          >
            Contact with me
          </Link>
          <Link 
            to="/projects" 
            className="py-[18px] px-14 border border-[var(--white)] text-[var(--white)] no-underline text-[15px] font-medium uppercase tracking-[4px] transition-all duration-300 bg-transparent rounded-[10px] opacity-0 animate-[popUp_0.8s_cubic-bezier(0.34,1.56,0.64,1)_forwards] cursor-pointer hover:bg-white hover:text-black"
            style={{ animationDelay: '2s' }}
          >
            See my projects so far
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home