#!/usr/bin/env node

// Tu código CLI aquí
import { Command } from "commander";
import { pokedleCommand } from "./pokedle/commands/pokedle.command";
import { FigletBanner } from "./commons/ui/FigletBanner";
import { MenuHandler } from "./commons/ui/MenuHandler";
const program = new Command();

program
  .version("0.0.1")
  .description("The best CLI to not be bored.")
  .addCommand(pokedleCommand);

const banner = new FigletBanner();

banner
  .show("Games CLI")
  .then(() => {
    if (
      process.argv.length < 3 ||
      (process.argv.length === 3 &&
        ["-V", "--version"].includes(process.argv[2]))
    ) {
      const menuHandler = new MenuHandler();
      menuHandler.showMainMenu();
    } else {
      program.parse(process.argv);
    }
  })
  .catch((error) => {
    console.error("Error showing the banner:", error);
  });
