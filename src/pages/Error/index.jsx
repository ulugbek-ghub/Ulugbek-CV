import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import errorimg from "../../assets/404-img.svg"

function ErrorPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center px-5 pt-[100px] pb-10 gap-5 animate-[pageEnter_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]">
        <img src={errorimg} alt="404" />
        <p className="text-[15px] uppercase tracking-[3px] text-[var(--silver-dim)] text-center">
          Page not found
        </p>
        <Link 
          to="/" 
          className="mt-4 py-4 px-10 border border-[var(--silver-dim)] text-[var(--silver-light)] no-underline text-[14px] uppercase tracking-[3px] rounded-lg opacity-0 animate-[popUp_0.6s_cubic-bezier(0.34,1.56,0.64,1)_forwards] hover:bg-white hover:text-black hover:border-white"
          style={{ animationDelay: '0.6s' }}
        >
          Go Home
        </Link>
      </div>
    </>
  );
}

export default ErrorPage;