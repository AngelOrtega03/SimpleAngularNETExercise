import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DirectorService } from '../director.service';
import { MovieCreacion } from '../movie.models';
import { DirectorCreacion } from '../director.models';
import { FormularioDirectorComponent } from '../formulario-director/formulario-director.component';

@Component({
  selector: 'app-agregar-director',
  imports: [FormularioDirectorComponent],
  templateUrl: './agregar-director.component.html',
  styleUrl: './agregar-director.component.css'
})
export class AgregarDirectorComponent {
  router = inject(Router);
  directorService = inject(DirectorService);

  guardarCambios(director: DirectorCreacion) {
    this.directorService.agregarDirector(director).subscribe(() => {
      this.router.navigate(["director"])
    })
  }
}
