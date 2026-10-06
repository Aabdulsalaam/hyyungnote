import { describe, it, expect } from "vitest";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { RichContent } from "./App";
import { INITIAL_NOTES } from "@/lib/notes-data";

describe("all note sections render without crashing", () => {
  for (const note of INITIAL_NOTES as any[]) {
    for (const section of note.sections ?? []) {
      it(`${note.title} › ${section.label}`, () => {
        if (!section.blocks || section.blocks.length === 0) return;
        const html = renderToStaticMarkup(
          React.createElement(RichContent, { blocks: section.blocks, accent: "#2563EB" })
        );
        expect(typeof html).toBe("string");
        expect(html.length).toBeGreaterThan(0);
      });
    }
  }
});
