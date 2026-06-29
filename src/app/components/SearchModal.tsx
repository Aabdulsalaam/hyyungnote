import { useState, useEffect, useRef } from "react";

type Note = {
  id: string;
  themeId: string;
  title: string;
  subtitle: string;
  tags: string[];
  sections: { id: string; label: string; content: string; blocks?: { type: string; text?: string; desc?: string; term?: string; label?: string }[] }[];
};

type SearchResult = {
  noteId: string;
  sectionId?: string;
  label: string;
  description: string;
  type: "note" | "section" | "tag";
};

type SearchModalProps = {
  notes: Note[];
  currentNoteId: string;
  onSelect: (noteId: string, sectionId?: string) => void;
  onClose: () => void;
};

export default function SearchModal({ notes, currentNoteId, onSelect, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const found: SearchResult[] = [];

    for (const note of notes) {
      if (note.title.toLowerCase().includes(q)) {
        found.push({ noteId: note.id, label: note.title, description: note.subtitle, type: "note" });
      }
      for (const tag of note.tags) {
        if (tag.toLowerCase().includes(q)) {
          found.push({ noteId: note.id, label: `${note.title} — ${tag}`, description: "Tag match", type: "tag" });
        }
      }
      for (const section of note.sections) {
        if (section.label.toLowerCase().includes(q)) {
          found.push({ noteId: note.id, sectionId: section.id, label: section.label, description: `Section in ${note.title}`, type: "section" });
          continue;
        }
        for (const block of section.blocks || []) {
          if (block.text && block.text.toLowerCase().includes(q)) {
            found.push({ noteId: note.id, sectionId: section.id, label: section.label, description: (block.text.length > 100 ? block.text.slice(0, 100) + "..." : block.text), type: "section" });
            break;
          }
          if (block.desc && block.desc.toLowerCase().includes(q)) {
            found.push({ noteId: note.id, sectionId: section.id, label: section.label, description: (block.desc.length > 100 ? block.desc.slice(0, 100) + "..." : block.desc), type: "section" });
            break;
          }
        }
      }
    }

    setResults(found.slice(0, 20));
    setActiveIdx(0);
  }, [query, notes]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx(p => Math.min(results.length - 1, p + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx(p => Math.max(0, p - 1));
    } else if (e.key === "Enter" && results[activeIdx]) {
      const r = results[activeIdx];
      onSelect(r.noteId, r.sectionId);
    } else if (e.key === "Escape") {
      onClose();
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]" onClick={onClose}>
      <div className="fixed inset-0 bg-black/40" />
      <div className="relative w-full max-w-[560px] mx-4 rounded-[14px] overflow-hidden" style={{ background: "#ffffff", border: "1px solid #e2e8f0", boxShadow: "0px 16px 48px rgba(0,0,0,0.15)" }}
        onClick={e => e.stopPropagation()}>
        <div className="flex items-center gap-3 px-4 py-3" style={{ borderBottom: "1px solid #f1f5f9" }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.5 11.5L15 15" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input ref={inputRef} type="text" placeholder="Search notes, sections, tags..."
            value={query} onChange={e => setQuery(e.target.value)} onKeyDown={handleKeyDown}
            className="flex-1 text-[14px] text-[#0f1729] outline-none placeholder:text-[#94a3b8] bg-transparent"
            style={{ fontFamily: "'Inter',sans-serif" }} />
          <kbd className="text-[10px] font-medium px-1.5 py-0.5 rounded" style={{ background: "#f1f5f9", color: "#94a3b8" }}>ESC</kbd>
        </div>
        {results.length > 0 && (
          <div className="max-h-[360px] overflow-y-auto py-1">
            {results.map((r, i) => {
              const isCurrentNote = r.noteId === currentNoteId;
              return (
                <button key={`${r.noteId}-${r.sectionId || ""}-${i}`} onClick={() => onSelect(r.noteId, r.sectionId)}
                  className="w-full text-left px-4 py-2.5 flex items-center gap-3 transition-colors"
                  style={{ background: i === activeIdx ? "#f1f5f9" : "transparent" }}>
                  <div className="flex items-center justify-center w-7 h-7 rounded-[8px] shrink-0" style={{ background: isCurrentNote ? "#dbeafe" : "#f1f5f9" }}>
                    {r.type === "note" ? (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 1.5H9.5C9.5 1.5 10.5 1.5 10.5 2.5V10.5C10.5 10.5 10.5 11.5 9.5 11.5H2.5C2.5 11.5 1.5 11.5 1.5 10.5V2.5C1.5 2.5 1.5 1.5 2.5 1.5Z" stroke={isCurrentNote ? "#2563EB" : "#64748b"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"/><path d="M4 4H8" stroke={isCurrentNote ? "#2563EB" : "#64748b"} strokeLinecap="round" strokeWidth="1.2"/><path d="M4 6H8" stroke={isCurrentNote ? "#2563EB" : "#64748b"} strokeLinecap="round" strokeWidth="1.2"/><path d="M4 8H6" stroke={isCurrentNote ? "#2563EB" : "#64748b"} strokeLinecap="round" strokeWidth="1.2"/></svg>
                    ) : (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1.5 6L4.5 9L10.5 3" stroke={isCurrentNote ? "#2563EB" : "#64748b"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"/></svg>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[12.8px] font-medium truncate" style={{ color: "#0f1729" }}>{r.label}</span>
                      {isCurrentNote && <span className="text-[9px] font-medium px-1.5 py-0.5 rounded shrink-0" style={{ background: "#dbeafe", color: "#2563EB" }}>Current</span>}
                    </div>
                    <p className="text-[11.2px] text-[#64748b] truncate mt-0.5">{r.description}</p>
                  </div>
                </button>
              );
            })}
          </div>
        )}
        {query.trim() && results.length === 0 && (
          <div className="px-4 py-8 text-center">
            <p className="text-[13px] text-[#94a3b8]">No results found for "{query}"</p>
          </div>
        )}
      </div>
    </div>
  );
}
