import React, { useState } from "react";

type LandingPageProps = {
  onSignup: (name: string, email: string) => void;
};

const highlights = [
  { title: "Research-first thinking", description: "Learn how UX teams frame problems, interview users, and uncover hidden needs." },
  { title: "Practical note library", description: "Explore concise, beautifully structured notes on design strategy, systems, and delivery." },
  { title: "Faster product decisions", description: "Use the framework to connect research, ideas, and polished interfaces with confidence." },
];

const previewTopics = [
  "Design Thinking",
  "User Research",
  "Service Design",
  "Product Discovery",
  "Design Systems",
];

export default function LandingPage({ onSignup }: LandingPageProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    if (!trimmedName || !trimmedEmail) return;
    onSignup(trimmedName, trimmedEmail);
    setIsSubmitted(true);
  }

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_38%),linear-gradient(135deg,_#07111f_0%,_#0f172a_48%,_#111827_100%)] text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-400/20 text-lg font-semibold text-sky-200">
              UX
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300">Hyyung’s Studio</p>
              <p className="text-sm font-semibold text-white">UX Research & Design Notes</p>
            </div>
          </div>
          <div className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-[11px] font-medium text-sky-100">
            Free preview available
          </div>
        </header>

        <main className="flex flex-1 flex-col justify-center py-10 lg:py-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <section>
              <div className="mb-5 inline-flex items-center rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-200">
                Learn first. Explore deeper.
              </div>
              <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Read beautiful UX design and research notes before opening the full note library.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Discover how product teams turn user research into thoughtful experiences. This landing page gives readers a warm introduction to UX strategy, discovery, and design thinking before unlocking the full notes experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#signup" className="rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
                  Join to unlock the full notes
                </a>
                <a href="#preview" className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                  Explore the preview topics
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">14 curated note themes</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Research-backed practice</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Built for curious product teams</span>
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/25 backdrop-blur-xl">
              <div className="rounded-[20px] border border-sky-400/20 bg-gradient-to-br from-sky-500/15 to-indigo-500/10 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-200">What you’ll find</p>
                <div className="mt-4 space-y-3">
                  {highlights.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-300">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <section id="preview" className="mt-12 grid gap-4 rounded-[28px] border border-white/10 bg-white/8 p-6 backdrop-blur-xl lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-300">Preview topics</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">A graceful introduction to UX craft</h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                The landing page is designed to welcome first-time readers with digestible framing, clear value, and a path into the deeper notes experience. Users can explore concepts before committing to the full note library.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {previewTopics.map((topic) => (
                <div key={topic} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-200">
                  {topic}
                </div>
              ))}
            </div>
          </section>

          <section id="signup" className="mt-8 rounded-[32px] border border-sky-400/20 bg-slate-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur-xl">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-200">Sign up</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Create your access pass to the full note library.</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Joining gives readers a guided entry into the full experience. Once signed up, they can continue into the detailed notes and explore the complete collection.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="rounded-[24px] border border-white/10 bg-white/10 p-4 sm:p-5">
                <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  className="mb-3 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none ring-0"
                />

                <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="name@email.com"
                  className="mb-4 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none ring-0"
                />

                <button type="submit" className="w-full rounded-full bg-sky-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
                  Unlock the full notes
                </button>
                {isSubmitted && (
                  <p className="mt-3 text-sm text-emerald-300">Welcome aboard — you’re being sent into the full notes experience.</p>
                )}
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
