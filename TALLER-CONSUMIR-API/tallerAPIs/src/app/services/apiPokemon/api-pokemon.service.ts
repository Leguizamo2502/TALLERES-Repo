import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, Observable } from 'rxjs';
import { PokemonListResponse, PokemonModel } from '../../models/apiPokemon/apiPokemon.model';

@Injectable({
  providedIn: 'root',
})
export class ApiPokemonService {
  constructor() {}
  private http = inject(HttpClient);
  private url = environment.apiPokemon;

  getAll(limit: number = 100): Observable<PokemonModel[]> {
    return this.http
      .get<PokemonListResponse>(`${this.url}/pokemon?limit=${limit}`)
      .pipe(map(response => response.results));
  }
}
