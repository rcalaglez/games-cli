#!/usr/bin/env node

// Tu código CLI aquí
import { Command } from "commander";
import { pokedleCommand } from "./pokedle/commands/pokedle.command";
import { showBanner } from "./commons/ui/banner";

const program = new Command();

showBanner("Games CLI")
  .then(() => {
    program
      .version("0.0.1")
      .description("The best CLI to not be bored.")
      .addCommand(pokedleCommand);

    program.parse(process.argv);
  })
  .catch((error) => {
    console.error("Error showing the banner:", error);
    process.exit(1);
  });
