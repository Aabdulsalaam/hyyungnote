import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import svgLogin from "@/imports/Notes-2/svg-bix1q8uy1z";
import svgAdmin from "@/imports/Notes-3/svg-5vzq3h17ph";
import svgDT from "@/imports/Notes/svg-d6yohho28q";
import svgPDLC from "@/imports/Notes-1/svg-ursbprr9kn";
import { isSupabaseConfigured, supabase, fetchAggregatedAnalytics, updateUserAnalytics, updateUserPassword } from "@/lib/supabase";
import type { AggregatedAnalytics } from "@/lib/supabase";
import { signInWithEmail, signOutUser, getCurrentSession } from "@/lib/supabase";
import { INITIAL_NOTES } from "@/lib/notes-data";
import { PRACTICE_DATA } from "@/lib/practice-data";
import LandingPage from "@/app/components/LandingPage";

type Block =
  | { type: "para"; text: string }
  | { type: "callout"; label: string; text: string }
  | { type: "quote"; text: string }
  | { type: "subheading"; text: string }
  | { type: "bullets"; items: { term?: string; desc: string }[] }
  | { type: "stat"; value: string; label: string; footnote: string }
  | { type: "output"; text: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "quiz"; question: string; options: string[]; correctIndex: number; explanation?: string }
  | { type: "glossary"; terms: { term: string; definition: string }[] };

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
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
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

function QuizBlock({ question, options, correctIndex, explanation, accent }: { question: string; options: string[]; correctIndex: number; explanation?: string; accent: string }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="rounded-[12px] p-5" style={{ background: `${accent}06`, border: `1px solid ${accent}20` }}>
      <p className="font-semibold text-[14px] mb-3" style={{ color: "#0f1729", fontFamily: "'Inter',sans-serif" }}>{question}</p>
      <div className="flex flex-col gap-2">
        {options.map((o, j) => {
          let bg = "#fff";
          let border = "#e2e8f0";
          let textColor = "#334155";
          if (revealed) {
            if (j === correctIndex) { bg = `${accent}15`; border = accent; textColor = "#0f1729"; }
            else if (j === selected) { bg = "#fee2e2"; border = "#ef4444"; textColor = "#dc2626"; }
          } else if (j === selected) { bg = `${accent}10`; border = `${accent}50`; textColor = "#0f1729"; }
          return (
            <button key={j} onClick={() => { if (!revealed) setSelected(j); }}
              className="w-full text-left px-4 py-3 rounded-[8px] text-[13px] transition-all"
              style={{ background: bg, border: `1px solid ${border}`, color: textColor, fontFamily: "'Inter',sans-serif" }}>
              <span className="font-mono mr-2 text-[11px]">{String.fromCharCode(65 + j)}.</span> {o}
            </button>
          );
        })}
      </div>
      {selected !== null && !revealed && (
        <button onClick={() => setRevealed(true)} className="mt-3 px-4 py-2 rounded-[8px] text-[12px] font-semibold text-white transition-all" style={{ background: accent }}>
          {selected === correctIndex ? "Check Answer" : "Show Correct Answer"}
        </button>
      )}
      {revealed && explanation && (
        <p className="mt-3 text-[13px] italic" style={{ color: "#64748b" }}>{explanation}</p>
      )}
      {revealed && selected === correctIndex && (
        <div className="mt-2 flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3.5 7L5.5 9L10.5 4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="text-[12px] font-semibold" style={{ color: "#10B981" }}>Correct!</span>
        </div>
      )}
    </div>
  );
}

const GLOSSARY: Record<string, string> = {
  "Affordance": "A property that indicates how an object can be used (e.g., a button affords pushing).",
  "Cognitive load": "The amount of mental processing power required to use a product.",
  "Design thinking": "A human centered, iterative problem solving methodology.",
  "Heuristic": "A usability guideline or rule of thumb for interface design.",
  "Information architecture": "The structural design of shared information environments.",
  "Mental model": "A user's internal representation of how something works.",
  "Persona": "A fictional yet research backed representation of a target user group.",
  "Prototype": "A preliminary version of a product used for testing and iteration.",
  "Usability": "The ease of use and learnability of a product or system.",
  "User flow": "A visual diagram mapping the complete path a user takes through a product.",
  "User journey": "The complete end to end experience a user has with a product or service.",
  "Wireframe": "A simplified, low fidelity layout of a user interface focusing on structure.",
  "Empathy map": "A collaborative tool to visualize what users say, think, do, and feel.",
  "Storyboard": "A sequence of illustrations depicting a user interaction scenario.",
  "A/B testing": "Comparing two versions of a design to determine which performs better.",
};

function RichPara({ text, accent }: { text: string; accent: string }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const parts: { text: string; isGlossary: boolean; term: string }[] = [];
  const sortedTerms = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length);
  let remaining = text;
  while (remaining.length > 0) {
    let matched = false;
    for (const term of sortedTerms) {
      const idx = remaining.toLowerCase().indexOf(term.toLowerCase());
      if (idx >= 0) {
        if (idx > 0) parts.push({ text: remaining.slice(0, idx), isGlossary: false, term: "" });
        parts.push({ text: remaining.slice(idx, idx + term.length), isGlossary: true, term });
        remaining = remaining.slice(idx + term.length);
        matched = true;
        break;
      }
    }
    if (!matched) { parts.push({ text: remaining, isGlossary: false, term: "" }); break; }
  }
  return (
    <p className="text-[15px] leading-[26px] text-[#1e293b]" style={{ fontFamily: "'Inter',sans-serif" }}>
      {parts.map((part, j) =>
        part.isGlossary ? (
          <span key={j} className="relative inline-block cursor-help border-b border-dotted" style={{ borderColor: `${accent}50` }}
            onMouseEnter={() => setHovered(part.term)} onMouseLeave={() => setHovered(null)}>
            {part.text}
            {hovered === part.term && (
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-3 py-1.5 rounded-[8px] text-[11px] font-medium whitespace-nowrap z-50 shadow-lg" style={{ background: "#0f1729", color: "#fff", fontFamily: "'Inter',sans-serif" }}>
                {GLOSSARY[part.term]}
              </span>
            )}
          </span>
        ) : (
          <span key={j}>{part.text}</span>
        )
      )}
    </p>
  );
}

function countWordsInBlocks(blocks: Block[]): number {
  let wc = 0;
  for (const b of blocks) {
    if (b.type === "para" || b.type === "callout" || b.type === "quote" || b.type === "subheading" || b.type === "output") wc += b.text.split(/\s+/).length;
    else if (b.type === "bullets") b.items.forEach(i => wc += (i.term ? i.term.split(/\s+/).length : 0) + i.desc.split(/\s+/).length);
    else if (b.type === "stat") wc += b.value.split(/\s+/).length + b.label.split(/\s+/).length + b.footnote.split(/\s+/).length;
    else if (b.type === "table") { b.headers.forEach(h => wc += h.split(/\s+/).length); b.rows.forEach(r => r.forEach(c => wc += c.split(/\s+/).length)); }
    else if (b.type === "quiz") { wc += b.question.split(/\s+/).length + (b.explanation ? b.explanation.split(/\s+/).length : 0); b.options.forEach(o => wc += o.split(/\s+/).length); }
    else if (b.type === "glossary") b.terms.forEach(t => wc += t.term.split(/\s+/).length + t.definition.split(/\s+/).length);
  }
  return wc;
}

