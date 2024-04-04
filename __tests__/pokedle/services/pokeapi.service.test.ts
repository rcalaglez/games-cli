import { PokeApiProvider } from "../../../src/pokedle/services/pokeapi.service";
import { HttpClient } from "../../../src/commons/interfaces/HttpClient";

// Mock data
const mockPokemonData = {
  id: 1,
  name: "bulbasaur",
  // Agrega más datos de prueba si es necesario
};

// Mock HttpClient
const mockHttpClient: HttpClient = {
  get: jest.fn().mockResolvedValue(mockPokemonData),
};

describe("PokeApiProvider", () => {
  it("should return a pokemon object when getPokemonById is called", async () => {
    const pokeApiProvider = new PokeApiProvider(mockHttpClient);
    const pokemon = await pokeApiProvider.getPokemonById(1);
    console.log(pokemon);

    expect(mockHttpClient.get).toHaveBeenCalledWith(
      "https://pokeapi.co/api/v2/pokemon/1"
    );
    expect(pokemon).toEqual({ id: 1, name: "bulbasaur" });
  });
});
