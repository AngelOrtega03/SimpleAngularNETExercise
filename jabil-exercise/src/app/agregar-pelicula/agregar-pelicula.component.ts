import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { MovieService } from '../movie.service';
import { MovieCreacion } from '../movie.models';
import { DirectorService } from '../director.service';
import { Director } from '../director.models';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormularioPeliculaComponent } from '../formulario-pelicula/formulario-pelicula.component';

@Component({
  selector: 'app-agregar-pelicula',
  imports: [FormularioPeliculaComponent],
  templateUrl: './agregar-pelicula.component.html',
  styleUrl: './agregar-pelicula.component.css'
})
export class AgregarPeliculaComponent {
  movieService = inject(MovieService);
  router = inject(Router);

  guardarCambios(movie: MovieCreacion) {
    this.movieService.agregarPelicula(movie).subscribe(() => {
      this.router.navigate(["peliculas"]);
    })
  }
}
