import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/app/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Button } from "@/app/components/ui/button";
import { signUpWithEmail, signInWithEmail } from "@/lib/supabase";

type AuthModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAuthSuccess: (email: string, name: string) => void;
};

export default function AuthModal({ open, onOpenChange, onAuthSuccess }: AuthModalProps) {
  const [tab, setTab] = useState<"signin" | "signup">("signin");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Sign In fields
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  // Sign Up fields
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  function reset() {
    setError("");
    setSignInEmail("");
    setSignInPassword("");
    setSignUpName("");
    setSignUpEmail("");
    setSignUpPassword("");
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
      setError(err instanceof Error ? err.message : "Sign in failed");
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
      const data = await signUpWithEmail(signUpEmail, signUpPassword, trimmedName);
      const name = data.user?.user_metadata?.name || trimmedName;
      onAuthSuccess(signUpEmail, name);
      reset();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Sign up failed");
    } finally {
      setLoading(false);
    }
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
