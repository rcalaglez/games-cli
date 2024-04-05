import { Pokedle } from "../../pokedle/games/pokedle.game";
import { PokeApiProvider } from "../../pokedle/services/pokeapi.service";
import { AxiosHttpClient } from "./AxiosHttpClient";
import { ChalkColorizer } from "./ChalkColorizer";
import { ConsoleInteraction } from "./ConsoleInteraction";

// TODO options should be an interface

export class GameInitializer {
  static startPokedle(options: any) {
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
    pokedle.start({
      showTypes: options.types ?? false,
      showFirstLetter: options.firstLetter ?? false,
      showNumber: options.number ?? false,
    });
  }
}
