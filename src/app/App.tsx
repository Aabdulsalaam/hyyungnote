import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import svgLogin from "@/imports/Notes-2/svg-bix1q8uy1z";
import svgAdmin from "@/imports/Notes-3/svg-5vzq3h17ph";
import svgDT from "@/imports/Notes/svg-d6yohho28q";
import svgPDLC from "@/imports/Notes-1/svg-ursbprr9kn";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";
import { signInWithEmail, signOutUser, getCurrentSession } from "@/lib/supabase";
import { INITIAL_NOTES } from "@/lib/notes-data";
import LandingPage from "@/app/components/LandingPage";

type Block =
  | { type: "para"; text: string }
  | { type: "callout"; label: string; text: string }
  | { type: "quote"; text: string }
  | { type: "subheading"; text: string }
  | { type: "bullets"; items: { term?: string; desc: string }[] }
  | { type: "stat"; value: string; label: string; footnote: string }
  | { type: "output"; text: string };

interface EditableSection {
  id: string;
  label: string;
  icon: string;
  badge: string | null;
  color?: string | null;
  content: string;
  blocks?: Block[];
  isHtml?: boolean;
}

interface EditableNote {
  id: string;
  themeId: string;
  title: string;
  subtitle: string;
  wordCount: string;
  tags: string[];
  sections: EditableSection[];
}

interface NoteTheme {
  heroGradient: string; iconBg: string; accentColor: string; accentDark: string;
  accentLight: string; accentBorder: string; accentMuted: string;
  accentPill: { bg: string; text: string }; dividerFrom: string;
  noteCardActiveBg: string; noteCardActiveBorder: string;
}

const THEMES: Record<string, NoteTheme> = {
  dt: {
    heroGradient: "linear-gradient(177.398deg, #eff6ff 8%, #f0fdf4 58%, #fafafa 91%)",
    iconBg: "#2563eb", accentColor: "#2563EB", accentDark: "#1d4ed8",
    accentLight: "rgba(37,99,235,0.07)", accentBorder: "rgba(37,99,235,0.19)",
    accentMuted: "rgba(37,99,235,0.09)", accentPill: { bg: "#eff6ff", text: "#1d4ed8" },
    dividerFrom: "rgba(37,99,235,0.31)", noteCardActiveBg: "#eff6ff", noteCardActiveBorder: "#bfdbfe",
  },
  pdlc: {
    heroGradient: "linear-gradient(177.398deg, #fef3c7 8%, #fce7f3 58%, #fafafa 91%)",
    iconBg: "linear-gradient(135deg, #F59E0B 0%, #EC4899 100%)", accentColor: "#F59E0B", accentDark: "#B45309",
    accentLight: "rgba(245,158,11,0.07)", accentBorder: "rgba(245,158,11,0.19)",
    accentMuted: "rgba(245,158,11,0.09)", accentPill: { bg: "#fef3c7", text: "#b45309" },
    dividerFrom: "rgba(245,158,11,0.31)", noteCardActiveBg: "#fef3c7", noteCardActiveBorder: "#fde68a",
  },
  teal: {
    heroGradient: "linear-gradient(177.398deg, #f0fdf4 8%, #ecfdf5 58%, #fafafa 91%)",
    iconBg: "#0d9488", accentColor: "#0d9488", accentDark: "#0f766e",
    accentLight: "rgba(13,148,136,0.07)", accentBorder: "rgba(13,148,136,0.19)",
    accentMuted: "rgba(13,148,136,0.09)", accentPill: { bg: "#f0fdf4", text: "#0f766e" },
    dividerFrom: "rgba(13,148,136,0.31)", noteCardActiveBg: "#f0fdf4", noteCardActiveBorder: "#a7f3d0",
  },
  violet: {
    heroGradient: "linear-gradient(177.398deg, #f5f3ff 8%, #fdf4ff 58%, #fafafa 91%)",
    iconBg: "#7c3aed", accentColor: "#7c3aed", accentDark: "#6d28d9",
    accentLight: "rgba(124,58,237,0.07)", accentBorder: "rgba(124,58,237,0.19)",
    accentMuted: "rgba(124,58,237,0.09)", accentPill: { bg: "#f5f3ff", text: "#6d28d9" },
    dividerFrom: "rgba(124,58,237,0.31)", noteCardActiveBg: "#f5f3ff", noteCardActiveBorder: "#ddd6fe",
  },
  rose: {
    heroGradient: "linear-gradient(177.398deg, #fdf2f8 8%, #fff7ed 58%, #fafafa 91%)",
    iconBg: "#ec4899", accentColor: "#ec4899", accentDark: "#be185d",
    accentLight: "rgba(236,72,153,0.08)", accentBorder: "rgba(236,72,153,0.2)",
    accentMuted: "rgba(236,72,153,0.1)", accentPill: { bg: "#fdf2f8", text: "#be185d" },
    dividerFrom: "rgba(236,72,153,0.3)", noteCardActiveBg: "#fdf2f8", noteCardActiveBorder: "#fbcfe8",
  },
  emerald: {
    heroGradient: "linear-gradient(177.398deg, #ecfdf5 8%, #f0fdf4 58%, #fafafa 91%)",
    iconBg: "#10b981", accentColor: "#10b981", accentDark: "#047857",
    accentLight: "rgba(16,185,129,0.08)", accentBorder: "rgba(16,185,129,0.2)",
    accentMuted: "rgba(16,185,129,0.1)", accentPill: { bg: "#ecfdf5", text: "#047857" },
    dividerFrom: "rgba(16,185,129,0.3)", noteCardActiveBg: "#ecfdf5", noteCardActiveBorder: "#a7f3d0",
  },
  cyan: {
    heroGradient: "linear-gradient(177.398deg, #ecfeff 8%, #f0f9ff 58%, #fafafa 91%)",
    iconBg: "#0891b2", accentColor: "#0891b2", accentDark: "#0e7490",
    accentLight: "rgba(8,145,178,0.08)", accentBorder: "rgba(8,145,178,0.2)",
    accentMuted: "rgba(8,145,178,0.1)", accentPill: { bg: "#ecfeff", text: "#0e7490" },
    dividerFrom: "rgba(8,145,178,0.3)", noteCardActiveBg: "#ecfeff", noteCardActiveBorder: "#a5f3fc",
  },
  indigo: {
    heroGradient: "linear-gradient(177.398deg, #eef2ff 8%, #f5f3ff 58%, #fafafa 91%)",
    iconBg: "#4f46e5", accentColor: "#4f46e5", accentDark: "#4338ca",
    accentLight: "rgba(79,70,229,0.08)", accentBorder: "rgba(79,70,229,0.2)",
    accentMuted: "rgba(79,70,229,0.1)", accentPill: { bg: "#eef2ff", text: "#4338ca" },
    dividerFrom: "rgba(79,70,229,0.3)", noteCardActiveBg: "#eef2ff", noteCardActiveBorder: "#c7d2fe",
  },
};

function blocksToHtml(blocks: Block[]): string {
  return  blocks.map(b => {
    if (b.type === "para") return `<p>${b.text}</p>`;
    if (b.type === "callout") return `<p><strong>${b.label}:</strong> ${b.text}</p>`;
    if (b.type === "quote") return `<blockquote>${b.text}</blockquote>`;
    if (b.type === "subheading") return `<h2>${b.text}</h2>`;
    if (b.type === "bullets") return `<ul>${b.items.map(i => `<li>${i.term ? `<strong>${i.term}</strong> — ` : ""}${i.desc}</li>`).join("")}</ul>`;
    if (b.type === "stat") return `<p><strong>${b.value} ${b.label}</strong> — ${b.footnote}</p>`;
    if (b.type === "output") return `<p><strong>Output:</strong> ${b.text}</p>`;
    return "";
  }).join("");
}

