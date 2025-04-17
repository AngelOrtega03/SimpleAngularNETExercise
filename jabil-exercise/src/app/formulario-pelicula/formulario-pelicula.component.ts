import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { Movie, MovieCreacion } from '../movie.models';
import { DirectorService } from '../director.service';
import { Director } from '../director.models';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-formulario-pelicula',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink, CommonModule, MatSelectModule],
  templateUrl: './formulario-pelicula.component.html',
  styleUrl: './formulario-pelicula.component.css'
})
export class FormularioPeliculaComponent implements OnInit {
  
  private readonly formBuilder = inject(FormBuilder);
  directorService = inject(DirectorService);
  directores?: Director[];

  @Input({required: true})
  titulo!: string;

  @Input()
  modelo?: Movie;

  @Output()
  posteoFormulario = new EventEmitter<MovieCreacion>()

  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  form = this.formBuilder.group({
    name: [''],
    gender: [''],
    duration: [0],
    fkDirector: [0],
  })

  constructor() {
    this.directorService.obtenerDirectores().subscribe(directores => {
      this.directores = directores;
      console.log('Directores obtenidos:', directores);
    });
  }

  guardarCambios() {
    if (this.form.valid) {

      let movie = this.form.value as MovieCreacion;

      this.posteoFormulario.emit(movie);
    }
  }

}
