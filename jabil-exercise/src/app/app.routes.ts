import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { IndicePeliculasComponent } from './indice-peliculas/indice-peliculas.component';
import { AgregarPeliculaComponent } from './agregar-pelicula/agregar-pelicula.component';
import { IndiceDirectoresComponent } from './indice-directores/indice-directores.component';
import { AgregarDirectorComponent } from './agregar-director/agregar-director.component';
import { EditarDirectorComponent } from './editar-director/editar-director.component';
import { EditarPeliculaComponent } from './editar-pelicula/editar-pelicula.component';

export const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'peliculas', component: IndicePeliculasComponent},
    {path: 'peliculas/agregar', component: AgregarPeliculaComponent},
    {path: 'peliculas/editar/:id', component: EditarPeliculaComponent},
    {path: 'director', component: IndiceDirectoresComponent},
    {path: 'director/agregar', component: AgregarDirectorComponent},
    {path: 'director/editar/:id', component: EditarDirectorComponent}
];
