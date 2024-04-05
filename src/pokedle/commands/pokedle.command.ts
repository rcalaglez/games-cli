import { Command } from "commander";
import { AxiosHttpClient } from "../../commons/utils/AxiosHttpClient";
import { ChalkColorizer } from "../../commons/utils/ChalkColorizer";
import { PokeApiProvider } from "../services/pokeapi.service";
import { Pokedle } from "../games/pokedle.game";
import { ConsoleInteraction } from "../../commons/utils/ConsoleInteraction";
import { showBanner } from "../../commons/ui/banner";

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

    await showBanner("Pokedle");

    const httpClient = new AxiosHttpClient();
    const colorizer = new ChalkColorizer();
    const pokemonProvider = new PokeApiProvider(httpClient);
    const userInteraction = new ConsoleInteraction();
    const pokedle = new Pokedle(
      colorizer,
      userInteraction,
      pokemonProvider,
      options.topGen
    );
    pokedle.start(options.types, options.firstLetter, options.number);
  });
