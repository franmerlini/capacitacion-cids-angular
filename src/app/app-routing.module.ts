import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { PuntajesComponent } from './components/puntajes/puntajes.component';
import { ReparticionesComponent } from './components/reparticiones/reparticiones.component';
import { ErrorComponent } from './components/shared/error/error.component';
import { TemasComponent } from './components/temas/temas.component';

const routes: Routes = [
  { path: 'home', component: InicioComponent },
  { path: 'temas', component: TemasComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'profesores', component: ProfesoresComponent },
  { path: 'reparticiones', component: ReparticionesComponent },
  //{ path: 'puntajes', component: PuntajesComponent },
  { path: 'puntajes', component: ErrorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
