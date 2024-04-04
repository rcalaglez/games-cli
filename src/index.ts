#!/usr/bin/env node

// Tu código CLI aquí
import { Command } from "commander";
import { greetCommand } from "./commands/greet";

const program = new Command();

program.version("0.0.1").description("An example CLI").addCommand(greetCommand);

program.parse(process.argv);
