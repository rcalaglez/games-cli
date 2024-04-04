export interface Pokemon {
  id: number;
  name: string;
  // Añade más propiedades según sea necesario
}

export interface PokemonProvider {
  getPokemonById(id: number): Promise<Pokemon>;
}
