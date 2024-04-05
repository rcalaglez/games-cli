import { Pokedle } from "../../pokedle/games/pokedle.game";
import { PokeApiProvider } from "../../pokedle/services/pokeapi.service";
import { FigletBanner } from "../ui/FigletBanner";
import { AxiosHttpClient } from "./AxiosHttpClient";
import { ChalkColorizer } from "./ChalkColorizer";
import { ConsoleInteraction } from "./ConsoleInteraction";

// TODO options should be an interface

export class GameInitializer {
  static async startPokedle(options: any) {
    const banner = new FigletBanner();
    await banner.show("Pokedle");

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
