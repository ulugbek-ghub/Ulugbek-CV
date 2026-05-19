function SkillCard({ name, percentage, icon }) {
  return (
    <div className="group relative flex flex-col items-center justify-center p-8 border border-[var(--border)] rounded-2xl bg-[var(--surface)] cursor-default transition-all duration-500 ease-out hover:scale-105 hover:border-[var(--silver)] hover:shadow-xl overflow-hidden">
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
        <div 
          className="absolute bottom-0 left-0 right-0 bg-white rounded-b-2xl transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-y-100 scale-y-0"
          style={{ height: `${percentage}%`, transformOrigin: 'bottom' }}
        >
          <svg className="absolute -top-3 left-0 w-full h-4 text-white" viewBox="0 0 100 12" preserveAspectRatio="none">
            <path d="M0 12 C 25 0, 75 0, 100 12 Z" fill="currentColor" className="animate-wave" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 w-20 h-20 mb-4 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110">
        <img 
          className="w-14 h-14 object-contain drop-shadow-lg transition-all duration-500 group-hover:grayscale group-hover:brightness-0" 
          src={icon} 
          alt={name} 
        />
      </div>
      <span className="relative z-10 text-[14px] font-medium uppercase tracking-[1px] text-[var(--silver-dim)] transition-colors duration-300 group-hover:text-black">
        {name}
      </span>
      <span className="relative z-10 text-[11px] text-[var(--silver-dim)] mt-1 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:text-black/70">
        {percentage}%
      </span>
    </div>
  );
}

export default SkillCard;