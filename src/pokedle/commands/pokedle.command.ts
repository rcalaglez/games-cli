import { Command } from "commander";
import { AxiosHttpClient } from "../../commons/utils/AxiosHttpClient";
import { ChalkColorizer } from "../../commons/utils/ChalkColorizer";
import { PokeApiProvider } from "../services/pokeapi.service";
import { Pokedle } from "../games/pokedle.game";
import { ConsoleInteraction } from "../../commons/utils/ConsoleInteraction";

export const pokedleCommand = new Command("pokedle")
  .description("Start a game of Pokedle")
  .option("--types", "Show the types of the Pokémon")
  .option(
    "--first-letter",
    "Show the first letter of the Pokémon name as a clue"
  )
  .action((options) => {
    const httpClient = new AxiosHttpClient();
    const colorizer = new ChalkColorizer();
    const pokemonProvider = new PokeApiProvider(httpClient);
    const userInteraction = new ConsoleInteraction();
    const pokedle = new Pokedle(colorizer, userInteraction, pokemonProvider);
    pokedle.start(options.types, options.firstLetter);
  });