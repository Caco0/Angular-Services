import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PokemonData } from 'src/app/models/pokemonData';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl: string = '';
  private pokeData: PokemonData | any;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.pokeApi;
  }

  getPokemon(pokemonName: string): Observable<PokemonData> {
    this.pokeData = this.http.get<PokemonData>(`${this.baseUrl}${pokemonName}`);
    return this.pokeData;
  }
}
