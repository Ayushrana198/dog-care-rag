export interface Source {
  source: string;
  page: number;
}

export interface ChatResponse {
  question: string;
  answer: string;
  sources: Source[];
}

export interface Message {
  role: "user" | "assistant";
  content: string;
  sources?: Source[];
}