function RichContent({ blocks, accent }: { blocks: Block[]; accent: string }) {
  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, i) => {
        if (block.type === "para") return <p  key={i} className="text-[15px] leading-[26px] text-[#1e293b]">{block.text}</p>;
        if (block.type === "callout") return (
          // Only block.label and block.text are data. Layout, colors, and shape never change.
          <div key={i} className="rounded-[12px] px-5 py-4 flex gap-3" style={{ background: `${accent}08`, border: `1px solid ${accent}25` }}>
            <div className="shrink-0 mt-[6px]">
              <div className="w-[6px] h-[6px] rounded-full" style={{ background: accent }} />
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-bold tracking-[0.1em] uppercase" style={{ color: accent, fontFamily: "'Inter', sans-serif" }}>
                {block.label}
              </span>
              <p className="text-[14px] leading-[22px]" style={{ color: "#334155", fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
                {block.text}
              </p>
            </div>
          </div>
        );
        if (block.type === "quote") return <blockquote key={i} className="pl-4 italic text-[15px] leading-[26px] text-[#64748b]" style={{ borderLeft: `3px solid ${accent}60` }}>{block.text}</blockquote>;
        if (block.type === "subheading") return (
          <div key={i} className="flex items-center gap-2 pt-1">
            <div className="h-px flex-1" style={{ background: `${accent}25` }} />
            <span className="text-[11px] font-bold tracking-[0.1em] uppercase shrink-0" style={{ color: accent }}>{block.text}</span>
            <div className="h-px flex-1" style={{ background: `${accent}25` }} />
          </div>
        );
        if (block.type === "bullets") return (
          <ul key={i} className="flex flex-col gap-3">
            {block.items.map((item, j) => (
              <li key={j} className="flex gap-3 items-start">
                <span className="mt-[9px] w-[5px] h-[5px] rounded-full shrink-0" style={{ background: accent }} />
                <span className="text-[14.5px] leading-[24px] text-[#334155]">
                  {item.term && <span className="font-semibold text-[#0f1729]">{item.term}</span>}
                  {item.term && <span className="text-[#64748b]"> — </span>}
                  {item.desc}
                </span>
              </li>
            ))}
          </ul>
        );
        if (block.type === "stat") return (
          <div key={i} className="rounded-[12px] p-5 flex flex-col sm:flex-row gap-4 sm:gap-5 items-center" style={{ background: `${accent}08`, border: `1px solid ${accent}20` }}>
            <div className="flex flex-col items-center shrink-0 px-4 py-2 rounded-[8px]" style={{ background: `${accent}15` }}>
              <span className="font-extrabold text-[28px] leading-none" style={{ color: accent, fontFamily: "'Montserrat',sans-serif" }}>{block.value}</span>
              <span className="text-[10px] font-bold tracking-[0.08em] uppercase mt-1" style={{ color: accent }}>{block.label}</span>
            </div>
            <p className="text-[13.5px] leading-[22px] text-[#475569] text-center sm:text-left">{block.footnote}</p>
          </div>
        );
        if (block.type === "output") return (
          <div key={i} className="rounded-[12px] px-5 py-4 flex gap-3 items-start" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
            <span className="text-[11px] font-bold tracking-[0.1em] uppercase px-2 py-0.5 rounded mt-[1px] shrink-0" style={{ background: `${accent}15`, color: accent }}>Output</span>
            <p className="text-[14px] leading-[22px] text-[#475569]">{block.text}</p>
          </div>
        );
        return null;
      })}
    </div>
  );
}

// INITIAL_NOTES now imported from @/lib/notes-data

const LockBox28 = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d={svgLogin.p10ff480} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
    <path d={svgLogin.p3cb09d00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
  </svg>
);
const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d={svgLogin.p1b122e80} stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d={svgLogin.p17a68100} stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  </svg>
);
const LockIcon18 = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d={svgLogin.p2ebe100} stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d={svgLogin.p160f9700} stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  </svg>
);
const EyeIcon = ({ color = "#94A3B8" }: { color?: string }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d={svgLogin.p2f0f2f00} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d={svgLogin.p254f3200} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  </svg>
);
const ShieldIcon12 = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d={svgLogin.p2b283480} stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" />
    <path d={svgLogin.pbc77700} stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ViewNotesIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d={svgAdmin.p1a6b1100} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    <path d={svgAdmin.p28db2b80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
  </svg>
);
const LogoutIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d={svgAdmin.p12257fa0} stroke="#DC2626" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    <path d={svgAdmin.p2c1f680} stroke="#DC2626" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    <path d="M14 8H6" stroke="#DC2626" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
  </svg>
);
const BackArrow = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M9 14.25L3.75 9L9 3.75" stroke="#475569" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d="M14.25 9H3.75" stroke="#475569" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  </svg>
);
const BookIcon = (color = "#2563EB") => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 4.08333V12.25" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
    <path d={svgAdmin.pdc6cb00} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
  </svg>
);
const LightningIcon14 = (color = "#F59E0B") => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d={svgAdmin.p33035500} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
  </svg>
);
const TrashIcon12 = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M1.5 3H10.5" stroke="#DC2626" strokeLinecap="round" strokeLinejoin="round" />
    <path d={svgAdmin.p3ba57a00} stroke="#DC2626" strokeLinecap="round" strokeLinejoin="round" />
    <path d={svgAdmin.p36919d00} stroke="#DC2626" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 5.5V8.5" stroke="#DC2626" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 5.5V8.5" stroke="#DC2626" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const SaveIcon16 = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d={svgAdmin.p3c401780} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    <path d={svgAdmin.p56b0600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    <path d={svgAdmin.p17caa400} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
  </svg>
);
const InfoCircle24 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d={svgAdmin.pace200} stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    <path d="M12 8V12" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    <path d="M12 16H12.01" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </svg>
);
const PlusIcon14 = (color = "#1D4ED8") => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2.91667 7H11.0833" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
    <path d="M7 2.91667V11.0833" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
  </svg>
);
const PlusIcon16 = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3.33333 8H12.6667" stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    <path d="M8 3.33333V12.6667" stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
  </svg>
);

function SectionIcon({ type, color }: { type: string; color: string }) {
  if (type === "plus") return <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 3.5V10.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" /><path d={svgDT.p14c49380} stroke={color} strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (type === "search") return <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d={svgDT.p1c92f080} stroke={color} strokeLinecap="round" strokeLinejoin="round" /><path d="M10.5 10.5L8.35 8.35" stroke={color} strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (type === "target") return <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d={svgDT.p3e7757b0} stroke={color} strokeLinecap="round" strokeLinejoin="round" /><path d={svgDT.p2b642900} stroke={color} strokeLinecap="round" strokeLinejoin="round" /><path d={svgDT.p62fc9c0} stroke={color} strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (type === "lightbulb" || type === "lightbulb-amber") return <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d={svgDT.p304dab80} stroke={color} strokeLinecap="round" strokeLinejoin="round" /><path d="M4.5 9H7.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" /><path d="M5 11H7" stroke={color} strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (type === "tool") return <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d={svgDT.p3aa9c7f0} stroke={color} strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (type === "check") return <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d={svgDT.p3e7757b0} stroke={color} strokeLinecap="round" strokeLinejoin="round" /><path d="M4.5 6L5.5 7L7.5 5" stroke={color} strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (type === "refresh") return <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d={svgDT.p3892d900} stroke={color} strokeLinecap="round" strokeLinejoin="round" /><path d="M1.5 1.5V4H4" stroke={color} strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (type === "box-amber") return <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d={svgPDLC.p24092800} stroke={color} strokeLinecap="round" strokeLinejoin="round" /><path d={svgPDLC.pf23600} stroke={color} strokeLinecap="round" strokeLinejoin="round" /><path d={svgPDLC.p3c2adf80} stroke={color} strokeLinecap="round" strokeLinejoin="round" /><path d={svgPDLC.p15b4d80} stroke={color} strokeLinecap="round" strokeLinejoin="round" /><path d={svgPDLC.p32c8de00} stroke={color} strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (type === "pencil-amber") return <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d={svgPDLC.p27b3900} stroke={color} strokeLinecap="round" strokeLinejoin="round" /><path d="M7.5 2.5L9.5 4.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (type === "flask-amber") return <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d={svgPDLC.p2cad4200} stroke={color} strokeLinecap="round" strokeLinejoin="round" /><path d="M3.2265 7.5H8.7735" stroke={color} strokeLinecap="round" strokeLinejoin="round" /><path d="M4.25 1H7.75" stroke={color} strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (type === "rocket-amber") return <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d={svgPDLC.p1a100280} stroke={color} strokeLinecap="round" strokeLinejoin="round" /><path d={svgPDLC.p31ac0800} stroke={color} strokeLinecap="round" strokeLinejoin="round" /><path d={svgPDLC.p19e1000} stroke={color} strokeLinecap="round" strokeLinejoin="round" /><path d={svgPDLC.p36906b80} stroke={color} strokeLinecap="round" strokeLinejoin="round" /></svg>;
  return <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="4" stroke={color} /></svg>;
}

