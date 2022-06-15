import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  constructor(private http: HttpClient) {}
  get(pokemonName: string) {
    return this.http.get<any>(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
  }
}
