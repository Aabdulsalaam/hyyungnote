import { useState } from "react";
import AuthModal from "./AuthModal";
import { Button } from "@/app/components/ui/button";

type LandingPageProps = {
  onAuthSuccess: (email: string, name: string) => void;
  hasAccess?: boolean;
};

const highlights = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Research-first thinking",
    description: "Learn how UX teams frame problems, interview users, and uncover hidden needs through structured research methods.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 016.5 2H20v20H6.5a2.5 2.5 0 010-5H20" />
      </svg>
    ),
    title: "Practical note library",
    description: "Explore concise, beautifully structured notes on design strategy, systems, and delivery across 14 curated themes.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" />
      </svg>
    ),
    title: "Faster product decisions",
    description: "Use the frameworks to connect research, ideas, and polished interfaces with confidence and clarity.",
  },
];

const previewTopics = [
  { name: "Design Thinking", desc: "Human-centered approach to innovation" },
  { name: "User Research", desc: "Methods for uncovering user needs" },
  { name: "Service Design", desc: "End-to-end experience orchestration" },
  { name: "Product Discovery", desc: "Validating before building" },
  { name: "Design Systems", desc: "Scalable, consistent design languages" },
  { name: "UX Strategy", desc: "Aligning design with business goals" },
];

export default function LandingPage({ onAuthSuccess, hasAccess }: LandingPageProps) {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signup" | "signin">("signup");

  function openSignIn() { setAuthMode("signin"); setAuthOpen(true); }
  function openSignUp() { setAuthMode("signup"); setAuthOpen(true); }

  return (
    <>
      <div className="min-h-screen w-full bg-[#f8fafc]">
        {/* Sticky Navbar */}
        <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="flex h-8 w-8 shrink-0 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-[10px] sm:text-xs font-bold text-white shadow-sm">
                H
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-slate-900 truncate" style={{ fontFamily: "'Montserrat',sans-serif" }}>Hyyung's Notes</span>
                <span className="hidden sm:block text-[11px] text-slate-500">UX Research & Design</span>
              </div>
            </div>
            <nav className="flex items-center gap-2 sm:gap-3 shrink-0">
              {!hasAccess && (
                <Button variant="ghost" onClick={openSignIn} className="text-sm font-medium text-slate-700 hover:text-blue-600 px-2 sm:px-4">
                  Sign In
                </Button>
              )}
              <Button onClick={openSignUp} className="rounded-xl bg-blue-600 text-white shadow-sm hover:bg-blue-700 text-xs sm:text-sm px-3 sm:px-4 h-9 sm:h-10">
                Get Started
              </Button>
            </nav>
          </div>
        </header>

        <main>
          {/* Hero Section */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.06),transparent_50%)]" />
            <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-28">
              <div className="mx-auto max-w-3xl text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  Learn first. Explore deeper.
                </div>
                <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl" style={{ fontFamily: "'Montserrat',sans-serif" }}>
                  Read beautiful UX design
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">and research notes</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Discover how product teams turn user research into thoughtful experiences. 
                  Access a growing library of concise, beautifully structured notes on UX strategy, 
                  design thinking, and product discovery.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <Button size="lg" onClick={hasAccess ? () => window.location.href = "/notes" : openSignUp} className="h-12 rounded-xl bg-blue-600 px-8 text-base font-semibold text-white shadow-md hover:bg-blue-700">
                    Go to your notes
                  </Button>
                  {!hasAccess && (
                    <Button size="lg" variant="outline" onClick={openSignIn} className="h-12 rounded-xl border-slate-300 px-8 text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50">
                      I already have access
                    </Button>
                  )}
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1">
                    <svg className="h-3.5 w-3.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    14 curated note themes
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1">
                    <svg className="h-3.5 w-3.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Research-backed practice
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1">
                    <svg className="h-3.5 w-3.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Built for curious teams
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">What you'll find</p>
                <h2 className="mt-3 text-3xl font-bold text-slate-900" style={{ fontFamily: "'Montserrat',sans-serif" }}>
                  A complete UX knowledge base
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Every note is crafted to give you actionable insights, not just theory.
                </p>
              </div>
              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Preview Topics Section */}
          <section className="border-t border-slate-200 bg-[#f8fafc]">
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Preview topics</p>
                <h2 className="mt-3 text-3xl font-bold text-slate-900" style={{ fontFamily: "'Montserrat',sans-serif" }}>
                  A graceful introduction to UX craft
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Explore these topics before unlocking the full note library.
                </p>
              </div>
              <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {previewTopics.map((topic) => (
                  <div
                    key={topic.name}
                    className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 6v12" /><path d="M6 12h12" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{topic.name}</p>
                        <p className="text-xs text-slate-500">{topic.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 px-8 py-14 text-center shadow-xl sm:px-14">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.15),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.08),transparent_60%)]" />
                <div className="relative">
                  <h2 className="text-3xl font-bold text-white sm:text-4xl" style={{ fontFamily: "'Montserrat',sans-serif" }}>
                    Ready to dive into the notes?
                  </h2>
                  <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-blue-100">
                    Join readers who are already using these frameworks to make better product decisions.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                    <Button
                      size="lg"
                      onClick={openSignUp}
                      className="h-12 rounded-xl bg-white px-8 text-base font-semibold text-blue-700 shadow-md hover:bg-blue-50"
                    >
                      Create your free access
                    </Button>
                    <Button
                      size="lg"
                      variant="ghost"
                      onClick={openSignIn}
                      className="h-12 rounded-xl px-8 text-base font-semibold text-white hover:bg-white/10"
                    >
                      Sign in instead
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="border-t border-slate-200 bg-[#f8fafc]">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-lg text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Get in touch</p>
                <h2 className="mt-3 text-2xl font-bold text-slate-900" style={{ fontFamily: "'Montserrat',sans-serif" }}>
                  Let's connect
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Reach out on LinkedIn or WhatsApp — I'd love to hear from you.
                </p>
                <div className="mt-8 flex items-center justify-center gap-6">
                  <a
                    href="https://linkedin.com/in/abdulsalamibrahim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
                  >
                    <svg className="h-5 w-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href="https://wa.me/2349090718281"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-green-200 hover:text-green-600 hover:shadow-md"
                  >
                    <svg className="h-5 w-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-[10px] font-bold text-white shadow-sm">
                  H
                </div>
                <span className="text-sm font-semibold text-slate-700">Hyyung's Notes</span>
              </div>
              <p className="text-xs text-slate-500">
                &copy; {new Date().getFullYear()} Hyyung's Studio. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>

      <AuthModal
        open={authOpen}
        onOpenChange={setAuthOpen}
        initialMode={authMode}
        onAuthSuccess={(email, name, phone) => {
          setAuthOpen(false);
          onAuthSuccess(email, name, phone);
        }}
      />
    </>
  );
}
