import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/app/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Button } from "@/app/components/ui/button";
import { signUpWithEmail, signInWithEmail, signInWithGoogle, resetPasswordForEmail } from "@/lib/supabase";

const PHONE_REGEX = /^\+[1-9]\d{6,14}$/;

type AuthModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAuthSuccess: (email: string, name: string) => void;
};

export default function AuthModal({ open, onOpenChange, onAuthSuccess }: AuthModalProps) {
  const [tab, setTab] = useState<"signin" | "signup">("signin");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [verifiedScreen, setVerifiedScreen] = useState(false);
  const [verifiedEmail, setVerifiedEmail] = useState("");
  const [forgotScreen, setForgotScreen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);

  // Sign In fields
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [showSignInPassword, setShowSignInPassword] = useState(false);

  // Sign Up fields
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState("");
  const [showSignUpPassword, setShowSignUpPassword] = useState(false);
  const [showSignUpConfirm, setShowSignUpConfirm] = useState(false);
  const [signUpPhone, setSignUpPhone] = useState("");

  function reset() {
    setError("");
    setVerifiedScreen(false);
    setVerifiedEmail("");
    setForgotScreen(false);
    setForgotEmail("");
    setResetSent(false);
    setSignInEmail("");
    setSignInPassword("");
    setShowSignInPassword(false);
    setSignUpName("");
    setSignUpEmail("");
    setSignUpPassword("");
    setSignUpConfirmPassword("");
    setShowSignUpPassword(false);
    setShowSignUpConfirm(false);
    setSignUpPhone("");
  }

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await signInWithEmail(signInEmail, signInPassword);
      const name = data.user?.user_metadata?.name || signInEmail.split("@")[0];
      onAuthSuccess(signInEmail, name);
      reset();
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
      const trimmedName = signUpName.trim();
      if (!trimmedName) throw new Error("Name is required");
      if (signUpPassword !== signUpConfirmPassword) throw new Error("Passwords do not match");
      const trimmedPhone = signUpPhone.trim();
      if (!trimmedPhone) throw new Error("Phone number is required");
      if (!PHONE_REGEX.test(trimmedPhone)) throw new Error("Phone must start with + and country code (e.g. +2349090718281)");
      const data = await signUpWithEmail(signUpEmail, signUpPassword, trimmedName, trimmedPhone);
      if (data.user?.identities?.length === 0) {
        setError("An account with this email already exists. Please sign in instead.");
      } else if (data.session) {
        onAuthSuccess(signUpEmail, trimmedName);
        onOpenChange(false);
      } else {
        setVerifiedEmail(signUpEmail);
        setVerifiedScreen(true);
        setSignUpName("");
        setSignUpEmail("");
        setSignUpPassword("");
        setSignUpConfirmPassword("");
        setSignUpPhone("");
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

  if (verifiedScreen) {
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
              We sent a confirmation link to <strong className="text-slate-900">{verifiedEmail}</strong>. Click the link to activate your account, then sign in.
            </p>
            <div className="mt-6 flex flex-col gap-2 w-full">
              <Button onClick={() => { reset(); setTab("signin"); }} className="w-full h-10">
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

  if (forgotScreen) {
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
                <Button onClick={() => { reset(); setTab("signin"); }} className="w-full h-10">
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
                <button onClick={() => setForgotScreen(false)} className="p-1 rounded-md hover:bg-slate-100 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
                </button>
                <DialogTitle className="text-lg font-bold" style={{ fontFamily: "'Montserrat',sans-serif" }}>Reset password</DialogTitle>
              </div>
              <p className="text-sm text-slate-600 mb-6">Enter your email and we'll send you a reset link.</p>
              <form onSubmit={handleForgotPassword} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="forgot-email">Email</Label>
                  <Input id="forgot-email" type="email" placeholder="name@email.com" value={forgotEmail}
                    onChange={(e) => { setForgotEmail(e.target.value); setError(""); }} required />
                </div>
                {error && <p className="text-sm text-destructive">{error}</p>}
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
    <Dialog open={open} onOpenChange={(open) => { if (!open) reset(); onOpenChange(open); }}>
      <DialogContent className="sm:max-w-[420px] p-0 gap-0 overflow-hidden">
        <div className="px-6 pt-6 pb-0">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center" style={{ fontFamily: "'Montserrat',sans-serif" }}>
              Welcome to Hyyung's Notes
            </DialogTitle>
            <p className="text-sm text-muted-foreground text-center mt-1">
              Sign in to access the full note library
            </p>
          </DialogHeader>
        </div>

        <Tabs value={tab} onValueChange={(v) => { setTab(v as "signin" | "signup"); setError(""); }} className="px-6 pb-6 pt-4">
          <TabsList className="w-full mb-4">
            <TabsTrigger value="signin" className="flex-1">Sign In</TabsTrigger>
            <TabsTrigger value="signup" className="flex-1">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="signin">
            <form onSubmit={handleSignIn} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="signin-email">Email</Label>
                <Input id="signin-email" type="email" placeholder="name@email.com" value={signInEmail}
                  onChange={(e) => { setSignInEmail(e.target.value); setError(""); }} required />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="signin-password">Password</Label>
                  <button type="button" onClick={() => { setForgotEmail(""); setForgotScreen(true); setResetSent(false); }}
                    className="text-[12px] font-medium text-blue-600 hover:text-blue-700 transition-colors">
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Input id="signin-password" type={showSignInPassword ? "text" : "password"} placeholder="••••••••" value={signInPassword}
                    onChange={(e) => { setSignInPassword(e.target.value); setError(""); }} required className="pr-10" />
                  <button type="button" onClick={() => setShowSignInPassword(!showSignInPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                    {showSignInPassword ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    )}
                  </button>
                </div>
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" disabled={loading} className="w-full h-10">
                {loading ? "Signing in…" : "Sign In"}
              </Button>
            </form>

            <div className="relative my-5">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-200" /></div>
              <div className="relative flex justify-center"><span className="bg-white px-3 text-[12px] text-slate-400">or continue with</span></div>
            </div>

            <button type="button" onClick={handleGoogleSignIn} disabled={loading}
              className="google-btn relative w-full flex items-center justify-center gap-3 h-11 rounded-xl border border-slate-300 bg-white text-sm font-medium text-slate-700 transition-all overflow-hidden">
              <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/><path fill="none" d="M1 1h22v22H1z"/></svg>
              Continue with Google
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
          </TabsContent>

          <TabsContent value="signup">
            <form onSubmit={handleSignUp} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="signup-name">Name</Label>
                <Input id="signup-name" type="text" placeholder="Your name" value={signUpName}
                  onChange={(e) => { setSignUpName(e.target.value); setError(""); }} required />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input id="signup-email" type="email" placeholder="name@email.com" value={signUpEmail}
                  onChange={(e) => { setSignUpEmail(e.target.value); setError(""); }} required />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="signup-phone">Phone</Label>
                <Input id="signup-phone" type="tel" placeholder="+2349090718281" value={signUpPhone}
                  onChange={(e) => { setSignUpPhone(e.target.value); setError(""); }} required />
                <p className="text-[11px] text-slate-400">Include + and country code (e.g. +2349090718281)</p>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="signup-password">Password</Label>
                <div className="relative">
                  <Input id="signup-password" type={showSignUpPassword ? "text" : "password"} placeholder="At least 6 characters" value={signUpPassword}
                    onChange={(e) => { setSignUpPassword(e.target.value); setError(""); }} minLength={6} required className="pr-10" />
                  <button type="button" onClick={() => setShowSignUpPassword(!showSignUpPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                    {showSignUpPassword ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="signup-confirm-password">Confirm Password</Label>
                <div className="relative">
                  <Input id="signup-confirm-password" type={showSignUpConfirm ? "text" : "password"} placeholder="Repeat your password" value={signUpConfirmPassword}
                    onChange={(e) => { setSignUpConfirmPassword(e.target.value); setError(""); }} required className="pr-10" />
                  <button type="button" onClick={() => setShowSignUpConfirm(!showSignUpConfirm)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                    {showSignUpConfirm ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    )}
                  </button>
                </div>
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" disabled={loading} className="w-full h-10">
                {loading ? "Creating account…" : "Create Account"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
