import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col justify-center items-center px-8 text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-dim)] mb-4 font-[family-name:var(--font-body)]">
            Something went wrong
          </p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-[family-name:var(--font-heading)] text-[var(--text)] leading-[0.92] tracking-[-0.04em] mb-8">
            Error
          </h2>
          <button
            onClick={() => window.location.reload()}
            className="h-[54px] px-10 border border-[var(--text)] text-[var(--text)] text-[12px] font-medium uppercase tracking-[0.2em] transition-all duration-[220ms] ease-[var(--ease-out)] bg-transparent cursor-pointer inline-flex items-center justify-center hover:bg-[var(--text)] hover:text-[var(--bg)] font-[family-name:var(--font-body)] btn-press"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
