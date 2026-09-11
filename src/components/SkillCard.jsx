function SkillCard({ name, percentage, slug }) {
  return (
    <div className="relative flex flex-col items-center justify-center p-6 bg-[var(--surface)] cursor-default transition-[transform,background-color] duration-[220ms] ease-[var(--ease-out)] group card-lift">
      <div className="w-12 h-12 mb-4 flex items-center justify-center">
        <svg
          className="w-8 h-8 text-[var(--text)] opacity-60 transition-opacity duration-[220ms] ease-[var(--ease-out)] group-hover:opacity-100"
          aria-hidden="true"
        >
          <use href={`/icons.svg#${slug}-icon`} />
        </svg>
      </div>
      <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-dim)] transition-colors duration-[220ms] ease-[var(--ease-out)] group-hover:text-[var(--text)] font-[family-name:var(--font-body)]">
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
