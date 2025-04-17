import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie, MovieCreacion } from '../movie.models';
import { FormularioPeliculaComponent } from '../formulario-pelicula/formulario-pelicula.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-pelicula',
  imports: [FormularioPeliculaComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent implements OnInit {
  @Input({transform: numberAttribute})
  id!: number

  movieService = inject(MovieService);
  router = inject(Router);
  modelo?: Movie;

  ngOnInit(): void {
    this.movieService.obtenerPeliculaPorId(this.id).subscribe(movie => {
      this.modelo = movie;
    });
  }

  guardarCambios(movie: MovieCreacion) {
    this.movieService.actualizarPeliculaPorId(this.id, movie).subscribe(() => {
      this.router.navigate(['/peliculas']);
    });
  }
}
