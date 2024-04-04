import { Colorizer } from "../../commons/interfaces/Colorizer";
import { TOTAL_POKEMONS } from "./constants";

export const getRandomPokemonId = () =>
  Math.floor(Math.random() * TOTAL_POKEMONS) + 1;

export const validateGuess = (guess: string): boolean => {
  // Valida que la entrada sea solo letras y no esté vacía
  return /^[a-zA-Z]+$/.test(guess) && guess.length > 0;
};

export const updateGuessLetters = (
  guess: string,
  pokemonName: string,
  guessLetters: string[],
  colorizer: Colorizer
): string[] => {
  // Convierte ambos, el nombre y la suposición a minúsculas para una comparación insensible a mayúsculas
  const lowerCaseName = pokemonName.toLowerCase();
  const lowerCaseGuess = guess.toLowerCase();

  return guessLetters.map((letter, index) => {
    if (lowerCaseGuess[index] === lowerCaseName[index]) {
      return colorizer.bgGreen(lowerCaseGuess[index]);
    } else if (lowerCaseName.includes(lowerCaseGuess[index])) {
      // Letra correcta pero en posición incorrecta
      return colorizer.bgYellow(lowerCaseGuess[index]);
    }
    return letter;
  });
};
