export type UserRole = "teacher" | "student";

export interface Assessment {
  id: number;
  title: string;
  description: string;
  questions: { questionText: string }[];
  userId: number;
  submittedBy?: { answer: string }[];
}
