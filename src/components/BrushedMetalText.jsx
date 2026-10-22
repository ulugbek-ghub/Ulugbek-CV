import { Suspense, lazy, useEffect, useRef, useState } from "react";
import Typewriter from "./Typewriter";

const NAME = "Safarboyev Ulug'bek";

const LazyBrushedMetalCanvas = lazy(() => import("./BrushedMetalCanvas"));

function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e) => setReduced(e.matches);
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  return reduced;
}

function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute("data-theme") || "dark"
  );

  useEffect(() => {
    const el = document.documentElement;
    const observer = new MutationObserver(() =>
      setTheme(el.getAttribute("data-theme") || "dark")
    );
    observer.observe(el, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  return theme;
}

function BrushedMetalText({ text = NAME, delay = 60, className = "" }) {
  const headingRef = useRef(null);
  const [partial, setPartial] = useState("");
  const [metrics, setMetrics] = useState(null);
  const [gpuOk, setGpuOk] = useState(null);
  const [metalReady, setMetalReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const reduced = useReducedMotion();
  const theme = useTheme();

  useEffect(() => {
    let mounted = true;
    import("shaders/react")
      .then((mod) => mod.isWebGPUSupported && mod.isWebGPUSupported())
      .then((ok) => {
        if (mounted) setGpuOk(ok);
      })
      .catch(() => {
        if (mounted) setGpuOk(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const fs = parseFloat(getComputedStyle(el).fontSize) || 0;
      if (rect.width > 0 && rect.height > 0 && fs > 0) {
        setMetrics({ w: rect.width, h: rect.height, fs });
      }
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // BrushedMetal's fontSize is normalised against the canvas height and caps
  // at 0.5, so give the canvas at least 2.2x the font size and use that.
  const canvasH = metrics
    ? Math.ceil(Math.max(metrics.h, metrics.fs * 2.2))
    : 0;
  const fontSize = metrics && canvasH ? metrics.fs / canvasH : 0.45;

  const show = gpuOk === true && !failed && !reduced && metrics;
  const palette =
    theme === "light"
      ? { lightColor: "#bcc1ca", darkColor: "#2c2f36" }
      : { lightColor: "#e9ebef", darkColor: "#26282d" };

  return (
    <h1 ref={headingRef} className={`relative ${className}`}>
      <span
        className="transition-opacity duration-300 ease-out"
        style={{ opacity: metalReady ? 0 : 1 }}
      >
        <Typewriter text={text} delay={delay} onProgress={setPartial} />
      </span>

      {show && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0"
          style={{ width: metrics.w, height: canvasH, zIndex: 2 }}
        >
          <Suspense fallback={null}>
            <LazyBrushedMetalCanvas
              partial={partial}
              fontSize={fontSize}
              palette={palette}
              onReady={() => setMetalReady(true)}
              onUnavailable={() => setFailed(true)}
            />
          </Suspense>
        </div>
      )}
    </h1>
  );
}

export default BrushedMetalText;