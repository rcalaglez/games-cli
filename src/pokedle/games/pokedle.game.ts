import { Colorizer } from "../../commons/interfaces/Colorizer";
import { UserInteraction } from "../../commons/interfaces/UserInteraction";
import { PokedleOptions } from "../interfaces/pokedle.options";
import { PokemonProvider } from "../interfaces/pokemon-provider.interface";
import {
  getRandomPokemonId,
  updateGuessLetters,
  validateGuess,
} from "../utils/functions";

/**
 * La clase Pokedle gestiona el juego donde los usuarios intentan adivinar
 * el nombre de un Pokémon basándose en pistas.
 */
export class Pokedle {
  private attempts: number = 6;
  private guessLetters: string[] = [];
  private pokemonName: string = "";

  /**
   * Construye una instancia de la clase Pokedle.
   * @param {Colorizer} colorizer - Una instancia de Colorizer para formatear el texto de salida.
   * @param {UserInteraction} userInteraction - Maneja la interacción con el usuario a través de la consola.
   * @param {PokemonProvider} pokemonProvider - Provee los datos de los Pokémon.
   */
  constructor(
    private readonly colorizer: Colorizer,
    private readonly userInteraction: UserInteraction,
    private readonly pokemonProvider: PokemonProvider,
    private readonly topGen: number = 8
  ) {}

  /**
   * Inicia el juego cargando un Pokémon aleatorio y preparando el estado inicial.
   */
  async start({ showTypes, showFirstLetter, showNumber }: PokedleOptions) {
    const pokemonId = getRandomPokemonId(this.topGen);
    if (showNumber) console.log("Pokedex number: ", pokemonId);
    try {
      const pokemon = await this.pokemonProvider.getPokemonById(pokemonId);
      this.pokemonName = pokemon.name;

      if (showTypes) {
        const types = pokemon.types.join(", ");
        console.log(`Types: ${types}`);
      }

      console.log(`The Pokémon has ${this.pokemonName.length} letters.`);
      this.guessLetters = Array(this.pokemonName.length).fill(" _ ");
      if (showFirstLetter) {
        this.guessLetters[0] = this.pokemonName[0];
      }
      this.makeGuess();
    } catch (error) {
      console.error("There was an error fetching the Pokémon.");
      this.userInteraction.close();
    }
  }

  /**
   * Solicita al usuario que adivine el nombre del Pokémon y procesa la respuesta.
   * Repite este proceso hasta que el usuario adivine correctamente o se agoten los intentos.
   * @private
   */
  private makeGuess() {
    if (this.attempts <= 0) {
      console.log(`Out of attempts! The Pokémon was ${this.pokemonName}.`);
      this.userInteraction.close();
      return;
    }

    console.log(this.guessLetters.join("  "));
    this.userInteraction.question("Guess a Pokémon: ", (guess) => {
      if (!validateGuess(guess)) {
        console.log("Please enter a valid Pokémon name (letters only).");
        this.makeGuess();
        return;
      }

      this.processGuess(guess);
    });
  }

  /**
   * Procesa el intento del usuario, comparándolo con el nombre del Pokémon.
   * Actualiza el estado del juego basado en si el intento fue correcto o no.
   * @param {string} guess - El intento del usuario.
   * @private
   */
  private processGuess(guess: string) {
    if (guess.toLowerCase() === this.pokemonName.toLowerCase()) {
      console.log("Correct! You guessed the Pokémon!");
      this.updateGuessLetters(guess);
      console.log(this.guessLetters.join("  "));
      this.userInteraction.close();
      return;
    }

    console.log("Incorrect. Try again.");
    this.attempts--;
    this.updateGuessLetters(guess);
    this.makeGuess();
  }

  /**
   * Actualiza las letras adivinadas basadas en el intento del usuario.
   * Las letras correctas se revelan en su posición correspondiente.
   * @param {string} guess - El intento del usuario.
   * @private
   */
  private updateGuessLetters(guess: string) {
    const updatedGuessLetters = updateGuessLetters(
      guess,
      this.pokemonName,
      this.guessLetters,
      this.colorizer
    );
    this.guessLetters.splice(
      0,
      this.guessLetters.length,
      ...updatedGuessLetters
    );
  }
}
