import { NOTES_A } from "./notes-individual-a";
import { NOTES_B } from "./notes-individual-b";
import { NOTES_C } from "./notes-individual-c";

const rawNotes = [
  ...NOTES_A,
  ...NOTES_B,
  ...NOTES_C,
];

export const INITIAL_NOTES = rawNotes.map((n: any, i: number) => ({
  ...n,
  difficulty: n.difficulty || (i < 14 ? "Beginner" : i < 28 ? "Intermediate" : "Advanced"),
}));
