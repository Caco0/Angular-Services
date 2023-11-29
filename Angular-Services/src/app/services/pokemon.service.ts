import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor() {}

  getPokemon(pokemonName: string) {
    console.log(pokemonName);
  }
}
