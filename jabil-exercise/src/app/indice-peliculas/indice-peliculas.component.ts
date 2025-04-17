import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.models';

@Component({
  selector: 'app-indice-peliculas',
  imports: [MatButtonModule, RouterLink, MatTableModule],
  templateUrl: './indice-peliculas.component.html',
  styleUrl: './indice-peliculas.component.css'
})
export class IndicePeliculasComponent {
  moviesService = inject(MovieService);
  movies?: Movie[];
  columnasAMostrar = ['Nombre', 'Acciones'];

  constructor() {
    this.cargarPeliculas();
  }

  cargarPeliculas() {
    this.moviesService.obtenerPeliculas().subscribe(peliculas => {
      this.movies = peliculas;
    });
  }

  borrar(id: number) {
    this.moviesService.borrarPeliculaPorId(id).subscribe(() => {
      this.cargarPeliculas();
    })
  }
}
