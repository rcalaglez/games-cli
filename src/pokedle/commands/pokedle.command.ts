import { Command } from "commander";
import { FigletBanner } from "../../commons/ui/FigletBanner";
import { GameInitializer } from "../../commons/utils/GameInitializer";

export const pokedleCommand = new Command("pokedle")
  .description("Start a game of Pokedle")
  .option("--types", "Show the types of the Pokémon")
  .option(
    "--top-gen <number>",
    "Set the top generation limit (between 1 and 9)",
    parseInt
  )
  .option("--number", "Show the pokedex number")
  .option(
    "--first-letter",
    "Show the first letter of the Pokémon name as a clue"
  )
  .action(async (options) => {
    if (options.topGen && (options.topGen < 1 || options.topGen > 9)) {
      console.error("The --top-gen option must be a number between 1 and 9.");
      process.exit(1);
    }
    GameInitializer.startPokedle(options);
  });
