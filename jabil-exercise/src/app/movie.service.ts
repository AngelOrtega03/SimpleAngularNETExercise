import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Movie, MovieCreacion } from './movie.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }
  private http = inject(HttpClient);
  private URLbase = environment.apiURL + '/api/movies';

  public agregarPelicula(movie: MovieCreacion) {
    return this.http.post(this.URLbase, movie, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  public obtenerPeliculas() : Observable<Movie[]> {
    return this.http.get<Movie[]>(this.URLbase);
  }

  public obtenerPeliculaPorId(id: number): Observable<Movie>{
    return this.http.get<Movie>(`${this.URLbase}/${id}`);
  }

  public actualizarPeliculaPorId(id: number, movie: MovieCreacion){
    return this.http.put(`${this.URLbase}/${id}`, movie);
  }

  public borrarPeliculaPorId(id: number) {
    return this.http.delete(`${this.URLbase}/${id}`);
  }
}
