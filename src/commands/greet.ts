import { Command } from "commander";

export const greetCommand = new Command("greet")
  .description("Greet the user")
  .action(() => {
    console.log("Hello from your CLI!");
  });
