import { Pokedle } from "../../../src/pokedle/games/pokedle.game";
import { ChalkColorizer } from "../../../src/commons/utils/ChalkColorizer";
import { PokeApiProvider } from "../../../src/pokedle/services/pokeapi.service";
import { ConsoleInteraction } from "../../../src/commons/utils/ConsoleInteraction";

// Creando mocks directos para las dependencias
const colorizerMock = {
  green: jest.fn().mockImplementation((text) => `green(${text})`),
  bgGreen: jest.fn().mockImplementation((text) => `bgGreen(${text})`),
  bgYellow: jest.fn().mockImplementation((text) => `bgYellow(${text})`),
};

const userInteractionMock = {
  question: jest.fn((query, callback) => callback("pikachu")),
  close: jest.fn(),
};

const pokemonProviderMock = {
  getPokemonById: jest
    .fn()
    .mockResolvedValue({ id: 25, name: "pikachu", type: ["electric"] }),
};

const consoleSpyLog = jest.spyOn(console, "log").mockImplementation();
const consoleSpyError = jest.spyOn(console, "error").mockImplementation();

describe("Pokedle Game", () => {
  beforeEach(() => {
    // Limpia las implementaciones y llamadas de mocks antes de cada test
    jest.clearAllMocks();
  });

  it('displays "Out of attempts!" when the user runs out of attempts', async () => {
    // Configura el mock de `question` para simular varios intentos del usuario
    userInteractionMock.question
      .mockImplementationOnce((query, callback) => callback("wrongguess"))
      .mockImplementationOnce((query, callback) => callback("wrongguess"))
      .mockImplementationOnce((query, callback) => callback("wrongguess"))
      .mockImplementationOnce((query, callback) => callback("wrongguess"))
      .mockImplementationOnce((query, callback) => callback("wrongguess"))
      .mockImplementationOnce((query, callback) => callback("wrongguess"));

    const game = new Pokedle(
      colorizerMock,
      userInteractionMock,
      pokemonProviderMock
    );

    await game.start();

    expect(userInteractionMock.close).toHaveBeenCalled();
    expect(consoleSpyLog).toHaveBeenCalledWith(
      expect.stringContaining("Out of attempts! The Pokémon was pikachu.")
    );
  });

  it('displays "Correct! You guessed the Pokémon!" when the user guesses correctly', async () => {
    const game = new Pokedle(
      colorizerMock,
      userInteractionMock,
      pokemonProviderMock
    );

    await game.start();

    expect(consoleSpyLog).toHaveBeenCalledWith(
      expect.stringContaining("Correct! You guessed the Pokémon!")
    );
  });

  it('logs "There was an error fetching the Pokémon." if the pokemon cannot be loaded', async () => {
    pokemonProviderMock.getPokemonById.mockRejectedValueOnce(
      new Error("Fetch error")
    );

    const game = new Pokedle(
      colorizerMock,
      userInteractionMock,
      pokemonProviderMock
    );

    await game.start();

    expect(consoleSpyError).toHaveBeenCalledWith(
      "There was an error fetching the Pokémon."
    );
  });
});