function HeroIcon({ themeId }: { themeId: string }) {
  if (themeId === "pdlc") return <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d={svgPDLC.p3dadee40} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" /></svg>;
  return <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 6.41667V19.25" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" /><path d={svgDT.p3e957d00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" /></svg>;
}

function SectionHeadingIcon({ type, color }: { type: string; color: string }) {
  if (type === "lightbulb-amber" || type === "lightbulb") return <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d={svgPDLC.p1876f800} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M5.625 11.25H9.375" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M6.25 13.75H8.75" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /></svg>;
  return <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M7.5 4.375V13.125" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d={svgDT.p1b79fd00} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /></svg>;
}

const QUILL_MODULES = {
  toolbar: [
    [{ header: [1, 2, 3, false] }, { font: [] }, { size: [] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
    ["blockquote", "code-block", "link"],
    [{ align: [] }],
    ["clean"],
  ],
};
const QUILL_FORMATS = ["header", "font", "size", "bold", "italic", "underline", "strike", "color", "background", "list", "bullet", "indent", "blockquote", "code-block", "link", "align"];

const ADMIN_EMAIL = "hyyungnim@gmail.com";

function AdminLogin({ onSuccess, onClose }: { onSuccess: () => void; onClose: () => void }) {
  const [email, setEmail] = useState(""); const [pass, setPass] = useState(""); const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(""); const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true);
    try {
      if (email !== ADMIN_EMAIL) throw new Error("Invalid email or password.");
      await signInWithEmail(email, pass);
      onSuccess();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{ background: "linear-gradient(165.251deg, #eff6ff 8%, #f0fdf4 58%, #fafafa 91%)" }}>
      <div className="w-full max-w-[448px] flex flex-col items-center">
        {/* Icon + heading */}
        <div className="flex items-center justify-center rounded-[16px] mb-4" style={{ width: 64, height: 64, background: "#2563eb" }}>
          <LockBox28 />
        </div>
        <h1 className="font-extrabold text-[28px] leading-[42px] text-[#0f1729] text-center" style={{ fontFamily: "'Montserrat',sans-serif" }}>Admin Access</h1>
        <p className="text-[14px] text-[#64748b] text-center mt-2 mb-8">Sign in to access the content management system</p>

        {/* Card */}
        <div className="w-full rounded-[16px] p-[33px]" style={{ background: "#fff", border: "1px solid #e2e8f0", boxShadow: "0px 4px 10px rgba(0,0,0,0.08)" }}>
          <form onSubmit={submit} className="flex flex-col gap-0">
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[14px] text-[#475569]" style={{ fontFamily: "'Inter',sans-serif" }}>Email Address</label>
              <div className="relative">
                <div className="absolute left-3 top-[14.5px]"><EmailIcon /></div>
                <input type="email" value={email} onChange={e => { setEmail(e.target.value); setError(""); }} placeholder="Enter your email"
                  className="w-full h-[47px] pl-[45px] pr-4 rounded-[12px] text-[14px] outline-none transition-all"
                  style={{ border: "1px solid #e2e8f0", fontFamily: "'Inter',sans-serif", color: "#0f1729" }}
                  onFocus={e => (e.target.style.borderColor = "#2563EB")} onBlur={e => (e.target.style.borderColor = "#e2e8f0")} />
              </div>
            </div>
            {/* Password */}
            <div className="flex flex-col gap-2 pt-4 pb-6">
              <label className="font-semibold text-[14px] text-[#475569]" style={{ fontFamily: "'Inter',sans-serif" }}>Password</label>
              <div className="relative">
                <div className="absolute left-3 top-[14.5px]"><LockIcon18 /></div>
                <input type={showPass ? "text" : "password"} value={pass} onChange={e => { setPass(e.target.value); setError(""); }} placeholder="Enter your password"
                  className="w-full h-[47px] pl-[45px] pr-12 rounded-[12px] text-[14px] outline-none transition-all"
                  style={{ border: "1px solid #e2e8f0", fontFamily: "'Inter',sans-serif", color: "#0f1729" }}
                  onFocus={e => (e.target.style.borderColor = "#2563EB")} onBlur={e => (e.target.style.borderColor = "#e2e8f0")} />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-[14.5px] p-0">
                  <EyeIcon color={showPass ? "#2563EB" : "#94A3B8"} />
                </button>
              </div>
            </div>
            {error && <p className="text-[12px] text-red-500 mb-3" style={{ fontFamily: "'Inter',sans-serif" }}>{error}</p>}
            {/* Sign In */}
            <button type="submit" disabled={loading} className="w-full rounded-[12px] font-semibold text-[15.2px] text-white transition-all" style={{ height: 47, background: loading ? "#93c5fd" : "#2563eb", fontFamily: "'Inter',sans-serif" }}>
              {loading ? "Signing in…" : "Sign In"}
            </button>
            {/* Back */}
            <button type="button" onClick={onClose} className="w-full text-center text-[14px] text-[#64748b] underline mt-4" style={{ fontFamily: "'Inter',sans-serif" }}>Back to Notes</button>
          </form>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-2 mt-6">
          <ShieldIcon12 />
          <span className="text-[12px] text-[#94a3b8]" style={{ fontFamily: "'Inter',sans-serif" }}>Secure admin access · Your credentials are protected</span>
        </div>
      </div>
    </div>
  );
}

const THEME_OPTIONS = [
  { id: "dt", label: "Blue", color: "#2563EB" },
  { id: "pdlc", label: "Amber", color: "#F59E0B" },
  { id: "teal", label: "Teal", color: "#0d9488" },
  { id: "violet", label: "Violet", color: "#7c3aed" },
  { id: "rose", label: "Rose", color: "#ec4899" },
  { id: "emerald", label: "Emerald", color: "#10b981" },
  { id: "cyan", label: "Cyan", color: "#0891b2" },
  { id: "indigo", label: "Indigo", color: "#4f46e5" },
];
const SECTION_COLOR_OPTIONS = [
  { label: "Blue", color: "#2563EB" },
  { label: "Amber", color: "#F59E0B" },
  { label: "Teal", color: "#0d9488" },
  { label: "Violet", color: "#7c3aed" },
  { label: "Rose", color: "#ec4899" },
  { label: "Emerald", color: "#10b981" },
  { label: "Cyan", color: "#0891b2" },
  { label: "Indigo", color: "#4f46e5" },
];
const ICON_OPTIONS = ["plus", "search", "target", "lightbulb", "lightbulb-amber", "tool", "check", "refresh", "box-amber", "pencil-amber", "flask-amber", "rocket-amber"];

function AdminPanel({ notes, onSave, onClose, onLogout, onSaved }: { notes: EditableNote[]; onSave: (n: EditableNote[]) => void; onClose: () => void; onLogout: () => void; onSaved: (noteId: string) => void }) {
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);
  const [isNewNote, setIsNewNote] = useState(false);
  const [saved, setSaved] = useState(false);
  const [tagInput, setTagInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const blankNote = (): EditableNote => ({ id: `note-${Date.now()}`, themeId: "teal", title: "", subtitle: "", wordCount: "", tags: [], sections: [] });
  const [draft, setDraft] = useState<EditableNote>(blankNote());

  function startNew() { setDraft(blankNote()); setIsNewNote(true); setSelectedNoteId(null); }

  function startEdit(n: EditableNote) {
    const fresh = notes.find(x => x.id === n.id) ?? n;
    const copy = { ...fresh, sections: fresh.sections.map(s => ({ ...s })) };
    setDraft(copy);
    setIsNewNote(false);
    setSelectedNoteId(fresh.id);
  }

  function deleteNote(id: string) {
    onSave(notes.filter(n => n.id !== id));
    if (selectedNoteId === id) { setSelectedNoteId(null); setIsNewNote(false); }
  }

  // Push a new draft value to both local state AND the parent immediately.
  // For new notes we only push to parent when Create is clicked (note doesn't exist yet).
  function pushDraft(next: EditableNote) {
    setDraft(next);
    if (!isNewNote && next.id) {
      onSave(notes.map(n => n.id === next.id ? next : n));
    }
  }

  function updateDraft(patch: Partial<EditableNote>) {
    pushDraft({ ...draft, ...patch });
  }

  useEffect(() => {
    setTagInput(draft.tags.join(", "));
  }, [draft.id, draft.tags.join(",")]);

  function addSection() {
    const sec: EditableSection = { id: `sec-${Date.now()}`, label: "New Section", icon: "plus", badge: null, color: null, content: "" };
    pushDraft({ ...draft, sections: [...draft.sections, sec] });
  }

  function deleteSection(idx: number) {
    pushDraft({ ...draft, sections: draft.sections.filter((_, i) => i !== idx) });
  }

  function updateSection(idx: number, patch: Partial<EditableSection>) {
    pushDraft({ ...draft, sections: draft.sections.map((s, i) => i === idx ? { ...s, ...patch } : s) });
  }

  function addTagsFromInput() {
    const nextTags = tagInput.split(",").map(tag => tag.trim()).filter(Boolean);
    if (!nextTags.length) return;
    updateDraft({ tags: Array.from(new Set([...draft.tags, ...nextTags])) });
    setTagInput("");
  }

  function removeTag(tag: string) {
    updateDraft({ tags: draft.tags.filter(existing => existing !== tag) });
  }

  // For new notes: add to parent. For existing notes: already saved via pushDraft.
  // In both cases close the panel and navigate to the note.
  function saveDraft() {
    if (isNewNote) {
      onSave([...notes, draft]);
    }
    setSaved(true);
    // Short delay so user sees "Saved!" then lands on the note
    setTimeout(() => { onSaved(draft.id); }, 800);
  }

  const field = (label: string, value: string, onChange: (v: string) => void, placeholder: string, required = false) => (
    <div className="flex flex-col gap-1.5">
      <label className="font-semibold text-[12.8px] text-[#475569]" style={{ fontFamily: "'Inter',sans-serif" }}>{label}{required && " *"}</label>
      <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        className="w-full px-[13px] py-[9px] rounded-[8px] text-[14px] outline-none"
        style={{ border: "1px solid #e2e8f0", fontFamily: "'Inter',sans-serif", height: 39, color: "#0f1729" }}
        onFocus={e => (e.target.style.borderColor = "#2563EB")} onBlur={e => (e.target.style.borderColor = "#e2e8f0")} />
    </div>
  );

  const noteTheme = (n: EditableNote) => THEMES[n.themeId] ?? THEMES.teal;

  return (
    <div className="fixed inset-0 z-40 flex flex-col" style={{ background: "#f8fafc" }}>
      <style>{`
        .ql-editor { min-height: 200px; font-family: 'Inter', sans-serif; font-size: 14px; line-height: 1.7; color: #1e293b; }
        .ql-container.ql-snow { border: none !important; border-radius: 0 0 12px 12px; }
        .ql-toolbar.ql-snow { border: none !important; border-bottom: 1px solid #e2e8f0 !important; border-radius: 12px 12px 0 0; background: #f8fafc; padding: 8px 12px; flex-wrap: wrap; }
        .ql-snow .ql-picker-label { color: #64748b; }
        .ql-snow .ql-stroke { stroke: #64748b; }
        .ql-snow .ql-fill { fill: #64748b; }
        .ql-snow button:hover .ql-stroke { stroke: #1e293b; }
        .ql-editor.ql-blank::before { color: #94a3b8; font-style: normal; }
      `}</style>

      {/* Top nav */}
      <div className="shrink-0 w-full" style={{ background: "rgba(255,255,255,0.95)", borderBottom: "1px solid #e2e8f0", position: "sticky", top: 0, zIndex: 10 }}>
        <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-[1152px]">
          <div className="flex items-center gap-3">
            <button onClick={() => { if (isNewNote) onSave([...notes, draft]); onSaved(draft.id); }} className="p-2 rounded-[8px] hover:bg-slate-100 transition-colors"><BackArrow /></button>
            <div>
              <p className="font-bold text-[19.2px] text-[#1e293b] leading-tight" style={{ fontFamily: "'Montserrat',sans-serif" }}>Admin Panel</p>
              <p className="text-[12px] text-[#94a3b8]" style={{ fontFamily: "'Inter',sans-serif" }}>Content Management System</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => { if (isNewNote) onSave([...notes, draft]); onSaved(draft.id); }} className="flex items-center gap-2 px-4 py-2 rounded-[8px] text-[14px] text-white transition-colors" style={{ background: "#2563EB", fontFamily: "'Inter',sans-serif" }}>
              <ViewNotesIcon /> <span className="hidden sm:inline">View Notes</span>
            </button>
            <button onClick={onLogout} className="flex items-center gap-2 px-4 py-2 rounded-[8px] text-[14px] text-[#dc2626] transition-colors" style={{ border: "1px solid #fca5a5", fontFamily: "'Inter',sans-serif" }}>
              <LogoutIcon /> <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-[1152px] px-4 sm:px-6 py-8 flex flex-col lg:flex-row gap-6">

          {/* Left: existing notes */}
          <div className="w-full lg:w-[352px] shrink-0">
            <div className="rounded-[16px] p-[21px]" style={{ background: "#fff", border: "1px solid #e2e8f0" }}>
              <h2 className="font-bold text-[15.2px] text-[#1e293b] mb-3" style={{ fontFamily: "'Montserrat',sans-serif" }}>
                Existing Notes ({notes.length})
              </h2>
              <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search notes..."
                className="w-full px-[13px] py-[9px] rounded-[8px] text-[13px] outline-none mb-3"
                style={{ border: "1px solid #e2e8f0", fontFamily: "'Inter',sans-serif", height: 36, color: "#0f1729" }}
                onFocus={e => (e.target.style.borderColor = "#2563EB")} onBlur={e => (e.target.style.borderColor = "#e2e8f0")} />
              <div className="flex flex-col gap-2 mt-4 max-h-[60vh] overflow-y-auto">
                {notes.filter(n => !searchQuery || n.title.toLowerCase().includes(searchQuery.toLowerCase()) || n.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))).map(n => {
                  const t = noteTheme(n);
                  return (
                    <div key={n.id} className="rounded-[12px] p-[13px]" style={{ background: "#f8fafc", border: "1px solid #f1f5f9" }}>
                      <div className="flex items-start gap-2 mb-2">
                        <div className="mt-0.5 shrink-0">{n.themeId === "pdlc" ? LightningIcon14(t.accentColor) : BookIcon(t.accentColor)}</div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-[12.8px] text-[#1e293b] truncate" style={{ fontFamily: "'Inter',sans-serif" }}>{n.title || "Untitled"}</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full font-medium" style={{ background: `${t.accentColor}15`, color: t.accentColor }}>{n.sections.length} sections</span>
                            {n.wordCount && <span className="text-[10px] text-[#94a3b8]">{n.wordCount}</span>}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 h-[28px]">
                        <button onClick={() => startEdit(n)} className="flex-1 h-full rounded-[8px] text-[11.5px] font-semibold text-center transition-colors" style={{ background: `${t.accentColor}14`, color: t.accentColor, fontFamily: "'Inter',sans-serif" }}>Edit</button>
                        <button onClick={() => deleteNote(n.id)} className="w-[32px] h-full rounded-[8px] flex items-center justify-center" style={{ background: "#fee2e2" }}><TrashIcon12 /></button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button onClick={startNew} className="flex items-center justify-center gap-2 w-full rounded-[12px] px-[18px] py-[10px] mt-4 text-[14px] text-[#64748b] transition-colors hover:bg-slate-50"
                style={{ border: "2px dashed #cbd5e1", fontFamily: "'Inter',sans-serif" }}>
                <PlusIcon16 /> New Note
              </button>
            </div>
          </div>

          {/* Right: create/edit form */}
          {(isNewNote || selectedNoteId) ? (
            <div className="flex-1 min-w-0">
              <div className="rounded-[16px] p-[25px]" style={{ background: "#fff", border: "1px solid #e2e8f0" }}>
                <h2 className="font-bold text-[17.6px] text-[#1e293b] mb-6" style={{ fontFamily: "'Montserrat',sans-serif" }}>
                  {isNewNote ? "Create New Note" : `Edit: ${draft.title || "Note"}`}
                </h2>
                <div className="flex flex-col gap-4">
                  {field("Note Title", draft.title, v => updateDraft({ title: v }), "e.g., Design Thinking", true)}
                  {field("Subtitle", draft.subtitle, v => updateDraft({ subtitle: v }), "e.g., A Human-Centered Approach to Innovation", true)}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-semibold text-[12.8px] text-[#475569]" style={{ fontFamily: "'Inter',sans-serif" }}>Color Theme</label>
                      <div className="flex gap-2 flex-wrap">
                        {THEME_OPTIONS.map(t => (
                          <button key={t.id} onClick={() => updateDraft({ themeId: t.id })}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all"
                            style={{ background: draft.themeId === t.id ? t.color + "20" : "#f1f5f9", border: `1.5px solid ${draft.themeId === t.id ? t.color : "transparent"}`, color: draft.themeId === t.id ? t.color : "#64748b" }}>
                            <div className="w-2 h-2 rounded-full" style={{ background: t.color }} />{t.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    {field("Word Count", draft.wordCount, v => updateDraft({ wordCount: v }), "e.g., ~2,800")}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-[12.8px] text-[#475569]" style={{ fontFamily: "'Inter',sans-serif" }}>Tags</label>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                      <input value={tagInput} onChange={e => setTagInput(e.target.value)} onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); addTagsFromInput(); } }} placeholder="Type a tag and press Enter"
                        className="flex-1 px-[13px] py-[9px] rounded-[8px] text-[14px] outline-none"
                        style={{ border: "1px solid #e2e8f0", fontFamily: "'Inter',sans-serif", height: 39, color: "#0f1729" }}
                        onFocus={e => (e.target.style.borderColor = "#2563EB")} onBlur={e => (e.target.style.borderColor = "#e2e8f0")} />
                      <button type="button" onClick={addTagsFromInput} className="px-3 py-2 rounded-[8px] text-[12px] font-semibold text-white" style={{ background: "#2563EB", fontFamily: "'Inter',sans-serif" }}>Add Tag</button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {draft.tags.map(tag => (
                        <button key={tag} type="button" onClick={() => removeTag(tag)} className="flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium" style={{ background: "#eff6ff", color: "#1d4ed8" }}>
                          <span>{tag}</span>
                          <span className="text-[10px]">×</span>
                        </button>
                      ))}
                    </div>
                    <p className="text-[11px] text-[#64748b]" style={{ fontFamily: "'Inter',sans-serif" }}>Add as many tags as you want. Separate them with commas or press Enter.</p>
                  </div>

                  {/* Sections */}
                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-[15.2px] text-[#1e293b]" style={{ fontFamily: "'Montserrat',sans-serif" }}>Sections ({draft.sections.length})</h3>
                      <button onClick={addSection} className="flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] text-[12.8px] text-[#1d4ed8]" style={{ background: "#eff6ff", fontFamily: "'Inter',sans-serif" }}>
                        {PlusIcon14()} Add Section
                      </button>
                    </div>

                    {draft.sections.length === 0 ? (
                      <div className="rounded-[12px] p-[26px] flex flex-col items-center gap-2" style={{ border: "2px dashed #e2e8f0" }}>
                        <InfoCircle24 />
                        <p className="text-[14px] text-[#64748b] text-center" style={{ fontFamily: "'Inter',sans-serif" }}>No sections yet. Click "Add Section" to get started.</p>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-4">
                        {draft.sections.map((sec, idx) => (
                          <div key={sec.id} className="rounded-[12px] p-[17px]" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
                            {/* Section header */}
                            <div className="flex items-center justify-between mb-3">
                              <span className="font-semibold text-[12px] text-[#94a3b8] tracking-wider uppercase" style={{ fontFamily: "'Inter',sans-serif" }}>Section {idx + 1}</span>
                              <button onClick={() => deleteSection(idx)} className="p-1 rounded-[4px] hover:bg-red-50 transition-colors"><TrashIcon12 /></button>
                            </div>

                            {/* Icon + Color row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                              <div>
                                <label className="font-semibold text-[12px] text-[#64748b] block mb-1" style={{ fontFamily: "'Inter',sans-serif" }}>Icon</label>
                                <div className="flex flex-wrap gap-1.5">
                                  {ICON_OPTIONS.map(ic => (
                                    <button key={ic} onClick={() => updateSection(idx, { icon: ic })} className="p-1.5 rounded-[6px] transition-all"
                                      style={{ background: sec.icon === ic ? "#eff6ff" : "#fff", border: `1px solid ${sec.icon === ic ? "#2563EB" : "#e2e8f0"}` }}>
                                      <SectionIcon type={ic} color={sec.icon === ic ? "#2563EB" : "#94a3b8"} />
                                    </button>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <label className="font-semibold text-[12px] text-[#64748b] block mb-1" style={{ fontFamily: "'Inter',sans-serif" }}>Color</label>
                                <div className="flex gap-2 flex-wrap">
                                  <button type="button" onClick={() => updateSection(idx, { color: null })} className="px-2 py-1 rounded-full text-[11px] font-semibold transition-all" style={{ background: sec.color ? "#f1f5f9" : "#eff6ff", color: sec.color ? "#64748b" : "#1d4ed8", border: `1px solid ${sec.color ? "#e2e8f0" : "#bfdbfe"}` }}>
                                    Auto
                                  </button>
                                  {SECTION_COLOR_OPTIONS.map(option => (
                                    <button key={option.color} type="button" onClick={() => updateSection(idx, { color: option.color })}
                                      className="w-6 h-6 rounded-full transition-all" style={{ background: option.color, outline: "none", boxShadow: sec.color === option.color ? `0 0 0 2px #fff, 0 0 0 4px ${option.color}` : "none" }} title={option.label} />
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Section title */}
                            <div className="mb-3">
                              <label className="font-semibold text-[12px] text-[#64748b] block mb-1" style={{ fontFamily: "'Inter',sans-serif" }}>Section Title *</label>
                              <input value={sec.label} onChange={e => updateSection(idx, { label: e.target.value })} placeholder="e.g., Stage 1 — Empathize"
                                className="w-full px-[9px] py-[7px] rounded-[8px] text-[14px] outline-none"
                                style={{ border: "1px solid #e2e8f0", fontFamily: "'Inter',sans-serif", height: 34 }}
                                onFocus={e => (e.target.style.borderColor = "#2563EB")} onBlur={e => (e.target.style.borderColor = "#e2e8f0")} />
                            </div>

                            {/* Badge row */}
                            <div className="mb-3">
                              <label className="font-semibold text-[11.2px] text-[#64748b] block mb-1" style={{ fontFamily: "'Inter',sans-serif" }}>Badge (optional)</label>
                              <input value={sec.badge ?? ""} onChange={e => updateSection(idx, { badge: e.target.value || null })}
                                placeholder="e.g., Foundation"
                                className="w-full px-[9px] py-[5px] rounded-[4px] text-[12px] outline-none"
                                style={{ border: "1px solid #e2e8f0", fontFamily: "'Inter',sans-serif", height: 26 }}
                                onFocus={e => (e.target.style.borderColor = "#2563EB")} onBlur={e => (e.target.style.borderColor = "#e2e8f0")} />
                            </div>

                            {/* Content / React Quill */}
                            <div>
                              <label className="font-semibold text-[12px] text-[#64748b] block mb-1.5" style={{ fontFamily: "'Inter',sans-serif" }}>Content *</label>
                              <div className="rounded-[12px] overflow-hidden" style={{ border: "1px solid #e2e8f0", background: "#fff" }}>
                                <ReactQuill
                                  key={sec.id}
                                  theme="snow"
                                  value={sec.isHtml ? sec.content : sec.blocks && sec.blocks.length > 0 ? blocksToHtml(sec.blocks) : sec.content.split("\n").filter(Boolean).map(l => `<p>${l}</p>`).join("")}
                                  onChange={(html: string) => updateSection(idx, { content: html, isHtml: true, blocks: undefined })}
                                  modules={QUILL_MODULES}
                                  formats={QUILL_FORMATS}
                                  placeholder="Write your content here... Use bullet points with • symbol."
                                />
                              </div>
                              <div className="rounded-[4px] px-2 py-1.5 mt-2" style={{ background: "#f8fafc" }}>
                                <span className="font-bold text-[12px] text-[#475569]" style={{ fontFamily: "'Inter',sans-serif" }}>Formatting: </span>
                                <span className="text-[12px] text-[#64748b]" style={{ fontFamily: "'Inter',sans-serif" }}>**bold**, *italic*, `code`, ~~strikethrough~~, [link text](url)</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Save button */}
                  <button onClick={saveDraft} className="flex items-center justify-center gap-2 w-full rounded-[12px] h-[44px] text-[16px] font-semibold text-white mt-4 transition-all"
                    style={{ background: saved ? "#10B981" : "#2563eb", fontFamily: "'Inter',sans-serif" }}>
                    <SaveIcon16 /> {saved ? "Saved!" : isNewNote ? "Create Note" : "Changes Saved"}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <InfoCircle24 />
                <p className="text-[14px] text-[#94a3b8] mt-3" style={{ fontFamily: "'Inter',sans-serif" }}>Select a note to edit, or create a new one</p>
                <button onClick={startNew} className="mt-4 px-6 py-2.5 rounded-[12px] text-[14px] font-semibold text-white" style={{ background: "#2563eb", fontFamily: "'Inter',sans-serif" }}>+ New Note</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const STORAGE_KEY = "hyyung-ux-notes-v4";
const SUPABASE_TABLE = "notes";
const NOTES_VERSION = "v4";

function navigateTo(path: string, setPath: (value: string) => void) {
  const nextPath = path === "/" ? "/" : path;
  if (typeof window !== "undefined") {
    window.history.pushState({}, "", nextPath);
  }
  setPath(nextPath);
}

export default function App() {
  const [notes, setNotes] = useState<EditableNote[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.version === NOTES_VERSION && Array.isArray(parsed.notes)) {
          return parsed.notes as EditableNote[];
        }
      }
    } catch {}
    return INITIAL_NOTES;
  });
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeNoteId, setActiveNoteId] = useState<string>(INITIAL_NOTES[0]?.id ?? "basics-ux");
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [adminAuthed, setAdminAuthed] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [currentPath, setCurrentPath] = useState<string>(() => (typeof window !== "undefined" ? window.location.pathname : "/"));
  const [viewedSections, setViewedSections] = useState<Set<string>>(() => {
    try {
      const stored = localStorage.getItem("hyyung-viewed-sections");
      return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch { return new Set(); }
  });

  // Persist every change to localStorage so edits survive re-renders and refreshes
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: NOTES_VERSION, notes })); } catch {}
  }, [notes]);

  // Persist viewed sections
  useEffect(() => {
    try { localStorage.setItem("hyyung-viewed-sections", JSON.stringify(Array.from(viewedSections))); } catch {}
  }, [viewedSections]);

  const completedNotes = notes.filter(n => n.sections.every(s => viewedSections.has(s.id)));
  const allCompleted = notes.length > 0 && completedNotes.length === notes.length;

  useEffect(() => {
    const loadNotes = async () => {
      if (!isSupabaseConfigured || !supabase) {
        setIsHydrated(true);
        return;
      }

      try {
        const { data, error } = await supabase.from(SUPABASE_TABLE).select("payload").order("created_at", { ascending: true });
        if (!error && data && data.length > 0) {
          const remoteNotes = data.map((row: { payload: { version: string; notes: EditableNote[] } }) => row.payload).filter(Boolean) as { version: string; notes: EditableNote[] }[];
          const valid = remoteNotes.find(r => r.version === NOTES_VERSION);
          if (valid?.notes?.length) {
            setNotes(valid.notes);
            try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: NOTES_VERSION, notes: valid.notes })); } catch {}
          }
        }
      } catch {}
      setIsHydrated(true);
    };

    loadNotes();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

const firstNote = notes[0] ?? INITIAL_NOTES[0];
const activeNote = notes.find(n => n.id === activeNoteId) ?? firstNote;

// Add this line
const theme = THEMES[activeNote.themeId] ?? THEMES.teal;

const sectionCount = activeNote.sections.length;
  const sectionIndex = Math.max(0, Math.min(activeSectionIdx, sectionCount - 1));
  const section = activeNote.sections[sectionIndex];
  const sectionAccent = section?.color ? section.color : theme.accentColor;
  const hasSection = sectionCount > 0;
  const isFirst = !hasSection || sectionIndex === 0;
  const isLast = !hasSection || sectionIndex === sectionCount - 1;

  useEffect(() => {
    if (!hasSection) {
      setActiveSectionIdx(0);
      return;
    }

    if (activeSectionIdx >= sectionCount) {
      setActiveSectionIdx(sectionCount - 1);
    }
  }, [activeNoteId, sectionCount, activeSectionIdx, hasSection]);

  // Mark current section as viewed
  useEffect(() => {
    if (section && !viewedSections.has(section.id)) {
      setViewedSections(prev => new Set(prev).add(section.id));
    }
  }, [section?.id]);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeSectionIdx, activeNoteId]);

  function switchNote(id: string) { setActiveNoteId(id); setActiveSectionIdx(0); setSidebarOpen(false); }
  function goToNotes() { navigateTo("/notes", setCurrentPath); }
  const isNotesRoute = currentPath === "/notes";
  const isAdminRoute = currentPath === "/admin" || currentPath.startsWith("/admin/");

  useEffect(() => {
    if (!isHydrated) return;

    const persistNotes = async () => {
      if (!isSupabaseConfigured || !supabase) return;

      try {
        const { error } = await supabase.from(SUPABASE_TABLE).upsert(
          [{ id: "app-notes", payload: { version: NOTES_VERSION, notes }, created_at: new Date().toISOString() }],
          { onConflict: "id" }
        );
        if (error) {
          console.error("Supabase save failed", error);
        }
      } catch (error) {
        console.error("Supabase save failed", error);
      }
    };

    persistNotes();
  }, [notes, isHydrated]);

  const sidebarContent = (
    <>
      {/* Header */}
      <div className="flex flex-col px-5 pt-5 pb-3 shrink-0" style={{ borderBottom: "1px solid #f1f5f9" }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d={svgDT.p28a13700} stroke="#2563EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" /><path d={svgDT.p19d1d100} stroke="#2563EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" /></svg>
            <span className="font-bold text-[13.6px] text-[#1e293b]" style={{ fontFamily: "'Montserrat',sans-serif" }}>Hyyung's UX Notes</span>
          </div>
        </div>
        <p className="text-[10.88px] text-[#94a3b8] mt-0.5">{notes.length} notes · Product &amp; Design</p>
      </div>

      {/* Note cards — scrollable */}
      <div className="flex-1 overflow-y-auto min-h-0 px-3 pt-2 pb-1">
        <div className="flex flex-col gap-1.5">
          {notes.map(n => {
            const t = THEMES[n.themeId] ?? THEMES.teal;
            const isActive = n.id === activeNoteId;
            return (
              <button key={n.id} onClick={() => switchNote(n.id)} className="rounded-[10px] p-[10px] text-left w-full transition-all"
                style={{ background: isActive ? t.noteCardActiveBg : "#f8fafc", border: `1px solid ${isActive ? t.noteCardActiveBorder : "#f1f5f9"}` }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ background: isActive ? t.accentDark : "#94A3B8" }} />
                  <span className="font-semibold text-[11.68px] truncate" style={{ color: isActive ? t.accentDark : "#475569", fontFamily: "'Inter',sans-serif" }}>{n.title}</span>
                  {n.sections.length > 0 && n.sections.every(s => viewedSections?.has(s.id)) && (
                    <svg className="shrink-0" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 5L4.5 7L7.5 3" stroke={t.accentColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  )}
                </div>
                <p className="text-[9.92px] text-[#94a3b8] mt-0.5 truncate">{n.subtitle}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sections — always visible above tags */}
      <div className="px-3 pt-2 pb-1 shrink-0" style={{ borderTop: "1px solid #f1f5f9" }}>
        <p className="text-[9.6px] font-bold tracking-[0.96px] uppercase text-[#94a3b8] px-1 mb-1.5">Sections</p>
        <div className="flex flex-col gap-0.5 max-h-[180px] overflow-y-auto">
          {activeNote.sections.map((s, i) => {
            const theme = THEMES[activeNote.themeId] ?? THEMES.teal;
            const isActive = i === activeSectionIdx;
            const iconColor = isActive ? theme.accentColor : "#94A3B8";
            return (
              <button key={s.id} onClick={() => { setActiveSectionIdx(i); setSidebarOpen(false); }}
                className="flex items-center gap-[10px] px-[10px] py-[7px] rounded-[8px] text-left w-full transition-all"
                style={{ background: isActive ? theme.accentLight : "transparent", border: `1px solid ${isActive ? theme.accentBorder : "transparent"}` }}>
                <SectionIcon type={s.icon} color={iconColor} />
                <span className="flex-1 text-[11.2px] truncate" style={{ fontWeight: isActive ? 600 : 400, color: isActive ? theme.accentColor : "#64748b", fontFamily: "'Inter', sans-serif" }}>{s.label}</span>
                {isActive && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3.75 7.5L6.25 5L3.75 2.5" stroke={theme.accentColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" /></svg>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tags */}
      <div className="px-3 pt-2 pb-3 shrink-0" style={{ borderTop: "1px solid #f1f5f9" }}>
        <p className="text-[9.6px] font-bold tracking-[0.96px] uppercase text-[#94a3b8] px-1 mb-1.5">Tags</p>
        <div className="flex flex-wrap gap-1.5">
          {activeNote.tags.map(tag => (
            <div key={tag} className="flex items-center gap-1 px-2 py-0.5 rounded-full" style={{ background: "#f1f5f9" }}>
              <svg width="7" height="7" viewBox="0 0 7 7" fill="none"><path d={svgDT.p31d9b5f0} stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.583333" /><path d={svgDT.p2c6ba400} fill="#94A3B8" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.583333" /></svg>
              <span className="text-[9.28px] font-medium text-[#475569]">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  async function handleAuthSuccess(email: string, name: string) {
    setHasAccess(true);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("hyyung-landing-auth", JSON.stringify({ name, email, authedAt: new Date().toISOString() }));
      } catch {}
    }
    navigateTo("/notes", setCurrentPath);
  }

  useEffect(() => {
    const checkSession = async () => {
      const stored = localStorage.getItem("hyyung-landing-auth");
      if (stored) {
        setHasAccess(true);
        return;
      }
      try {
        const session = await getCurrentSession();
        if (session) {
          setHasAccess(true);
        }
      } catch {}
    };
    checkSession();
  }, []);

  if (isAdminRoute) {
    return (
      <>
        {adminAuthed ? (
          <AdminPanel
            notes={notes}
            onSave={setNotes}
            onClose={() => { navigateTo("/notes", setCurrentPath); }}
            onLogout={async () => { try { await signOutUser(); } catch {} setAdminAuthed(false); navigateTo("/notes", setCurrentPath); }}
            onSaved={(noteId) => {
              setActiveNoteId(noteId);
              setActiveSectionIdx(0);
              navigateTo("/notes", setCurrentPath);
            }}
          />
        ) : (
          <AdminLogin
            onSuccess={() => setAdminAuthed(true)}
            onClose={() => { navigateTo("/notes", setCurrentPath); }}
          />
        )}
      </>
    );
  }

  if (isNotesRoute) {
    if (!hasAccess) {
      navigateTo("/", setCurrentPath);
      return null;
    }

  return (
    <>
      <style>{`
        .html-content h1 { font-size:20px;font-weight:700;margin:14px 0 6px;color:#0f1729;font-family:'Montserrat',sans-serif }
        .html-content h2 { font-size:16px;font-weight:700;margin:12px 0 5px;color:#0f1729;font-family:'Montserrat',sans-serif }
        .html-content h3 { font-size:14px;font-weight:600;margin:10px 0 4px;color:#1e293b }
        .html-content p { margin:5px 0;font-size:15px;line-height:26px;color:#1e293b }
        .html-content ul,.html-content ol { padding-left:20px;margin:8px 0 }
        .html-content li { margin:4px 0;font-size:14.5px;line-height:24px;color:#334155 }
        .html-content blockquote { border-left:3px solid #e2e8f0;padding-left:14px;color:#64748b;font-style:italic;margin:10px 0 }
        .html-content strong { font-weight:700;color:#0f1729 }
        .html-content code { background:#f1f5f9;padding:1px 5px;border-radius:4px;font-family:monospace;font-size:13px }
        .html-content pre { background:#f1f5f9;padding:12px;border-radius:8px;overflow-x:auto }
        body { font-family:'Inter',sans-serif }
      `}</style>

      <div className="min-h-screen w-full flex" style={{ background: "#f8fafc", fontFamily: "'Inter',sans-serif" }}>

        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-30 flex">
            <div className="w-72 flex flex-col shrink-0 overflow-hidden" style={{ background: "#ffffff", borderRight: "1px solid #e2e8f0" }}>
              {sidebarContent}
            </div>
            <div className="flex-1 bg-black/40" onClick={() => setSidebarOpen(false)} />
          </div>
        )}

        {/* Desktop sticky sidebar */}
        <aside className="hidden lg:flex flex-col shrink-0"
          style={{ width: 288, height: "100vh", position: "sticky", top: 0, background: "#ffffff", borderRight: "1px solid #e2e8f0" }}>
          {sidebarContent}
        </aside>

        {/* Main content */}
        <div ref={contentRef} className="flex-1 flex flex-col min-w-0 overflow-y-auto" style={{ height: "100vh" }}>
          {/* Toolbar */}
          <div className="flex items-center justify-between px-4 sm:px-8 py-3 shrink-0"
            style={{ background: "rgba(248,250,252,0.95)", backdropFilter: "blur(8px)", borderBottom: "1px solid #e2e8f0", position: "sticky", top: 0, zIndex: 10 }}>
            <div className="flex items-center gap-2 min-w-0">
              {/* Back to Home */}
              <button onClick={() => { navigateTo("/", setCurrentPath); }} className="flex items-center gap-1.5 p-1.5 rounded-[8px] text-[12px] font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="hidden sm:inline">Home</span>
              </button>
              <div className="w-px h-4 bg-slate-200 mx-1" />
              {/* Hamburger — mobile only */}
              <button className="lg:hidden p-2 rounded-[8px] hover:bg-slate-100 mr-1 shrink-0" onClick={() => setSidebarOpen(true)}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4h12M2 8h12M2 12h12" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </button>
              <span className="font-bold text-[12.48px] text-[#1e293b] truncate" style={{ fontFamily: "'Montserrat',sans-serif" }}>{activeNote.title}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0"><path d="M4.5 9L7.5 6L4.5 3" stroke="#CBD5E1" strokeLinecap="round" strokeLinejoin="round" /></svg>
              {section && <span className="text-[11.68px] text-[#64748b] truncate hidden sm:block">{section.label}</span>}
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button className="p-[6px] rounded-[8px]" style={{ background: theme.accentMuted }}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 9.20833V11.9167" stroke={theme.accentColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" /><path d={svgDT.p2fbc0600} stroke={theme.accentColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" /></svg>
              </button>
            </div>
          </div>

          {/* Hero */}
          <div className="px-4 sm:px-10 pt-8 sm:pt-10 pb-[33px]" style={{ background: theme.heroGradient, borderBottom: "1px solid #e2e8f0" }}>
            <div className="flex items-start gap-4 max-w-[768px]">
              <div className="mt-1 shrink-0">
                <div className="flex items-center justify-center rounded-[16px]" style={{ width: 48, height: 48, background: theme.iconBg }}>
                  <HeroIcon themeId={activeNote.themeId} />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="font-extrabold text-[22px] sm:text-[26.4px] leading-tight text-[#0f1729]" style={{ fontFamily: "'Montserrat',sans-serif" }}>{activeNote.title}</h1>
                <p className="text-[13px] sm:text-[13.6px] text-[#64748b] mt-1">{activeNote.subtitle}</p>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-3">
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d={svgDT.p1f658e00} stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" /><path d={svgDT.p105d7900} stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" /></svg>
                  <span className="text-[10.72px] text-[#94a3b8]">Last edited: June 25, 2026</span>
                  <span className="text-[11.2px] text-[#cbd5e1]">·</span>
                  <span className="text-[10.72px] text-[#94a3b8]">{activeNote.sections.length} sections · {activeNote.wordCount}</span>
                </div>
                {/* Section progress bar */}
                {sectionCount > 0 && (
                  <div className="mt-3 flex items-center gap-3">
                    <div className="flex-1 h-1.5 rounded-full bg-slate-200 overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-500" style={{ width: `${Math.round((completedNotes.find(n => n.id === activeNoteId)?.sections.filter(s => viewedSections.has(s.id)).length ?? 0) / sectionCount * 100)}%`, background: theme.accentColor }} />
                    </div>
                    <span className="text-[10.5px] font-medium" style={{ color: theme.accentColor }}>
                      {completedNotes.find(n => n.id === activeNoteId)?.sections.filter(s => viewedSections.has(s.id)).length ?? 0}/{sectionCount}
                    </span>
                  </div>
                )}
                {/* Achievement: overall note completion */}
                {allCompleted && (
                  <div className="mt-3 flex items-center gap-2 rounded-[8px] px-3 py-1.5" style={{ background: `${theme.accentColor}10`, border: `1px solid ${theme.accentColor}25` }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1.75L8.6475 5.0575L12.25 5.5975L9.625 8.155L10.295 11.75L7 9.97L3.705 11.75L4.375 8.155L1.75 5.5975L5.3525 5.0575L7 1.75Z" fill={theme.accentColor} />
                    </svg>
                    <span className="text-[11px] font-semibold" style={{ color: theme.accentColor }}>All {notes.length} notes completed! ★</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Section content */}
          {section ? (
            <div className="px-4 sm:px-10 py-6 sm:py-8 max-w-[768px] w-full">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center rounded-[12px] shrink-0" style={{ width: 36, height: 36, background: theme.accentMuted }}>
                  <SectionHeadingIcon type={section.icon} color={theme.accentColor} />
                </div>
                <div className="flex flex-wrap items-center gap-2 min-w-0">
                  <h2 className="font-bold text-[16px] sm:text-[16.8px] text-[#0f1729]" style={{ fontFamily: "'Montserrat',sans-serif" }}>{section.label}</h2>
                  {section.badge && <span className="text-[10.72px] font-semibold px-[10px] py-[2px] rounded-full shrink-0" style={{ background: theme.accentPill.bg, color: theme.accentPill.text }}>{section.badge}</span>}
                </div>
              </div>
              <div className="mt-5 mb-6 h-px rounded" style={{ background: `linear-gradient(to right, ${theme.dividerFrom}, transparent)` }} />
              <div className="rounded-[16px] px-4 sm:px-[29px] py-5 sm:py-[25px]" style={{ background: "#ffffff", border: "1px solid #e2e8f0", boxShadow: "0px 1px 4px rgba(0,0,0,0.04)" }}>
                {section.blocks && section.blocks.length > 0 ? (
                  // Blocks always take priority — the block renderer owns the design.
                  <RichContent blocks={section.blocks as Block[]} accent={sectionAccent} />
                ) : section.isHtml && section.content ? (
                  <div className="html-content" style={{ fontFamily: "'Inter',sans-serif" }} dangerouslySetInnerHTML={{ __html: section.content }} />
                ) : (
                  <p className="text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-black" style={{ whiteSpace: "pre-line" }}>{section.content}</p>
                )}
              </div>

              {/* Prev/Next */}
              <div className="flex items-center justify-between mt-6">
                <button onClick={() => setActiveSectionIdx(p => Math.max(0, p - 1))} disabled={isFirst}
                  className="px-3 py-2 rounded-[8px] text-[11.68px] font-medium text-[#64748b]"
                  style={{ background: "#f1f5f9", opacity: isFirst ? 0.35 : 1, cursor: isFirst ? "default" : "pointer" }}>
                  ← Previous
                </button>
                <span className="text-[10.72px] text-[#94a3b8]">{activeSectionIdx + 1} of {activeNote.sections.length}</span>
                <button onClick={() => setActiveSectionIdx(p => Math.min(activeNote.sections.length - 1, p + 1))} disabled={isLast}
                  className="px-3 py-2 rounded-[8px] text-[11.68px] font-medium text-white"
                  style={{ background: isLast ? `${sectionAccent}80` : sectionAccent, cursor: isLast ? "default" : "pointer" }}>
                  Next →
                </button>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center px-6 py-12">
              <div className="text-center">
                <InfoCircle24 />
                <p className="text-[14px] text-[#94a3b8] mt-3">No sections yet. Add content through the admin workspace.</p>
              </div>
            </div>
          )}
        </div>
      </div>

    </>
  );
  }

  return <LandingPage onAuthSuccess={handleAuthSuccess} />;
}
