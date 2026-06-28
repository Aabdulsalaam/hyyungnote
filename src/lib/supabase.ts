import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export async function signUpWithEmail(email: string, password: string, name: string, phone?: string) {
  if (!supabase) throw new Error("Supabase not configured");
  const metadata: Record<string, string> = { name };
  if (phone) metadata.phone = phone;
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: metadata,
      emailRedirectTo: typeof window !== "undefined" ? window.location.origin + "/auth/callback" : undefined,
    },
  });
  if (error) throw error;
  return data;
}

export async function signInWithEmail(email: string, password: string) {
  if (!supabase) throw new Error("Supabase not configured");
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
}

export async function signInWithGoogle() {
  if (!supabase) throw new Error("Supabase not configured");
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: typeof window !== "undefined" ? window.location.origin + "/auth/callback" : undefined },
  });
  if (error) throw error;
  return data;
}

export async function resetPasswordForEmail(email: string) {
  if (!supabase) throw new Error("Supabase not configured");
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: typeof window !== "undefined" ? window.location.origin + "/auth/callback" : undefined,
  });
  if (error) throw error;
  return data;
}

export async function updateUserPassword(newPassword: string) {
  if (!supabase) throw new Error("Supabase not configured");
  const { data, error } = await supabase.auth.updateUser({ password: newPassword });
  if (error) throw error;
  return data;
}

export async function signOutUser() {
  if (!supabase) throw new Error("Supabase not configured");
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getCurrentSession() {
  if (!supabase) return null;
  const { data } = await supabase.auth.getSession();
  return data.session;
}

export async function getCurrentUser() {
  if (!supabase) return null;
  const { data } = await supabase.auth.getUser();
  return data.user;
}

export interface UserAnalytics {
  userId: string;
  email?: string;
  name?: string;
  sectionsRead: number;
  completedNotes: number;
  totalSections: number;
  totalNotes: number;
  practiceDone: boolean;
  lastActive: string;
}

export async function updateUserAnalytics(stats: UserAnalytics): Promise<void> {
  if (!supabase) return;
  try {
    await supabase.from("user_analytics").upsert(
      {
        user_id: stats.userId,
        email: stats.email || null,
        name: stats.name || null,
        sections_read: stats.sectionsRead,
        completed_notes: stats.completedNotes,
        total_sections: stats.totalSections,
        total_notes: stats.totalNotes,
        practice_done: stats.practiceDone,
        last_active: stats.lastActive,
      },
      { onConflict: "user_id" }
    );
  } catch (e) {
    console.error("Failed to update user analytics", e);
  }
}

export interface AggregatedAnalytics {
  totalUsers: number;
  usersWithCompletedNotes: number;
  usersWithPractice: number;
  totalSectionsRead: number;
  avgCompletionRate: number;
}

export async function fetchAggregatedAnalytics(): Promise<AggregatedAnalytics | null> {
  if (!supabase) return null;
  try {
    const { data, error } = await supabase.from("user_analytics").select("*");
    if (error || !data || data.length === 0) return null;
    const totalUsers = data.length;
    const usersWithCompletedNotes = data.filter((r: any) => r.completed_notes > 0).length;
    const usersWithPractice = data.filter((r: any) => r.practice_done).length;
    const totalSectionsRead = data.reduce((sum: number, r: any) => sum + (r.sections_read || 0), 0);
    const totalPossible = data.reduce((sum: number, r: any) => sum + (r.total_notes || 0), 0);
    const totalCompleted = data.reduce((sum: number, r: any) => sum + (r.completed_notes || 0), 0);
    const avgCompletionRate = totalPossible > 0 ? Math.round((totalCompleted / totalPossible) * 100) : 0;
    return { totalUsers, usersWithCompletedNotes, usersWithPractice, totalSectionsRead, avgCompletionRate };
  } catch (e) {
    console.error("Failed to fetch analytics", e);
    return null;
  }
}
