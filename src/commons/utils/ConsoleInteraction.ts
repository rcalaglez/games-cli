import readline from "readline";
import { UserInteraction } from "../interfaces/UserInteraction";

export class ConsoleInteraction implements UserInteraction {
  private rl: readline.Interface;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  question(query: string, callback: (answer: string) => void): void {
    this.rl.question(query, callback);
  }

  close(): void {
    this.rl.close();
  }
}
