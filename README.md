# Hyyung's UX Notes

A comprehensive, interactive UX research and design note library built with React and TypeScript. Features 43+ in depth notes across the full UX spectrum with interactive reading tools, quizzes, glossary tooltips, and presentation mode.

## Features

### Reading Experience

- **43+ structured notes** covering UX basics, research methods, design thinking, wireframing, prototyping, visual design, design systems, and more
- **5 deep sections per note** with paragraphs, bullet lists, callouts, quotes, statistics, tables, diagrams, and images
- **Interactive quizzes** at the end of each note to test comprehension with instant feedback and explanations
- **Glossary tooltips** — hover any highlighted term to see its definition inline without leaving the page
- **Auto scroll presentation mode** — click the play button to auto advance through sections every 5 seconds for hands free reading
- **Section completion checkmarks** — visual green dots track which sections you have viewed; a dot indicator row below sections shows progress
- **Reading time badge** — calculated dynamically from actual content word count
- **Difficulty badges** — each note tagged as Beginner, Intermediate, or Advanced

### Personalization

- **Custom accent color picker** — click the color swatch in the toolbar to override any note's accent color; resets with the x button
- **Section progress bar** — shows how many of the current note's sections you have viewed
- **All notes completed badge** — a star achievement badge appears in the hero when every section of every note has been viewed
- **Persistent reading progress** — viewed sections are saved to localStorage across sessions

### Navigation & Sidebar

- **Sidebar with all 43 notes** — scrollable card list with completion checkmarks on fully viewed notes
- **Sections panel** — always visible section list above tags with completion indicators per section
- **Tag filters** — each note tagged by topic for easy scanning
- **Search** — filter notes in the admin panel by title or tags
- **Back to home** button in the notes toolbar

### Authentication & Access

- **Landing page** with sign in / sign up modals via Supabase auth
- **Email + password authentication** with optional phone number during signup
- **Access gated notes library** — only authenticated users can view notes
- **Session persistence** via localStorage and Supabase session

### Admin Panel (CMS)

- **Full CRUD** for notes — create, edit, delete notes with a rich text editor (React Quill)
- **Color theme picker** with 8 accent color options
- **Section management** — add, remove, reorder sections; customize icons, colors, and badges per section
- **Tag management** — add and remove tags with autosuggest
- **Search notes** within the admin panel
- **Version aware persistence** — localStorage and Supabase storage use versioned payloads to prevent stale data overwrites
- **Admin only access** — restricted to hyyungnim@gmail.com

### Contact & Social

- **LinkedIn profile link** connected to the author profile
- **WhatsApp contact** for direct messaging

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build tool**: Vite 6
- **Styling**: Tailwind CSS + inline styles
- **UI components**: shadcn/ui (Dialog, Tabs, Input, Button, Label)
- **Rich text editor**: React Quill
- **Authentication**: Supabase Auth (email/password)
- **Database**: Supabase (optional, for cloud sync)
- **State**: React hooks (useState, useEffect, useRef)
- **Persistence**: localStorage + Supabase

## Getting Started

```bash
npm install
npm run dev
```

### Environment Variables

Copy `.env.example` to `.env.local` and add your Supabase credentials:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

The app works without Supabase configured — auth and cloud sync are optional.

## Project Structure

```
src/
  app/
    App.tsx                 # Main app: routing, sidebar, notes view, admin
    components/
      LandingPage.tsx       # Marketing landing page
      AuthModal.tsx         # Sign in / sign up dialog
      ui/                   # shadcn/ui components
  lib/
    notes-data.ts           # Combines all note arrays
    notes-individual-a.ts   # Notes 1-14 (Basics through Accessibility)
    notes-individual-b.ts   # Notes 15-28 (Interviews through Storyboarding)
    notes-individual-c.ts   # Notes 29-43 (User Flow through Your Importance)
    supabase.ts             # Supabase client and auth helpers
  imports/
    Notes/                  # SVG icon assets
```

## Block Types

Each section within a note supports these content blocks:

| Block | Description |
|---|---|
| `para` | Text paragraph with glossary tooltip detection |
| `subheading` | Section subheading with decorative dividers |
| `bullets` | Bullet list with optional term/description pairs |
| `callout` | Highlighted callout box with label |
| `quote` | Blockquote with left accent border |
| `stat` | Prominent statistic with value, label, and footnote |
| `output` | Key takeaway or conclusion block |
| `table` | Headers + rows rendered as styled tables |
| `image` | Image with optional caption |
| `quiz` | Interactive multiple choice question with answer checking |
| `glossary` | Term/definition list rendered as glossary |
