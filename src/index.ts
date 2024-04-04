#!/usr/bin/env node

// Tu código CLI aquí
import { Command } from "commander";
import { pokedleCommand } from "./pokedle/commands/pokedle.command";

const program = new Command();

program
  .version("0.0.1")
  .description("The best CLI to not be bored.")
  .addCommand(pokedleCommand);

program.parse(process.argv);
