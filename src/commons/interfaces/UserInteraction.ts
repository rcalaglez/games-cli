export interface UserInteraction {
  question(query: string, callback: (answer: string) => void): void;
  close(): void;
}
