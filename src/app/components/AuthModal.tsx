import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/app/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Button } from "@/app/components/ui/button";
import { signUpWithEmail, signInWithEmail } from "@/lib/supabase";

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

  // Sign In fields
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  // Sign Up fields
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpPhone, setSignUpPhone] = useState("");

  function reset() {
    setError("");
    setVerifiedScreen(false);
    setVerifiedEmail("");
    setSignInEmail("");
    setSignInPassword("");
    setSignUpName("");
    setSignUpEmail("");
    setSignUpPassword("");
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
      const trimmedPhone = signUpPhone.trim();
      if (!trimmedPhone) throw new Error("Phone number is required");
      if (!PHONE_REGEX.test(trimmedPhone)) throw new Error("Phone must start with + and country code (e.g. +2349090718281)");
      const data = await signUpWithEmail(signUpEmail, signUpPassword, trimmedName, trimmedPhone);
      if (data.user?.identities?.length === 0) {
        setError("An account with this email already exists. Please sign in instead.");
      } else {
        setVerifiedEmail(signUpEmail);
        setVerifiedScreen(true);
        setSignUpName("");
        setSignUpEmail("");
        setSignUpPassword("");
        setSignUpPhone("");
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Sign up failed");
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
              We sent a confirmation link to <strong className="text-slate-900">{signUpEmail}</strong>. Click the link to activate your account, then sign in.
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
                <Input
                  id="signin-email"
                  type="email"
                  placeholder="name@email.com"
                  value={signInEmail}
                  onChange={(e) => { setSignInEmail(e.target.value); setError(""); }}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="signin-password">Password</Label>
                <Input
                  id="signin-password"
                  type="password"
                  placeholder="••••••••"
                  value={signInPassword}
                  onChange={(e) => { setSignInPassword(e.target.value); setError(""); }}
                  required
                />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" disabled={loading} className="w-full h-10">
                {loading ? "Signing in…" : "Sign In"}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signup">
            <form onSubmit={handleSignUp} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="signup-name">Name</Label>
                <Input
                  id="signup-name"
                  type="text"
                  placeholder="Your name"
                  value={signUpName}
                  onChange={(e) => { setSignUpName(e.target.value); setError(""); }}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="name@email.com"
                  value={signUpEmail}
                  onChange={(e) => { setSignUpEmail(e.target.value); setError(""); }}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="signup-phone">Phone</Label>
                <Input
                  id="signup-phone"
                  type="tel"
                  placeholder="+2349090718281"
                  value={signUpPhone}
                  onChange={(e) => { setSignUpPhone(e.target.value); setError(""); }}
                  required
                />
                <p className="text-[11px] text-slate-400">Include + and country code (e.g. +2349090718281)</p>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="signup-password">Password</Label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="At least 6 characters"
                  value={signUpPassword}
                  onChange={(e) => { setSignUpPassword(e.target.value); setError(""); }}
                  minLength={6}
                  required
                />
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
