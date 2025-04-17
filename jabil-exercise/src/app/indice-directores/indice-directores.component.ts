import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { DirectorService } from '../director.service';
import { Director } from '../director.models';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-indice-directores',
  imports: [MatButtonModule, RouterLink, MatTableModule],
  templateUrl: './indice-directores.component.html',
  styleUrl: './indice-directores.component.css'
})
export class IndiceDirectoresComponent {
  directorService = inject(DirectorService);
  directores?: Director[];
  columnasAMostrar = ['Nombre', 'Acciones'];

  constructor() {
    this.cargarDirectores();
  }

  cargarDirectores() {
    this.directorService.obtenerDirectores().subscribe(directores => {
      this.directores = directores;
    });
  }

  borrar(id: number) {
    this.directorService.borrarDirectorPorId(id).subscribe(() => {
      this.cargarDirectores();
    })
  }
}
