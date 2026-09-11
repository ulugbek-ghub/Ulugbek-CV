import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SPRING_TRANSLATE = { stiffness: 150, damping: 15, mass: 0.12 };
const SPRING_ROTATE = { stiffness: 220, damping: 14, mass: 0.3 };
const MAGNET_RADIUS = 320;
const MAGNET_PULL = 30;
const MAGNET_TILT = 9;

function MagneticDigit({ digit, register }) {
  const ref = useRef(null);
  const entry = useRef(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const mr = useMotionValue(0);

  const x = useSpring(mx, SPRING_TRANSLATE);
  const y = useSpring(my, SPRING_TRANSLATE);
  const rotate = useSpring(mr, SPRING_ROTATE);

  useEffect(() => {
    const measure = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      entry.current = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        width: rect.width,
      };
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const handle = {
      getCenter: () => entry.current,
      setTarget: (nx, ny, tilt) => {
        mx.set(nx);
        my.set(ny);
        mr.set(tilt);
      },
    };
    return register(handle);
  }, [register, mx, my, mr]);

  return (
    <motion.span
      ref={ref}
      style={{ x, y, rotate, display: "inline-block", willChange: "transform" }}
      className="text-[clamp(6rem,22vw,16rem)] font-bold text-[var(--text)] leading-none select-none cursor-default"
    >
      {digit}
    </motion.span>
  );
}

function ErrorPage() {
  const [reduced, setReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const magnets = useRef([]);

  const register = useCallback((handle) => {
    magnets.current.push(handle);
    return () => {
      const i = magnets.current.indexOf(handle);
      if (i !== -1) magnets.current.splice(i, 1);
    };
  }, []);

  const handlePointerMove = (e) => {
    const { clientX, clientY } = e;
    for (const m of magnets.current) {
      const c = m.getCenter();
      if (!c) continue;
      const dx = clientX - c.x;
      const dy = clientY - c.y;
      const dist = Math.hypot(dx, dy);
      if (dist < MAGNET_RADIUS) {
        const falloff = 1 - dist / MAGNET_RADIUS;
        const nx = dist ? dx / dist : 0;
        const ny = dist ? dy / dist : 0;
        m.setTarget(
          nx * MAGNET_PULL * falloff,
          ny * MAGNET_PULL * falloff,
          (dx / c.width) * MAGNET_TILT * falloff
        );
      } else {
        m.setTarget(0, 0, 0);
      }
    }
  };

  const handlePointerLeave = () => {
    for (const m of magnets.current) m.setTarget(0, 0, 0);
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-[var(--bg)] px-6 relative overflow-hidden"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 45%, color-mix(in srgb, var(--text) 4%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="flex flex-col items-center relative z-10">
        <div className="flex gap-[2.5vw] sm:gap-[3vw]">
          {reduced ? (
            <>
              <span className="text-[clamp(6rem,22vw,16rem)] font-bold text-[var(--text)] leading-none select-none">4</span>
              <span className="text-[clamp(6rem,22vw,16rem)] font-bold text-[var(--text)] leading-none select-none">4</span>
            </>
          ) : (
            <>
              <MagneticDigit digit="4" register={register} />
              <MagneticDigit digit="4" register={register} />
            </>
          )}
        </div>
        {reduced ? (
          <span className="text-[clamp(6rem,22vw,16rem)] font-bold text-[var(--text)] leading-none select-none">0</span>
        ) : (
          <MagneticDigit digit="0" register={register} />
        )}
      </div>

      <Link
        to="/"
        className="group go-back relative mt-10 inline-flex items-center gap-2 no-underline text-[13px] text-[var(--text)]/30 transition-colors duration-[200ms] ease-[var(--ease-out)] hover:text-[var(--text)]/80 z-10"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <span
          aria-hidden="true"
          className="inline-flex transition-transform duration-[200ms] ease-[var(--ease-out)] group-hover:-translate-x-[2px]"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
        </span>
        Go back
      </Link>

      <p
        className="mt-16 max-w-[340px] text-center text-[12px] leading-[1.8] text-[var(--text-dim)] z-10"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Well, idk even know how you got here, but it's kinda nice in here, so, feel free to go back
        to the actual parts of website whenever you want
        <br />
        <span className="text-[var(--text-secondary)]">— Ulug'bek himself</span>
      </p>
    </div>
  );
}

export default ErrorPage;