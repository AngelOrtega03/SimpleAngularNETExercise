import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { DirectorService } from '../director.service';
import { Director, DirectorCreacion } from '../director.models';
import { FormularioDirectorComponent } from '../formulario-director/formulario-director.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-director',
  imports: [FormularioDirectorComponent],
  templateUrl: './editar-director.component.html',
  styleUrl: './editar-director.component.css'
})
export class EditarDirectorComponent implements OnInit {
  @Input({transform: numberAttribute})
  id!: number

  directorService = inject(DirectorService);
  router = inject(Router);
  modelo?: Director;

  ngOnInit(): void {
    this.directorService.obtenerDirectorPorId(this.id).subscribe(director => {
      this.modelo = director;
    });
  }

  guardarCambios(director: DirectorCreacion) {
    this.directorService.actualizarDirectorPorId(this.id, director).subscribe(() => {
      this.router.navigate(['/director']);
    });
  }
}
