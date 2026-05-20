import { useState, useEffect } from "react";

function SkillCard({ name, percentage, slug }) {
  const [iconSrc, setIconSrc] = useState(() => {
    const color = getComputedStyle(document.documentElement).getPropertyValue("--text").trim();
    return `https://cdn.simpleicons.org/${slug}/${color.replace("#", "")}`;
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const color = getComputedStyle(document.documentElement).getPropertyValue("--text").trim();
      setIconSrc(`https://cdn.simpleicons.org/${slug}/${color.replace("#", "")}`);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, [slug]);

  return (
    <div className="relative flex flex-col items-center justify-center p-6 bg-[var(--surface)] cursor-default transition-all duration-300 group">
      <div className="w-12 h-12 mb-4 flex items-center justify-center">
        {iconSrc && (
          <img
            className="w-8 h-8 object-contain opacity-60 transition-opacity duration-300 group-hover:opacity-100"
            src={iconSrc}
            alt={name}
          />
        )}
      </div>
      <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-dim)] transition-colors duration-300 group-hover:text-[var(--text)] font-[family-name:var(--font-body)]">
        {name}
      </span>
      <div className="mt-3 w-full max-w-[48px] h-px bg-[var(--border)]">
        <div
          className="h-full bg-[var(--text)] transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default SkillCard;