function calcSectionReadingTime(section: EditableSection): string {
  if (!section.blocks || section.blocks.length === 0) return "";
  const mins = Math.max(1, Math.round(countWordsInBlocks(section.blocks) / 200));
  return `${mins} min read`;
}

function calcReadingTime(note: EditableNote): string {
  let wc = 0;
  for (const sec of note.sections) if (sec.blocks) wc += countWordsInBlocks(sec.blocks);
  return `${Math.max(1, Math.round(wc / 200))} min read`;
}

function blocksToHtml(blocks: Block[]): string {
  return  blocks.map(b => {
    if (b.type === "para") return `<p>${b.text}</p>`;
    if (b.type === "callout") return `<p><strong>${b.label}:</strong> ${b.text}</p>`;
    if (b.type === "quote") return `<blockquote>${b.text}</blockquote>`;
    if (b.type === "subheading") return `<h2>${b.text}</h2>`;
    if (b.type === "bullets") return `<ul>${b.items.map(i => `<li>${i.term ? `<strong>${i.term}</strong> — ` : ""}${i.desc}</li>`).join("")}</ul>`;
    if (b.type === "stat") return `<p><strong>${b.value} ${b.label}</strong> — ${b.footnote}</p>`;
    if (b.type === "output") return `<p><strong>Output:</strong> ${b.text}</p>`;
    if (b.type === "table") return `<table style="width:100%;border-collapse:collapse;margin:12px 0;font-size:13px"><thead><tr>${b.headers.map(h => `<th style="border:1px solid #e2e8f0;padding:8px 12px;background:#f8fafc;font-weight:600;text-align:left;color:#0f1729">${h}</th>`).join("")}</tr></thead><tbody>${b.rows.map(r => `<tr>${r.map(c => `<td style="border:1px solid #e2e8f0;padding:8px 12px;color:#334155">${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
    if (b.type === "image") return `<figure style="margin:16px 0;text-align:center"><img src="${b.src}" alt="${b.alt}" style="max-width:100%;border-radius:12px;box-shadow:0 1px 6px rgba(0,0,0,0.08)" /><figcaption style="margin-top:6px;font-size:12px;color:#94a3b8">${b.caption ?? ""}</figcaption></figure>`;
    if (b.type === "quiz") return `<div style="margin:16px 0;padding:16px;border-radius:12px;background:#f8fafc;border:1px solid #e2e8f0"><p style="font-weight:600;margin-bottom:8px">${b.question}</p>${b.options.map((o, j) => `<label style="display:block;padding:6px 10px;margin:4px 0;border-radius:6px;background:${j === b.correctIndex ? '#d1fae5' : '#fff'};border:1px solid ${j === b.correctIndex ? '#6ee7b7' : '#e2e8f0'};cursor:pointer"><input type="radio" disabled ${j === b.correctIndex ? 'checked' : ''} /> ${o}</label>`).join("")}${b.explanation ? `<p style="margin-top:8px;font-size:13px;color:#64748b;font-style:italic">${b.explanation}</p>` : ""}</div>`;
    if (b.type === "glossary") return `<div style="margin:16px 0;padding:16px;border-radius:12px;background:#fff;border:1px solid #e2e8f0"><p style="font-weight:600;margin-bottom:8px;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;color:#475569">Glossary</p>${b.terms.map(t => `<div style="display:flex;gap:8px;padding:6px 0;border-bottom:1px solid #f1f5f9"><span style="font-weight:600;font-size:13px;color:#0f1729;white-space:nowrap">${t.term}</span><span style="font-size:13px;color:#64748b">${t.definition}</span></div>`).join("")}</div>`;
    return "";
  }).join("");
}

function RichContent({ blocks, accent }: { blocks: Block[]; accent: string }) {
  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, i) => {
        if (block.type === "para") return <RichPara key={i} text={block.text} accent={accent} />;
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
                {item.term ? (
                  <>
                    <span className="shrink-0 flex items-center justify-center w-[30px] h-[30px] rounded-[8px] text-[12px] font-bold" style={{ background: `${accent}15`, color: accent, fontFamily: "'Montserrat',sans-serif" }}>{j + 1}</span>
                    <span className="text-[14.5px] leading-[24px] text-[#334155]">
                      <span className="font-semibold text-[#0f1729]">{item.term}</span>
                      {item.term && <span className="text-[#64748b]"> — </span>}
                      {item.desc}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="mt-[9px] w-[5px] h-[5px] rounded-full shrink-0" style={{ background: accent }} />
                    <span className="text-[14.5px] leading-[24px] text-[#334155]">{item.desc}</span>
                  </>
                )}
              </li>
            ))}
          </ul>
        );
        if (block.type === "stat") return (
          <div key={i} className="rounded-[14px] p-6 flex flex-col gap-4 items-center text-center" style={{ background: `linear-gradient(135deg, ${accent}08 0%, ${accent}03 100%)`, border: `1px solid ${accent}20`, boxShadow: `0 2px 8px ${accent}10` }}>
            <div className="flex flex-col items-center shrink-0 px-6 py-3 rounded-[10px]" style={{ background: `linear-gradient(135deg, ${accent} 0%, ${accent}dd 100%)`, boxShadow: `0 4px 12px ${accent}30` }}>
              <span className="font-extrabold text-[32px] leading-none text-white" style={{ fontFamily: "'Montserrat',sans-serif" }}>{block.value}</span>
              <span className="text-[9px] font-bold tracking-[0.1em] uppercase mt-1.5 text-white/80">{block.label}</span>
            </div>
            <p className="text-[14px] leading-[24px] max-w-[500px]" style={{ color: '#1e293b' }}>{block.footnote}</p>
          </div>
        );
        if (block.type === "output") return (
          <div key={i} className="rounded-[12px] px-5 py-4 flex gap-3 items-start" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
            <span className="text-[11px] font-bold tracking-[0.1em] uppercase px-2 py-0.5 rounded mt-[1px] shrink-0" style={{ background: `${accent}15`, color: accent }}>Output</span>
            <p className="text-[14px] leading-[22px] text-[#475569]">{block.text}</p>
          </div>
        );
        if (block.type === "table") return (
          <div key={i} className="overflow-x-auto rounded-[12px]" style={{ border: "1px solid #e2e8f0" }}>
            <table className="w-full text-[13px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#f8fafc" }}>
                  {block.headers.map((h, j) => (
                    <th key={j} className="font-semibold text-left px-4 py-3" style={{ borderBottom: "1px solid #e2e8f0", color: "#0f1729", fontFamily: "'Inter',sans-serif" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, j) => (
                  <tr key={j} style={{ background: j % 2 === 0 ? "#ffffff" : "#f8fafc" }}>
                    {row.map((c, k) => (
                      <td key={k} className="px-4 py-3" style={{ borderBottom: "1px solid #f1f5f9", color: "#334155", fontFamily: "'Inter',sans-serif" }}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        if (block.type === "image") return (
          <figure key={i} className="flex flex-col items-center my-4">
            <img src={block.src} alt={block.alt} className="max-w-full rounded-[12px]" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.08)" }} />
            {block.caption && <figcaption className="mt-2 text-[12px] text-[#94a3b8] text-center">{block.caption}</figcaption>}
          </figure>
        );
        if (block.type === "quiz") return (
          <QuizBlock key={i} question={block.question} options={block.options} correctIndex={block.correctIndex} explanation={block.explanation} accent={accent} />
        );
        if (block.type === "glossary") return (
          <div key={i} className="rounded-[12px] p-5" style={{ background: "#fff", border: "1px solid #e2e8f0" }}>
            <span className="text-[11px] font-bold tracking-[0.1em] uppercase mb-3 block" style={{ color: "#475569" }}>Glossary</span>
            <div className="flex flex-col gap-0">
              {block.terms.map((t, j) => (
                <div key={j} className="flex gap-3 py-2.5" style={{ borderBottom: j < block.terms.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                  <span className="font-semibold text-[13px] whitespace-nowrap" style={{ color: "#0f1729", fontFamily: "'Inter',sans-serif" }}>{t.term}</span>
                  <span className="text-[13px]" style={{ color: "#64748b", fontFamily: "'Inter',sans-serif" }}>{t.definition}</span>
                </div>
              ))}
            </div>
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

interface PracticeQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

interface PracticeTask {
  title: string;
  description: string;
  instructions: string[];
  hint?: string;
}

function PracticeModal({ noteTitle, questions, tasks, onClose }: {
  noteTitle: string;
  questions: PracticeQuestion[];
  tasks: PracticeTask[];
  onClose: () => void;
}) {
  const [tab, setTab] = useState<"mcq" | "tasks">("mcq");
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});

  const score = submitted ? questions.filter((q, i) => answers[i] === q.correctIndex).length : 0;

  function select(qIdx: number, optIdx: number) {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  function handleReset() {
    setAnswers({});
    setSubmitted(false);
  }

  function toggleTask(idx: number) {
    const task = tasks[idx];
    if (!task) return;
    setCompletedTasks(prev => ({ ...prev, [task.title]: !prev[task.title] }));
  }

  var content = null;
  if (questions.length === 0 && tasks.length === 0) {
    content = (
      <div className="flex flex-col items-center py-12 px-4 text-center">
        <div className="rounded-full p-4 mb-4" style={{ background: "#f0fdf4" }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4z" stroke="#10B981" strokeWidth="1.5"/><path d="M12 16l3 3 5-5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h3 className="text-[15px] font-bold mb-1" style={{ color: "#0f1729", fontFamily: "'Montserrat',sans-serif" }}>Coming Soon</h3>
        <p className="text-[13px] max-w-[320px]" style={{ color: "#64748b", fontFamily: "'Inter',sans-serif" }}>Practice questions and tasks for this note are being prepared. Check back later!</p>
        <button onClick={onClose} className="mt-6 px-6 py-2.5 rounded-[10px] text-[13px] font-semibold text-white" style={{ background: "#10B981", fontFamily: "'Inter',sans-serif" }}>Done</button>
      </div>
    );
  } else {
    content = (
      <div>
        <div className="flex gap-1 mb-5 p-1 rounded-[10px]" style={{ background: "#f1f5f9" }}>
          <button onClick={() => setTab("mcq")} className="flex-1 py-2 rounded-[8px] text-[12px] font-semibold transition-all"
          style={{ background: tab === "mcq" ? "#fff" : "transparent", color: tab === "mcq" ? "#0f1729" : "#64748b", boxShadow: tab === "mcq" ? "0 1px 3px rgba(0,0,0,0.08)" : "none" }}>
          Multiple Choice {submitted && "(" + score + "/" + questions.length + ")"}
        </button>
        <button onClick={() => setTab("tasks")} className="flex-1 py-2 rounded-[8px] text-[12px] font-semibold transition-all"
          style={{ background: tab === "tasks" ? "#fff" : "transparent", color: tab === "tasks" ? "#0f1729" : "#64748b", boxShadow: tab === "tasks" ? "0 1px 3px rgba(0,0,0,0.08)" : "none" }}>
          Practical Tasks ({Object.keys(completedTasks).length}/{tasks.length})
        </button>
      </div>

      {tab === "mcq" && (
        <div>
          {submitted && (
            <p className="text-[13px] font-semibold mb-3 px-3 py-2 rounded-[8px]" style={{ background: score === questions.length ? "#d1fae5" : "#fef3c7", color: score === questions.length ? "#065f46" : "#92400e" }}>
              Score: {score}/{questions.length}
            </p>
          )}
          {questions.map((q, i) => (
            <div key={i} className="rounded-[10px] p-4 mb-4" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
              <p className="text-[13px] font-semibold mb-2" style={{ color: "#0f1729", fontFamily: "'Inter',sans-serif" }}>
                <span className="text-[#94a3b8] font-mono mr-1">Q{i + 1}.</span> {q.question}
              </p>
              <div className="flex flex-col gap-1.5">
                {q.options.map((o, j) => {
                  var isSelected = answers[i] === j;
                  var isCorrect = submitted && j === q.correctIndex;
                  var isWrong = submitted && isSelected && j !== q.correctIndex;
                  var bg = isSelected && !submitted ? "#e0f2fe" : "#fff";
                  var border = "#e2e8f0";
                  if (isCorrect) { bg = "#d1fae5"; border = "#6ee7b7"; }
                  if (isWrong) { bg = "#fee2e2"; border = "#fca5a5"; }
                  return (
                    <button key={j} onClick={() => select(i, j)}
                      className="w-full text-left px-3.5 py-2.5 rounded-[8px] text-[12.5px] transition-all"
                      style={{ background: bg, border: "1px solid " + border, color: isWrong ? "#dc2626" : "#334155", fontFamily: "'Inter',sans-serif" }}>
                      <span className="font-mono text-[11px] mr-2" style={{ color: isCorrect ? "#065f46" : isWrong ? "#dc2626" : "#94a3b8" }}>{String.fromCharCode(65 + j)}.</span> {o}
                      {isCorrect && <span className="float-right text-[11px] font-semibold" style={{ color: "#065f46" }}>&#10003;</span>}
                      {isWrong && <span className="float-right text-[11px] font-semibold" style={{ color: "#dc2626" }}>&#10007;</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
          <div className="flex items-center gap-3 mt-5">
            {!submitted ? (
              <button onClick={handleSubmit} disabled={Object.keys(answers).length < questions.length}
                className="flex-1 py-2.5 rounded-[10px] text-[13px] font-semibold text-white transition-all"
                style={{ background: Object.keys(answers).length < questions.length ? "#93c5fd" : "#2563eb", fontFamily: "'Inter',sans-serif" }}>
                Submit {Object.keys(answers).length}/{questions.length}
              </button>
            ) : (
              <button onClick={handleReset} className="flex-1 py-2.5 rounded-[10px] text-[13px] font-semibold transition-all"
                style={{ background: "#f1f5f9", color: "#475569", fontFamily: "'Inter',sans-serif" }}>
                Retry
              </button>
            )}
            <button onClick={onClose} className="px-5 py-2.5 rounded-[10px] text-[13px] font-medium transition-all"
              style={{ background: "#fff", border: "1px solid #e2e8f0", color: "#64748b", fontFamily: "'Inter',sans-serif" }}>
              Close
            </button>
          </div>
        </div>
      )}

      {tab === "tasks" && (
        <div className="flex flex-col gap-4">
          {tasks.map((t, i) => {
            var done = completedTasks[t.title];
            return (
              <div key={i} className="rounded-[10px] p-4" style={{ background: done ? "#f0fdf4" : "#f8fafc", border: "1px solid " + (done ? "#6ee7b7" : "#e2e8f0") }}>
                <div className="flex items-start gap-3">
                  <button onClick={() => toggleTask(i)} className="mt-0.5 shrink-0 w-[18px] h-[18px] rounded-[4px] flex items-center justify-center transition-all"
                    style={{ background: done ? "#10B981" : "#fff", border: "1.5px solid " + (done ? "#10B981" : "#cbd5e1") }}>
                    {done && <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 5L4.5 7L7.5 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                  </button>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-bold px-1.5 py-0.5 rounded-[4px]" style={{ background: "#dbeafe", color: "#1d4ed8", fontFamily: "'Inter',sans-serif" }}>Task {i + 1}</span>
                      <span className="text-[11px] font-semibold" style={{ color: done ? "#065f46" : "#0f1729", fontFamily: "'Inter',sans-serif" }}>{t.title}</span>
                    </div>
                    <p className="text-[12px] mb-2" style={{ color: "#475569", fontFamily: "'Inter',sans-serif" }}>{t.description}</p>
                    <div className="rounded-[8px] p-3 mb-2" style={{ background: "#fff", border: "1px solid #e2e8f0" }}>
                      <p className="text-[10.5px] font-semibold mb-1.5" style={{ color: "#64748b", fontFamily: "'Inter',sans-serif" }}>INSTRUCTIONS</p>
                      <ol className="list-decimal list-inside flex flex-col gap-1">
                        {t.instructions.map((inst, j) => (
                          <li key={j} className="text-[11.5px]" style={{ color: "#334155", fontFamily: "'Inter',sans-serif" }}>{inst}</li>
                        ))}
                      </ol>
                    </div>
                    {t.hint && (
                      <div className="rounded-[6px] px-3 py-2" style={{ background: "#fffbeb", border: "1px solid #fde68a" }}>
                        <span className="text-[10px] font-bold mr-1" style={{ color: "#92400e" }}>TIP:</span>
                        <span className="text-[11px]" style={{ color: "#92400e", fontFamily: "'Inter',sans-serif" }}>{t.hint}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          <button onClick={onClose} className="w-full py-2.5 rounded-[10px] text-[13px] font-medium transition-all mt-2"
            style={{ background: "#fff", border: "1px solid #e2e8f0", color: "#64748b", fontFamily: "'Inter',sans-serif" }}>
            Close
          </button>
        </div>
      )}
    </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{ background: "rgba(15,23,42,0.5)", backdropFilter: "blur(4px)" }}>
      <div className="w-full max-w-[640px] max-h-[88vh] overflow-y-auto rounded-[16px] p-[25px]" style={{ background: "#fff", border: "1px solid #e2e8f0", boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-[16px] text-[#0f1729]" style={{ fontFamily: "'Montserrat',sans-serif" }}>Practice: {noteTitle}</h2>
          <button onClick={onClose} className="p-1.5 rounded-[6px] hover:bg-slate-100 transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 4L12 12M12 4L4 12" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" /></svg>
          </button>
        </div>
        {content}
      </div>
    </div>
  );
}

interface ActivityEntry {
  type: "login" | "view_section" | "complete_note" | "practice_open";
  noteId?: string;
  noteTitle?: string;
  sectionLabel?: string;
  timestamp: string;
}

const ACTIVITY_LOG_KEY = "hyyung-activity-log-v1";

function formatRelativeTime(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 7) return `${days}d ago`;
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function computeStreak(log: ActivityEntry[]): number {
  if (log.length === 0) return 0;
  const dates = [...new Set(log.map(e => e.timestamp.split("T")[0]))].sort().reverse();
  let streak = 0;
  const today = new Date().toISOString().split("T")[0];
  let expected = today;
  for (const d of dates) {
    if (d === expected) { streak++; const dt = new Date(d); dt.setDate(dt.getDate() - 1); expected = dt.toISOString().split("T")[0]; }
    else if (d < expected) break;
  }
  return streak;
}

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

function AdminPanel({ notes, onSave, onClose, onLogout, onSaved }: {
  notes: EditableNote[];
  onSave?: (n: EditableNote[]) => void;
  onClose?: () => void;
  onLogout: () => void;
  onSaved: (noteId: string) => void;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [analytics, setAnalytics] = useState<AggregatedAnalytics | null>(null);
  const [analyticsLoading, setAnalyticsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setAnalyticsLoading(true);
    fetchAggregatedAnalytics().then(result => {
      if (!cancelled) { setAnalytics(result); setAnalyticsLoading(false); }
    });
    return () => { cancelled = true; };
  }, []);

  function countBlocks(n: EditableNote) {
    const counts: Record<string, number> = {};
    n.sections.forEach(s => (s.blocks || []).forEach(b => { counts[b.type] = (counts[b.type] || 0) + 1; }));
    return counts;
  }

  function totalStats() {
    const sums: Record<string, number> = {};
    notes.forEach(n => {
      const c = countBlocks(n);
      Object.keys(c).forEach(k => { sums[k] = (sums[k] || 0) + c[k]; });
    });
    return sums;
  }

  const stats = totalStats();
  const totalBlocks = Object.values(stats).reduce((a, b) => a + b, 0);
  const totalSections = notes.reduce((a, n) => a + n.sections.length, 0);
  const difficultyCounts: Record<string, number> = {};
  notes.forEach(n => { const d = n.difficulty || "Unset"; difficultyCounts[d] = (difficultyCounts[d] || 0) + 1; });
  const tagCounts: Record<string, number> = {};
  notes.forEach(n => n.tags.forEach(t => { tagCounts[t] = (tagCounts[t] || 0) + 1; }));
  const topTags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]).slice(0, 10);

  const blockColors: Record<string, string> = {
    para: "#3b82f6", callout: "#f59e0b", quote: "#8b5cf6", subheading: "#64748b",
    bullets: "#10b981", stat: "#06b6d4", output: "#6366f1", table: "#ec4899",
    image: "#14b8a6", quiz: "#f97316", glossary: "#84cc16"
  };

  const filteredNotes = notes.filter(n => !searchQuery || n.title.toLowerCase().includes(searchQuery.toLowerCase()) || n.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));

  return (
    <div className="fixed inset-0 z-40 flex flex-col" style={{ background: "#f8fafc" }}>
      <div className="shrink-0 w-full" style={{ background: "rgba(255,255,255,0.95)", borderBottom: "1px solid #e2e8f0", position: "sticky", top: 0, zIndex: 10 }}>
        <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-[1200px]">
          <div className="flex items-center gap-3">
            <div>
              <p className="font-bold text-[19.2px] text-[#1e293b] leading-tight" style={{ fontFamily: "'Montserrat',sans-serif" }}>Dashboard</p>
              <p className="text-[12px] text-[#94a3b8]" style={{ fontFamily: "'Inter',sans-serif" }}>Analytics &amp; Content Overview</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => onSaved(notes[0]?.id || "")} className="flex items-center gap-2 px-4 py-2 rounded-[8px] text-[14px] text-white transition-colors" style={{ background: "#2563EB", fontFamily: "'Inter',sans-serif" }}>
              View Notes
            </button>
            <button onClick={onLogout} className="flex items-center gap-2 px-4 py-2 rounded-[8px] text-[14px] text-[#dc2626] transition-colors" style={{ border: "1px solid #fca5a5", fontFamily: "'Inter',sans-serif" }}>
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Total Notes", value: notes.length, color: "#3b82f6" },
              { label: "Total Sections", value: totalSections, color: "#10b981" },
              { label: "Total Blocks", value: totalBlocks, color: "#f59e0b" },
              { label: "Difficulty Levels", value: Object.keys(difficultyCounts).length, color: "#8b5cf6" },
            ].map((m, i) => (
              <div key={i} className="rounded-[14px] p-5 flex flex-col" style={{ background: "#fff", border: `1px solid ${m.color}20`, boxShadow: `0 2px 8px ${m.color}10` }}>
                <span className="text-[11px] font-semibold tracking-wider uppercase" style={{ color: "#94a3b8" }}>{m.label}</span>
                <span className="font-extrabold text-[28px] mt-1 leading-none" style={{ color: m.color, fontFamily: "'Montserrat',sans-serif" }}>{m.value}</span>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full" style={{ background: "#8b5cf6" }} />
              <h2 className="font-bold text-[15px] text-[#1e293b]" style={{ fontFamily: "'Montserrat',sans-serif" }}>User Analytics</h2>
            </div>
            {analyticsLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-t-transparent animate-spin" style={{ borderColor: "#8b5cf6", borderTopColor: "transparent" }} />
                  <span className="text-[13px]" style={{ color: "#94a3b8" }}>Loading analytics...</span>
                </div>
              </div>
            ) : analytics ? (
              <div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div className="rounded-[14px] p-5 flex flex-col" style={{ background: "#fff", border: "1px solid #8b5cf620", boxShadow: "0 2px 8px #8b5cf610" }}>
                    <span className="text-[11px] font-semibold tracking-wider uppercase" style={{ color: "#94a3b8" }}>Total Users</span>
                    <span className="font-extrabold text-[28px] mt-1 leading-none" style={{ color: "#8b5cf6", fontFamily: "'Montserrat',sans-serif" }}>{analytics.totalUsers}</span>
                  </div>
                  <div className="rounded-[14px] p-5 flex flex-col" style={{ background: "#fff", border: "1px solid #10b98120", boxShadow: "0 2px 8px #10b98110" }}>
                    <span className="text-[11px] font-semibold tracking-wider uppercase" style={{ color: "#94a3b8" }}>Completed Notes</span>
                    <span className="font-extrabold text-[28px] mt-1 leading-none" style={{ color: "#10b981", fontFamily: "'Montserrat',sans-serif" }}>{analytics.usersWithCompletedNotes}<span className="text-[16px] text-[#94a3b8] font-semibold">/{analytics.totalUsers}</span></span>
                  </div>
                  <div className="rounded-[14px] p-5 flex flex-col" style={{ background: "#fff", border: "1px solid #f59e0b20", boxShadow: "0 2px 8px #f59e0b10" }}>
                    <span className="text-[11px] font-semibold tracking-wider uppercase" style={{ color: "#94a3b8" }}>Practice Done</span>
                    <span className="font-extrabold text-[28px] mt-1 leading-none" style={{ color: "#f59e0b", fontFamily: "'Montserrat',sans-serif" }}>{analytics.usersWithPractice}<span className="text-[16px] text-[#94a3b8] font-semibold">/{analytics.totalUsers}</span></span>
                  </div>
                  <div className="rounded-[14px] p-5 flex flex-col" style={{ background: "#fff", border: "1px solid #3b82f620", boxShadow: "0 2px 8px #3b82f610" }}>
                    <span className="text-[11px] font-semibold tracking-wider uppercase" style={{ color: "#94a3b8" }}>Sections Read</span>
                    <span className="font-extrabold text-[28px] mt-1 leading-none" style={{ color: "#3b82f6", fontFamily: "'Montserrat',sans-serif" }}>{analytics.totalSectionsRead}</span>
                  </div>
                </div>
                <div className="rounded-[14px] p-5" style={{ background: "#fff", border: "1px solid #e2e8f0" }}>
                  <h3 className="font-bold text-[14px] text-[#1e293b] mb-3" style={{ fontFamily: "'Montserrat',sans-serif" }}>Avg Completion Rate</h3>
                  <div className="flex items-center gap-4">
                    <span className="font-extrabold text-[36px]" style={{ color: "#8b5cf6", fontFamily: "'Montserrat',sans-serif" }}>{analytics.avgCompletionRate}%</span>
                    <div className="flex-1 h-[10px] rounded-full" style={{ background: "#f1f5f9", overflow: "hidden" }}>
                      <div className="h-full rounded-full transition-all" style={{ width: analytics.avgCompletionRate + "%", background: "#8b5cf6" }} />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center py-12 text-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 8V12L14 14" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="12" r="9" stroke="#94A3B8" strokeWidth="1.5"/></svg>
                <p className="text-[13px] mt-3" style={{ color: "#94a3b8" }}>No analytics data yet. Create the <code style={{ background: "#f1f5f9", padding: "1px 5px", borderRadius: 4 }}>user_analytics</code> table in Supabase and users will appear here.</p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="rounded-[14px] p-5" style={{ background: "#fff", border: "1px solid #e2e8f0" }}>
              <h3 className="font-bold text-[14px] text-[#1e293b] mb-3" style={{ fontFamily: "'Montserrat',sans-serif" }}>Difficulty Distribution</h3>
              <div className="flex flex-col gap-2">
                {Object.entries(difficultyCounts).map(([level, count]) => {
                  const color = level === "Beginner" ? "#10b981" : level === "Intermediate" ? "#f59e0b" : level === "Advanced" ? "#ef4444" : "#94a3b8";
                  const pct = Math.round((count / notes.length) * 100);
                  return (
                    <div key={level} className="flex items-center gap-3">
                      <span className="text-[12px] font-semibold w-[100px]" style={{ color }}>{level}</span>
                      <div className="flex-1 h-[20px] rounded-[6px]" style={{ background: "#f1f5f9", overflow: "hidden" }}>
                        <div className="h-full rounded-[6px] transition-all" style={{ width: pct + "%", background: color }} />
                      </div>
                      <span className="text-[12px] font-semibold w-[50px] text-right" style={{ color: "#475569" }}>{count}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[14px] p-5" style={{ background: "#fff", border: "1px solid #e2e8f0" }}>
              <h3 className="font-bold text-[14px] text-[#1e293b] mb-3" style={{ fontFamily: "'Montserrat',sans-serif" }}>Top Tags</h3>
              <div className="flex flex-wrap gap-2">
                {topTags.map(([tag, count]) => (
                  <div key={tag} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[11px] font-medium" style={{ background: "#f1f5f9", color: "#475569" }}>
                    <span>{tag}</span>
                    <span className="text-[10px] font-bold px-1 py-0.5 rounded-full" style={{ background: "#e2e8f0", color: "#64748b" }}>{count}</span>
                  </div>
                ))}
                {topTags.length === 0 && <p className="text-[13px] text-[#94a3b8]">No tags found</p>}
              </div>
            </div>
          </div>

          <div className="rounded-[14px] p-5 mb-8" style={{ background: "#fff", border: "1px solid #e2e8f0" }}>
            <h3 className="font-bold text-[14px] text-[#1e293b] mb-4" style={{ fontFamily: "'Montserrat',sans-serif" }}>Block Types</h3>
            <div className="flex flex-wrap gap-2">
              {Object.entries(stats).sort((a, b) => b[1] - a[1]).map(([type, count]) => {
                const color = blockColors[type] || "#94a3b8";
                return (
                  <div key={type} className="flex items-center gap-1.5 px-3 py-2 rounded-[8px]" style={{ background: `${color}10`, border: `1px solid ${color}20` }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: color }} />
                    <span className="text-[12px] font-semibold" style={{ color: "#1e293b" }}>{type}</span>
                    <span className="text-[11px] font-bold px-1.5 py-0.5 rounded-[4px]" style={{ background: `${color}20`, color }}>{count}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-4">
            <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search notes by title or tag..."
              className="w-full px-[14px] py-[10px] rounded-[10px] text-[13px] outline-none"
              style={{ border: "1px solid #e2e8f0", fontFamily: "'Inter',sans-serif", color: "#0f1729" }}
              onFocus={e => (e.target.style.borderColor = "#2563EB")} onBlur={e => (e.target.style.borderColor = "#e2e8f0")} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredNotes.map(n => {
              const t = THEMES[n.themeId] || THEMES.teal;
              const bc = countBlocks(n);
              return (
                <div key={n.id} className="rounded-[14px] p-[16px]" style={{ background: "#fff", border: "1px solid #e2e8f0", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="shrink-0 flex items-center justify-center w-[36px] h-[36px] rounded-[10px]" style={{ background: `${t.accentColor}15` }}>
                      <span className="font-bold text-[14px]" style={{ color: t.accentColor }}>{(n.title || "U").charAt(0).toUpperCase()}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-[13px] text-[#1e293b] truncate" style={{ fontFamily: "'Inter',sans-serif" }}>{n.title || "Untitled"}</p>
                      <p className="text-[11px] text-[#94a3b8] truncate mt-0.5">{n.subtitle || "No subtitle"}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ background: `${t.accentColor}15`, color: t.accentColor }}>{n.sections.length} sections</span>
                    {n.difficulty && (
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded" style={{
                        background: n.difficulty === "Beginner" ? "#d1fae5" : n.difficulty === "Intermediate" ? "#fef3c7" : "#fee2e2",
                        color: n.difficulty === "Beginner" ? "#065f46" : n.difficulty === "Intermediate" ? "#92400e" : "#991b1b"
                      }}>{n.difficulty === "Beginner" ? "B" : n.difficulty === "Intermediate" ? "I" : "A"}</span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {n.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[9px] px-1.5 py-0.5 rounded-full" style={{ background: "#f1f5f9", color: "#64748b" }}>{tag}</span>
                    ))}
                    {n.tags.length > 3 && <span className="text-[9px] px-1.5 py-0.5 rounded-full" style={{ background: "#f1f5f9", color: "#94a3b8" }}>+{n.tags.length - 3}</span>}
                  </div>
                  <div className="flex flex-wrap gap-1 mt-1 pt-2" style={{ borderTop: "1px solid #f1f5f9" }}>
                    {Object.entries(bc).map(([type, count]) => {
                      const color = blockColors[type] || "#94a3b8";
                      return (
                        <span key={type} className="text-[8px] font-medium px-1.5 py-0.5 rounded" style={{ background: `${color}10`, color }}>
                          {type}: {count}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const STORAGE_KEY = "hyyung-ux-notes-v6";
const SUPABASE_TABLE = "notes";
const NOTES_VERSION = "v6";

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
  const [presentMode, setPresentMode] = useState(false);
  const [practiceNoteId, setPracticeNoteId] = useState<string | null>(null);
  const [viewedSections, setViewedSections] = useState<Set<string>>(() => {
    try {
      const stored = localStorage.getItem("hyyung-viewed-sections");
      return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch { return new Set(); }
  });

  const [activityLog, setActivityLog] = useState<ActivityEntry[]>(() => {
    try {
      const stored = localStorage.getItem(ACTIVITY_LOG_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch { return []; }
  });

  function addActivity(entry: Omit<ActivityEntry, "timestamp">) {
    const newEntry: ActivityEntry = { ...entry, timestamp: new Date().toISOString() };
    setActivityLog(prev => {
      const next = [newEntry, ...prev].slice(0, 100);
      try { localStorage.setItem(ACTIVITY_LOG_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }

  const completedNotes = notes.filter(n => n.sections.every(s => viewedSections.has(s.id)));
  const allCompleted = notes.length > 0 && completedNotes.length === notes.length;

  const completedNoteIdsRef = useRef(new Set<string>());
  useEffect(() => {
    for (const n of completedNotes) {
      if (!completedNoteIdsRef.current.has(n.id)) {
        completedNoteIdsRef.current = new Set(completedNoteIdsRef.current).add(n.id);
        addActivity({ type: "complete_note", noteId: n.id, noteTitle: n.title });
      }
    }
  }, [completedNotes.length, notes.length]);

  const prevPracticeNoteId = useRef<string | null>(null);
  useEffect(() => {
    if (practiceNoteId && practiceNoteId !== prevPracticeNoteId.current) {
      const n = notes.find(n => n.id === practiceNoteId);
      if (n) addActivity({ type: "practice_open", noteId: practiceNoteId, noteTitle: n.title });
    }
    prevPracticeNoteId.current = practiceNoteId;
  }, [practiceNoteId]);

  // Persist every change to localStorage so edits survive re-renders and refreshes
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: NOTES_VERSION, notes })); } catch {}
  }, [notes]);

  // Persist viewed sections
  useEffect(() => {
    try { localStorage.setItem("hyyung-viewed-sections", JSON.stringify(Array.from(viewedSections))); } catch {}
  }, [viewedSections]);

  // Sync user progress to Supabase for analytics
  useEffect(() => {
    if (!isSupabaseConfigured) return;
    let uid: string;
    try { uid = localStorage.getItem("hyyung-user-id"); if (!uid) { uid = crypto.randomUUID(); localStorage.setItem("hyyung-user-id", uid); } } catch { uid = crypto.randomUUID(); }
    const stats = {
      userId: uid,
      sectionsRead: viewedSections.size,
      completedNotes: completedNotes.length,
      totalSections: notes.reduce((a, n) => a + n.sections.length, 0),
      totalNotes: notes.length,
      practiceDone: false,
      lastActive: new Date().toISOString(),
    };
    updateUserAnalytics(stats);
  }, [viewedSections.size, completedNotes.length, notes.length]);

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
      addActivity({ type: "view_section", noteId: activeNote.id, noteTitle: activeNote.title, sectionLabel: section.label });
    }
  }, [section?.id]);

  // Presentation mode auto advance
  useEffect(() => {
    if (!presentMode || !hasSection || isLast) return;
    const timer = setInterval(() => {
      setActiveSectionIdx(p => Math.min(sectionCount - 1, p + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [presentMode, hasSection, isLast, sectionCount]);
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
                  <div className="flex items-center gap-1 shrink-0 ml-auto">
                    {n.difficulty && (
                      <span className="text-[7px] font-bold px-1.5 py-0.5 rounded" style={{
                        background: n.difficulty === "Beginner" ? "#d1fae5" : n.difficulty === "Intermediate" ? "#fef3c7" : "#fee2e2",
                        color: n.difficulty === "Beginner" ? "#065f46" : n.difficulty === "Intermediate" ? "#92400e" : "#991b1b"
                      }}>{n.difficulty === "Beginner" ? "Beginner" : n.difficulty === "Intermediate" ? "Int" : "Adv"}</span>
                    )}
                  </div>
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
                {viewedSections.has(s.id) && !isActive && <svg className="shrink-0" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 5L4.5 7L7.5 3" stroke="#10B981" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
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
    addActivity({ type: "login" });
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("hyyung-landing-auth", JSON.stringify({ name, email, authedAt: new Date().toISOString() }));
      } catch {}
    }
    navigateTo("/notes", setCurrentPath);
  }

  const [checkingAuth, setCheckingAuth] = useState(true);
  const sessionLoggedRef = useRef(false);
  const prevHasAccess = useRef(false);
  useEffect(() => {
    let listener: { data: { subscription: { unsubscribe: () => void } } } | null = null;

    const initAuth = async () => {
      try {
        const session = await getCurrentSession();
        if (session) {
          if (!sessionLoggedRef.current) {
            sessionLoggedRef.current = true;
            prevHasAccess.current = true;
            setHasAccess(true);
            addActivity({ type: "login" });
            if (currentPath === "/auth/callback") {
              const email = session?.user?.email || "";
              const name = session?.user?.user_metadata?.name || email.split("@")[0];
              onAuthSuccess(email, name);
            } else if (currentPath !== "/" && currentPath !== "/notes") {
              navigateTo("/notes", setCurrentPath);
            }
          }
        }
      } catch {}
      setCheckingAuth(false);
    };
    initAuth();

    if (supabase) {
      listener = supabase.auth.onAuthStateChange((event, session) => {
        if (event === "SIGNED_IN" && session) {
          if (!sessionLoggedRef.current) {
            sessionLoggedRef.current = true;
          }
          setHasAccess(true);
          const email = session.user?.email || "";
          const name = session.user?.user_metadata?.name || email.split("@")[0];
          if (typeof window !== "undefined") {
            try {
              localStorage.setItem("hyyung-landing-auth", JSON.stringify({ name, email, authedAt: new Date().toISOString() }));
            } catch {}
          }
          if (currentPath === "/auth/callback") {
            onAuthSuccess(email, name);
          } else if (currentPath !== "/" && currentPath !== "/notes") {
            navigateTo("/notes", setCurrentPath);
          }
        }
      });
    }

    return () => {
      if (listener) listener.data.subscription.unsubscribe();
    };
  }, []);

  // Handle password recovery and OAuth callbacks
  const [resetPassword, setResetPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
  const [resetDone, setResetDone] = useState(false);
  const [resetError, setResetError] = useState("");
  const [resetting, setResetting] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.replace("#", ""));
    if (params.get("type") === "recovery") {
      setResetPassword(true);
      navigateTo("/", setCurrentPath);
    }
    if (currentPath === "/auth/callback") {
      const checkSession = async () => {
        try {
          const session = await getCurrentSession();
          if (session) {
            const email = session.user?.email || "";
            const name = session.user?.user_metadata?.name || email.split("@")[0];
            onAuthSuccess(email, name);
          }
        } catch {}
      };
      checkSession();
    }
  }, []);

  async function handlePasswordReset(e: React.FormEvent) {
    e.preventDefault();
    setResetError("");
    if (newPassword !== confirmNewPassword) {
      setResetError("Passwords do not match");
      return;
    }
    setResetting(true);
    try {
      await updateUserPassword(newPassword);
      setResetDone(true);
      setTimeout(() => { setResetPassword(false); setResetDone(false); setNewPassword(""); setConfirmNewPassword(""); }, 3000);
    } catch (err: unknown) {
      setResetError(err instanceof Error ? err.message : "Failed to reset password");
    } finally {
      setResetting(false);
    }
  }

  if (checkingAuth) {
    return <div className="min-h-screen w-full flex items-center justify-center" style={{ background: "#f8fafc" }}>
      <div className="flex flex-col items-center gap-3">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="animate-spin" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" strokeDasharray="32" strokeDashoffset="8" /></svg>
        <span className="text-sm text-slate-500">Loading…</span>
      </div>
    </div>;
  }

  if (resetPassword) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center" style={{ background: "#f8fafc" }}>
        <div className="w-full max-w-[400px] rounded-[16px] p-[33px]" style={{ background: "#fff", border: "1px solid #e2e8f0", boxShadow: "0px 4px 10px rgba(0,0,0,0.08)" }}>
          {resetDone ? (
            <div className="flex flex-col items-center py-6 text-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900" style={{ fontFamily: "'Montserrat',sans-serif" }}>Password updated</h3>
              <p className="text-sm text-slate-600 mt-2">You can now sign in with your new password.</p>
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-bold text-center text-slate-900 mb-2" style={{ fontFamily: "'Montserrat',sans-serif" }}>Set new password</h2>
              <p className="text-sm text-slate-600 text-center mb-6">Enter your new password below.</p>
              <form onSubmit={handlePasswordReset} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-[14px] text-[#475569]">New Password</label>
                  <div className="relative">
                    <input type={showNewPassword ? "text" : "password"} value={newPassword} onChange={e => { setNewPassword(e.target.value); setResetError(""); }} placeholder="At least 6 characters" minLength={6} required
                      className="w-full h-[47px] px-4 pr-10 rounded-[12px] text-[14px] outline-none transition-all"
                      style={{ border: "1px solid #e2e8f0", fontFamily: "'Inter',sans-serif", color: "#0f1729" }}
                      onFocus={e => (e.target.style.borderColor = "#2563EB")} onBlur={e => (e.target.style.borderColor = "#e2e8f0")} />
                    <button type="button" onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                      {showNewPassword ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-[14px] text-[#475569]">Confirm Password</label>
                  <div className="relative">
                    <input type={showConfirmNewPassword ? "text" : "password"} value={confirmNewPassword} onChange={e => { setConfirmNewPassword(e.target.value); setResetError(""); }} placeholder="Repeat your password" required
                      className="w-full h-[47px] px-4 pr-10 rounded-[12px] text-[14px] outline-none transition-all"
                      style={{ border: "1px solid #e2e8f0", fontFamily: "'Inter',sans-serif", color: "#0f1729" }}
                      onFocus={e => (e.target.style.borderColor = "#2563EB")} onBlur={e => (e.target.style.borderColor = "#e2e8f0")} />
                    <button type="button" onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                      {showConfirmNewPassword ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                      )}
                    </button>
                  </div>
                </div>
                {resetError && <p className="text-[12px] text-red-500">{resetError}</p>}
                <button type="submit" disabled={resetting}
                  className="w-full h-[47px] rounded-[12px] font-semibold text-[15.2px] text-white transition-all"
                  style={{ background: resetting ? "#93c5fd" : "#2563eb", fontFamily: "'Inter',sans-serif" }}>
                  {resetting ? "Resetting…" : "Reset Password"}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }

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
              {/* Difficulty badge */}
              {activeNote.difficulty && (
                <span className="text-[10px] font-bold px-2 py-1 rounded-full" style={{
                  background: activeNote.difficulty === "Beginner" ? "#d1fae5" : activeNote.difficulty === "Intermediate" ? "#fef3c7" : "#fee2e2",
                  color: activeNote.difficulty === "Beginner" ? "#065f46" : activeNote.difficulty === "Intermediate" ? "#92400e" : "#991b1b"
                }}>{activeNote.difficulty}</span>
              )}
              {/* Presentation mode */}
              <button onClick={() => setPresentMode(!presentMode)} className="p-[6px] rounded-[8px]" style={{ background: presentMode ? `${theme.accentColor}20` : "#f1f5f9" }}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  {presentMode ? (
                    <><rect x="3.5" y="2.5" width="2" height="8" rx="0.5" fill={theme.accentColor} /><rect x="7.5" y="2.5" width="2" height="8" rx="0.5" fill={theme.accentColor} /></>
                  ) : (
                    <><polygon points="4,2.5 10.5,6.5 4,10.5" fill={theme.accentColor} /></>
                  )}
                </svg>
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
                {activeNote.difficulty && (
                  <div className="mt-2">
                    <span className="inline-block text-[10px] font-bold px-2.5 py-1 rounded-full" style={{
                      background: activeNote.difficulty === "Beginner" ? "#d1fae5" : activeNote.difficulty === "Intermediate" ? "#fef3c7" : "#fee2e2",
                      color: activeNote.difficulty === "Beginner" ? "#065f46" : activeNote.difficulty === "Intermediate" ? "#92400e" : "#991b1b"
                    }}>{activeNote.difficulty}</span>
                  </div>
                )}
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
                      <div className="h-full rounded-full transition-all duration-500" style={{ width: `${Math.round(activeNote.sections.filter(s => viewedSections.has(s.id)).length / sectionCount * 100)}%`, background: theme.accentColor }} />
                    </div>
                    <span className="text-[10.5px] font-medium" style={{ color: theme.accentColor }}>
                      {activeNote.sections.filter(s => viewedSections.has(s.id)).length}/{sectionCount}
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
                  <span className="text-[9.5px] font-medium px-2 py-0.5 rounded-full shrink-0" style={{ background: `${theme.accentColor}08`, color: theme.accentColor }}>{calcSectionReadingTime(section)}</span>
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

              {/* Section completion checkmarks */}
              <div className="flex items-center justify-center gap-1.5 mt-6">
                {activeNote.sections.map((s, j) => (
                  <button key={s.id} onClick={() => setActiveSectionIdx(j)}
                    className="w-6 h-1.5 rounded-full transition-all"
                    style={{ background: j === activeSectionIdx ? sectionAccent : viewedSections.has(s.id) ? "#10B981" : "#e2e8f0" }} />
                ))}
              </div>
              {/* Prev/Next */}
              <div className="flex items-center justify-between mt-3">
                <button onClick={() => setActiveSectionIdx(p => Math.max(0, p - 1))} disabled={isFirst}
                  className="px-3 py-2 rounded-[8px] text-[11.68px] font-medium text-[#64748b]"
                  style={{ background: "#f1f5f9", opacity: isFirst ? 0.35 : 1, cursor: isFirst ? "default" : "pointer" }}>
                  ← Previous
                </button>
                <span className="text-[10.72px] text-[#94a3b8]">{activeSectionIdx + 1} of {activeNote.sections.length}</span>
                <button onClick={() => {
                  if (isLast) {
                    setPracticeNoteId(activeNoteId);
                  } else {
                    setActiveSectionIdx(p => Math.min(activeNote.sections.length - 1, p + 1));
                  }
                }}
                  className="px-3 py-2 rounded-[8px] text-[11.68px] font-medium text-white transition-all"
                  style={{ background: isLast ? "#10B981" : sectionAccent }}>
                  {isLast ? "Practice ✓" : "Next →"}
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

      {practiceNoteId && (
        <PracticeModal
          noteTitle={activeNote.title}
          questions={PRACTICE_DATA[practiceNoteId]?.questions || []}
          tasks={PRACTICE_DATA[practiceNoteId]?.tasks || []}
          onClose={() => setPracticeNoteId(null)}
        />
      )}
    </>
  );
  }

  return <LandingPage onAuthSuccess={handleAuthSuccess} />;
}
