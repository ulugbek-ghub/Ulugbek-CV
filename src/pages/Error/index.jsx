import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import Typewriter from "../../components/Typewriter";

function ErrorPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center px-8 md:px-16 max-w-[1200px] mx-auto">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-dim)] mb-8 font-[family-name:var(--font-body)]">Error 404</p>
        <h1 className="text-[clamp(4rem,15vw,12rem)] font-[family-name:var(--font-heading)] text-[var(--text)] leading-[0.85] tracking-[-0.06em] mb-8">
          <Typewriter text="404" delay={120} />
        </h1>
        <p className="text-[14px] text-[var(--text-secondary)] max-w-[360px] mb-12 font-[family-name:var(--font-body)]">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="h-[54px] px-10 border border-[var(--text)] text-[var(--text)] no-underline text-[12px] font-medium uppercase tracking-[0.2em] transition-all duration-300 bg-transparent cursor-pointer inline-flex items-center justify-center w-fit hover:bg-[var(--text)] hover:text-[var(--bg)] font-[family-name:var(--font-body)]"
        >
          Back to Home
        </Link>
      </div>
    </>
  );
}

export default ErrorPage;