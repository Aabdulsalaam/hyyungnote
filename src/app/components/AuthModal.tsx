import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent } from "@/app/components/ui/dialog";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Button } from "@/app/components/ui/button";
import { signUpWithEmail, signInWithEmail, signInWithGoogle, resetPasswordForEmail } from "@/lib/supabase";

const COUNTRIES = [
  { name: "Afghanistan", code: "AF", dial: "93", flag: "🇦🇫" },
  { name: "Algeria", code: "DZ", dial: "213", flag: "🇩🇿" },
  { name: "Argentina", code: "AR", dial: "54", flag: "🇦🇷" },
  { name: "Australia", code: "AU", dial: "61", flag: "🇦🇺" },
  { name: "Bangladesh", code: "BD", dial: "880", flag: "🇧🇩" },
  { name: "Brazil", code: "BR", dial: "55", flag: "🇧🇷" },
  { name: "Cambodia", code: "KH", dial: "855", flag: "🇰🇭" },
  { name: "Cameroon", code: "CM", dial: "237", flag: "🇨🇲" },
  { name: "Canada", code: "CA", dial: "1", flag: "🇨🇦" },
  { name: "Chile", code: "CL", dial: "56", flag: "🇨🇱" },
  { name: "China", code: "CN", dial: "86", flag: "🇨🇳" },
  { name: "Colombia", code: "CO", dial: "57", flag: "🇨🇴" },
  { name: "Croatia", code: "HR", dial: "385", flag: "🇭🇷" },
  { name: "Czech Republic", code: "CZ", dial: "420", flag: "🇨🇿" },
  { name: "Denmark", code: "DK", dial: "45", flag: "🇩🇰" },
  { name: "Egypt", code: "EG", dial: "20", flag: "🇪🇬" },
  { name: "Ethiopia", code: "ET", dial: "251", flag: "🇪🇹" },
  { name: "Finland", code: "FI", dial: "358", flag: "🇫🇮" },
  { name: "France", code: "FR", dial: "33", flag: "🇫🇷" },
  { name: "Germany", code: "DE", dial: "49", flag: "🇩🇪" },
  { name: "Ghana", code: "GH", dial: "233", flag: "🇬🇭" },
  { name: "Greece", code: "GR", dial: "30", flag: "🇬🇷" },
  { name: "Hong Kong", code: "HK", dial: "852", flag: "🇭🇰" },
  { name: "India", code: "IN", dial: "91", flag: "🇮🇳" },
  { name: "Indonesia", code: "ID", dial: "62", flag: "🇮🇩" },
  { name: "Iran", code: "IR", dial: "98", flag: "🇮🇷" },
  { name: "Iraq", code: "IQ", dial: "964", flag: "🇮🇶" },
  { name: "Ireland", code: "IE", dial: "353", flag: "🇮🇪" },
  { name: "Israel", code: "IL", dial: "972", flag: "🇮🇱" },
  { name: "Italy", code: "IT", dial: "39", flag: "🇮🇹" },
  { name: "Japan", code: "JP", dial: "81", flag: "🇯🇵" },
  { name: "Jordan", code: "JO", dial: "962", flag: "🇯🇴" },
  { name: "Kenya", code: "KE", dial: "254", flag: "🇰🇪" },
  { name: "Kuwait", code: "KW", dial: "965", flag: "🇰🇼" },
  { name: "Lebanon", code: "LB", dial: "961", flag: "🇱🇧" },
  { name: "Malaysia", code: "MY", dial: "60", flag: "🇲🇾" },
  { name: "Mexico", code: "MX", dial: "52", flag: "🇲🇽" },
  { name: "Morocco", code: "MA", dial: "212", flag: "🇲🇦" },
  { name: "Netherlands", code: "NL", dial: "31", flag: "🇳🇱" },
  { name: "New Zealand", code: "NZ", dial: "64", flag: "🇳🇿" },
  { name: "Nigeria", code: "NG", dial: "234", flag: "🇳🇬" },
  { name: "Norway", code: "NO", dial: "47", flag: "🇳🇴" },
  { name: "Pakistan", code: "PK", dial: "92", flag: "🇵🇰" },
  { name: "Philippines", code: "PH", dial: "63", flag: "🇵🇭" },
  { name: "Poland", code: "PL", dial: "48", flag: "🇵🇱" },
  { name: "Portugal", code: "PT", dial: "351", flag: "🇵🇹" },
  { name: "Qatar", code: "QA", dial: "974", flag: "🇶🇦" },
  { name: "Romania", code: "RO", dial: "40", flag: "🇷🇴" },
  { name: "Russia", code: "RU", dial: "7", flag: "🇷🇺" },
  { name: "Saudi Arabia", code: "SA", dial: "966", flag: "🇸🇦" },
  { name: "Senegal", code: "SN", dial: "221", flag: "🇸🇳" },
  { name: "Serbia", code: "RS", dial: "381", flag: "🇷🇸" },
  { name: "Singapore", code: "SG", dial: "65", flag: "🇸🇬" },
  { name: "South Africa", code: "ZA", dial: "27", flag: "🇿🇦" },
  { name: "South Korea", code: "KR", dial: "82", flag: "🇰🇷" },
  { name: "Spain", code: "ES", dial: "34", flag: "🇪🇸" },
  { name: "Sri Lanka", code: "LK", dial: "94", flag: "🇱🇰" },
  { name: "Sudan", code: "SD", dial: "249", flag: "🇸🇩" },
  { name: "Sweden", code: "SE", dial: "46", flag: "🇸🇪" },
  { name: "Switzerland", code: "CH", dial: "41", flag: "🇨🇭" },
  { name: "Taiwan", code: "TW", dial: "886", flag: "🇹🇼" },
  { name: "Tanzania", code: "TZ", dial: "255", flag: "🇹🇿" },
  { name: "Thailand", code: "TH", dial: "66", flag: "🇹🇭" },
  { name: "Tunisia", code: "TN", dial: "216", flag: "🇹🇳" },
  { name: "Turkey", code: "TR", dial: "90", flag: "🇹🇷" },
  { name: "Uganda", code: "UG", dial: "256", flag: "🇺🇬" },
  { name: "Ukraine", code: "UA", dial: "380", flag: "🇺🇦" },
  { name: "United Arab Emirates", code: "AE", dial: "971", flag: "🇦🇪" },
  { name: "United Kingdom", code: "GB", dial: "44", flag: "🇬🇧" },
  { name: "United States", code: "US", dial: "1", flag: "🇺🇸" },
  { name: "Vietnam", code: "VN", dial: "84", flag: "🇻🇳" },
  { name: "Yemen", code: "YE", dial: "967", flag: "🇾🇪" },
  { name: "Zimbabwe", code: "ZW", dial: "263", flag: "🇿🇼" },
];

type AuthModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAuthSuccess: (email: string, name: string, phone?: string) => void;
  initialMode?: "signup" | "signin";
};

export default function AuthModal({ open, onOpenChange, onAuthSuccess, initialMode = "signup" }: AuthModalProps) {
  const [mode, setMode] = useState<"signup" | "signin" | "forgot">(initialMode);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [verifiedEmail, setVerifiedEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);

  useEffect(() => {
    if (open) setMode(initialMode);
  }, [open, initialMode]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [country, setCountry] = useState(COUNTRIES.find(c => c.code === "NG") || COUNTRIES[0]);
  const [localNumber, setLocalNumber] = useState("");
  const [countrySearch, setCountrySearch] = useState("");
  const [countryOpen, setCountryOpen] = useState(false);
  const countryRef = useRef<HTMLDivElement>(null);

  const [forgotEmail, setForgotEmail] = useState("");

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (countryRef.current && !countryRef.current.contains(e.target as Node)) {
        setCountryOpen(false);
        setCountrySearch("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function reset() {
    setError("");
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setShowPassword(false);
    setShowConfirm(false);
    setLocalNumber("");
    setCountrySearch("");
    setCountryOpen(false);
    setVerifiedEmail("");
    setForgotEmail("");
    setResetSent(false);
    setLoading(false);
  }

  function switchToSignin() {
    setMode("signin");
    setError("");
  }

  function switchToSignup() {
    setMode("signup");
    setError("");
  }

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await signInWithEmail(email, password);
      const n = data.user?.user_metadata?.name || email.split("@")[0];
      onAuthSuccess(email, n);
      reset();
      onOpenChange(false);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Sign in failed";
      if (msg.toLowerCase().includes("email not confirmed") || msg.toLowerCase().includes("email not verified")) {
        setError("Please verify your email first. Check your inbox for the confirmation link.");
      } else {
        setError(msg);
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const trimmedName = name.trim();
      if (!trimmedName) throw new Error("Name is required");
      if (password !== confirmPassword) throw new Error("Passwords do not match");
      const trimmedLocal = localNumber.trim().replace(/\s/g, "");
      if (!trimmedLocal) throw new Error("Phone number is required");
      if (!/^\d{4,15}$/.test(trimmedLocal)) throw new Error("Enter a valid phone number (digits only)");
      const fullPhone = `+${country.dial}${trimmedLocal}`;

      const data = await signUpWithEmail(email, password, trimmedName, fullPhone);
      if (data.user?.identities?.length === 0) {
        setError("An account with this email already exists. Please sign in instead.");
      } else if (data.session) {
        onAuthSuccess(email, trimmedName, fullPhone);
        onOpenChange(false);
      } else {
        setVerifiedEmail(email);
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setLocalNumber("");
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Sign up failed");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleSignIn() {
    setError("");
    setLoading(true);
    try {
      await signInWithGoogle();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Google sign in failed");
      setLoading(false);
    }
  }

  async function handleForgotPassword(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await resetPasswordForEmail(forgotEmail);
      setResetSent(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to send reset email");
    } finally {
      setLoading(false);
    }
  }

  const filteredCountries = COUNTRIES.filter(
    c => c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
         c.dial.includes(countrySearch) ||
         c.code.toLowerCase().includes(countrySearch.toLowerCase())
  );

  // Verified screen
  if (verifiedEmail) {
    return (
      <Dialog open={open} onOpenChange={(o) => { if (!o) { reset(); onOpenChange(o); } }}>
        <DialogContent className="sm:max-w-[420px] p-6">
          <div className="flex flex-col items-center py-6 text-center">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900" style={{ fontFamily: "'Montserrat',sans-serif" }}>Verify your email</h3>
            <p className="text-sm text-slate-600 mt-2 max-w-[300px]">
              We sent a confirmation link to <strong className="text-slate-900">{verifiedEmail}</strong>. Click the link to activate your account.
            </p>
            <div className="mt-6 flex flex-col gap-2 w-full">
              <Button onClick={() => { reset(); switchToSignin(); }} className="w-full h-10">
                Go to Sign In
              </Button>
              <Button variant="outline" onClick={() => { reset(); onOpenChange(false); }} className="w-full h-10">
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // Forgot password screen
  if (mode === "forgot") {
    return (
      <Dialog open={open} onOpenChange={(o) => { if (!o) { reset(); onOpenChange(o); } }}>
        <DialogContent className="sm:max-w-[420px] p-6">
          {resetSent ? (
            <div className="flex flex-col items-center py-6 text-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900" style={{ fontFamily: "'Montserrat',sans-serif" }}>Check your email</h3>
              <p className="text-sm text-slate-600 mt-2 max-w-[300px]">
                We sent a password reset link to <strong className="text-slate-900">{forgotEmail}</strong>.
              </p>
              <div className="mt-6 flex flex-col gap-2 w-full">
                <Button onClick={() => { reset(); switchToSignin(); }} className="w-full h-10">
                  Back to Sign In
                </Button>
                <Button variant="outline" onClick={() => { reset(); onOpenChange(false); }} className="w-full h-10">
                  Close
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <button onClick={() => setMode("signin")} className="p-1 rounded-md hover:bg-slate-100 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
                </button>
                <h3 className="text-lg font-bold text-slate-900" style={{ fontFamily: "'Montserrat',sans-serif" }}>Reset password</h3>
              </div>
              <p className="text-sm text-slate-600 mb-6">Enter your email and we'll send you a reset link.</p>
              <form onSubmit={handleForgotPassword} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="forgot-email">Email</Label>
                  <Input id="forgot-email" type="email" placeholder="name@email.com" value={forgotEmail}
                    onChange={(e) => { setForgotEmail(e.target.value); setError(""); }} required />
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <Button type="submit" disabled={loading} className="w-full h-10">
                  {loading ? "Sending…" : "Send Reset Link"}
                </Button>
              </form>
            </div>
          )}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) { reset(); onOpenChange(o); } }}>
      <DialogContent className="sm:max-w-[420px] p-0 gap-0 overflow-hidden">
        <div className="px-7 pt-7 pb-0">
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-sm font-bold text-white shadow-sm">
              H
            </div>
            <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: "'Montserrat',sans-serif" }}>
              {mode === "signin" ? "Welcome back" : "Join Hyyung's Notes"}
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              {mode === "signin" ? "Sign in to access your notes" : "Create your free account to get started"}
            </p>
          </div>
        </div>

        {mode === "signup" && (
          <div className="px-7 pb-7 pt-6">
            <form onSubmit={handleSignUp} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="signup-name" className="text-[13px] font-medium text-slate-700">Full name</Label>
                <Input id="signup-name" type="text" placeholder="Your name" value={name}
                  onChange={(e) => { setName(e.target.value); setError(""); }} required
                  className="h-10 rounded-xl border-slate-300 text-sm focus:border-blue-400 focus:ring-blue-400/20" />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="signup-email" className="text-[13px] font-medium text-slate-700">Email address</Label>
                <Input id="signup-email" type="email" placeholder="name@email.com" value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(""); }} required
                  className="h-10 rounded-xl border-slate-300 text-sm focus:border-blue-400 focus:ring-blue-400/20" />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-[13px] font-medium text-slate-700">Phone number</Label>
                <div className="flex gap-2">
                  <div ref={countryRef} className="relative">
                    <button type="button" onClick={() => setCountryOpen(!countryOpen)}
                      className="flex h-10 items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-700 hover:border-slate-400 transition-colors min-w-[90px]">
                      <span className="text-base leading-none">{country.flag}</span>
                      <span className="text-slate-400">+{country.dial}</span>
                      <svg className={`w-3 h-3 text-slate-400 transition-transform ${countryOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                    </button>
                    {countryOpen && (
                      <div className="absolute top-full left-0 mt-1 z-50 w-[260px] rounded-xl border border-slate-200 bg-white shadow-lg overflow-hidden">
                        <div className="p-2 border-b border-slate-100">
                          <input type="text" placeholder="Search country…" value={countrySearch}
                            onChange={(e) => setCountrySearch(e.target.value)}
                            className="w-full h-8 rounded-lg border border-slate-200 px-3 text-xs outline-none focus:border-blue-400" autoFocus />
                        </div>
                        <div className="max-h-[200px] overflow-y-auto">
                          {filteredCountries.map((c) => (
                            <button key={c.code} type="button" onClick={() => { setCountry(c); setCountryOpen(false); setCountrySearch(""); }}
                              className={`flex w-full items-center gap-3 px-3 py-2 text-sm text-left transition-colors hover:bg-slate-50 ${c.code === country.code ? "bg-blue-50 text-blue-700" : "text-slate-700"}`}>
                              <span className="text-base leading-none">{c.flag}</span>
                              <span className="flex-1">{c.name}</span>
                              <span className="text-slate-400 text-xs">+{c.dial}</span>
                            </button>
                          ))}
                          {filteredCountries.length === 0 && (
                            <p className="px-3 py-4 text-xs text-slate-400 text-center">No countries found</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <Input type="tel" placeholder="9090718281" value={localNumber}
                      onChange={(e) => { setLocalNumber(e.target.value.replace(/[^0-9]/g, "")); setError(""); }} required
                      className="h-10 rounded-xl border-slate-300 text-sm focus:border-blue-400 focus:ring-blue-400/20" />
                  </div>
                </div>
                <p className="text-[11px] text-slate-400">Enter your number without the country code</p>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="signup-password" className="text-[13px] font-medium text-slate-700">Password</Label>
                <div className="relative">
                  <Input id="signup-password" type={showPassword ? "text" : "password"} placeholder="At least 6 characters" value={password}
                    onChange={(e) => { setPassword(e.target.value); setError(""); }} minLength={6} required
                    className="h-10 rounded-xl border-slate-300 pr-10 text-sm focus:border-blue-400 focus:ring-blue-400/20" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                    {showPassword ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="signup-confirm" className="text-[13px] font-medium text-slate-700">Confirm password</Label>
                <div className="relative">
                  <Input id="signup-confirm" type={showConfirm ? "text" : "password"} placeholder="Repeat your password" value={confirmPassword}
                    onChange={(e) => { setConfirmPassword(e.target.value); setError(""); }} required
                    className="h-10 rounded-xl border-slate-300 pr-10 text-sm focus:border-blue-400 focus:ring-blue-400/20" />
                  <button type="button" onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                    {showConfirm ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    )}
                  </button>
                </div>
              </div>

              {error && <p className="text-sm text-red-500">{error}</p>}

              <Button type="submit" disabled={loading}
                className="w-full h-11 rounded-xl bg-blue-600 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 disabled:opacity-50">
                {loading ? "Creating account…" : "Create Account"}
              </Button>
            </form>

            {/* Google Sign Up */}
            <div className="relative my-5">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-200" /></div>
              <div className="relative flex justify-center"><span className="bg-white px-3 text-[12px] text-slate-400">or sign up with</span></div>
            </div>

            <button type="button" onClick={handleGoogleSignIn} disabled={loading}
              className="google-btn relative w-full flex items-center justify-center gap-3 h-11 rounded-xl border border-slate-300 bg-white text-sm font-medium text-slate-700 transition-all overflow-hidden">
              <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Sign up with Google
            </button>
            <style>{`
              .google-btn::before {
                content: '';
                position: absolute;
                inset: -2px;
                border-radius: 12px;
                background: conic-gradient(from 0deg, #4285F4, #EA4335, #FBBC05, #34A853, #4285F4);
                opacity: 0;
                transition: opacity 0.3s;
                z-index: -1;
              }
              .google-btn:hover::before {
                opacity: 1;
                animation: spin 2s linear infinite;
              }
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `}</style>

            <p className="mt-5 text-center text-sm text-slate-500">
              Already have an account?{" "}
              <button type="button" onClick={switchToSignin} className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                Sign in
              </button>
            </p>
          </div>
        )}

        {mode === "signin" && (
          <div className="px-7 pb-7 pt-6">
            <form onSubmit={handleSignIn} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="signin-email" className="text-[13px] font-medium text-slate-700">Email address</Label>
                <Input id="signin-email" type="email" placeholder="name@email.com" value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(""); }} required
                  className="h-10 rounded-xl border-slate-300 text-sm focus:border-blue-400 focus:ring-blue-400/20" />
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="signin-password" className="text-[13px] font-medium text-slate-700">Password</Label>
                  <button type="button" onClick={() => { setForgotEmail(email); setMode("forgot"); setResetSent(false); }}
                    className="text-[12px] font-medium text-blue-600 hover:text-blue-700 transition-colors">
                    Forgot?
                  </button>
                </div>
                <div className="relative">
                  <Input id="signin-password" type={showPassword ? "text" : "password"} placeholder="••••••••" value={password}
                    onChange={(e) => { setPassword(e.target.value); setError(""); }} required
                    className="h-10 rounded-xl border-slate-300 pr-10 text-sm focus:border-blue-400 focus:ring-blue-400/20" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                    {showPassword ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    )}
                  </button>
                </div>
              </div>

              {error && <p className="text-sm text-red-500">{error}</p>}

              <Button type="submit" disabled={loading}
                className="w-full h-11 rounded-xl bg-blue-600 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 disabled:opacity-50">
                {loading ? "Signing in…" : "Sign In"}
              </Button>
            </form>

            {/* Google Sign In */}
            <div className="relative my-5">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-200" /></div>
              <div className="relative flex justify-center"><span className="bg-white px-3 text-[12px] text-slate-400">or sign in with</span></div>
            </div>

            <button type="button" onClick={handleGoogleSignIn} disabled={loading}
              className="google-btn relative w-full flex items-center justify-center gap-3 h-11 rounded-xl border border-slate-300 bg-white text-sm font-medium text-slate-700 transition-all overflow-hidden">
              <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Sign in with Google
            </button>

            <p className="mt-5 text-center text-sm text-slate-500">
              Don't have an account?{" "}
              <button type="button" onClick={switchToSignup} className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                Sign up
              </button>
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
