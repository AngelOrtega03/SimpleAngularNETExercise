import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Director, DirectorCreacion } from './director.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  constructor() { }
  private http = inject(HttpClient);
  private URLbase = environment.apiURL + '/api/director';
  
  public agregarDirector(director: DirectorCreacion) {
    return this.http.post(this.URLbase, director, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  public obtenerDirectores() : Observable<Director[]>{
    return this.http.get<Director[]>(this.URLbase);
  }

  public obtenerDirectorPorId(id: number): Observable<Director>{
    return this.http.get<Director>(`${this.URLbase}/${id}`);
  }

  public actualizarDirectorPorId(id: number, director: DirectorCreacion){
    return this.http.put(`${this.URLbase}/${id}`, director);
  }

  public borrarDirectorPorId(id: number) {
    return this.http.delete(`${this.URLbase}/${id}`);
  }
}
