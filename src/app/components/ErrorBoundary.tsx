import React from "react";

interface Props {
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error("ErrorBoundary caught:", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div className="rounded-[12px] px-5 py-4 text-[14px] text-[#64748b]" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
          This section failed to load. Try refreshing the page.
        </div>
      );
    }
    return this.props.children;
  }
}
