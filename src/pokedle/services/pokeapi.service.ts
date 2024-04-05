import { HttpClient } from "../../commons/interfaces/HttpClient";
import {
  PokemonProvider,
  Pokemon,
} from "../interfaces/pokemon-provider.interface";

export class PokeApiProvider implements PokemonProvider {
  constructor(private readonly httpClient: HttpClient) {}

  async getPokemonById(pokemonId: number): Promise<Pokemon> {
    const data = await this.httpClient.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    const { id, name, types } = data;
    const pokemon: Pokemon = {
      id: id,
      name: name,
      types: types.map((type: { type: { name: any } }) => type.type.name),
      // Mapea más propiedades según sea necesario
    };

    return pokemon;
  }
}
