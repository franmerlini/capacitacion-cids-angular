import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './components/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { TemasComponent } from './components/temas/temas.component';
import { ReparticionesComponent } from './components/reparticiones/reparticiones.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AgregarAlumnoComponent } from './components/alumnos/agregar-alumno/agregar-alumno.component';
import { AgregarProfesorComponent } from './components/profesores/agregar-profesor/agregar-profesor.component';
import { MatPaginatorIntl } from '@angular/material/paginator';
import {
  CustomPaginatorComponent,
  MyCustomPaginatorIntl,
} from './components/shared/custom-paginator/custom-paginator.component';
import { PuntajesComponent } from './components/puntajes/puntajes.component';
import { EliminarProfesorComponent } from './components/profesores/eliminar-profesor/eliminar-profesor.component';
import { ConsultarProfesorComponent } from './components/profesores/consultar-profesor/consultar-profesor.component';
import { EditarProfesorComponent } from './components/profesores/editar-profesor/editar-profesor.component';
import { EditarPuntajeComponent } from './components/puntajes/editar-puntaje/editar-puntaje.component';
import { ConsultarPuntajeComponent } from './components/puntajes/consultar-puntaje/consultar-puntaje.component';
import { AgregarPuntajeComponent } from './components/puntajes/agregar-puntaje/agregar-puntaje.component';
import { EliminarPuntajeComponent } from './components/puntajes/eliminar-puntaje/eliminar-puntaje.component';
import { ErrorComponent } from './components/shared/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    ProfesoresComponent,
    TemasComponent,
    ReparticionesComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    AgregarAlumnoComponent,
    AgregarProfesorComponent,
    CustomPaginatorComponent,
    PuntajesComponent,
    EliminarProfesorComponent,
    ConsultarProfesorComponent,
    EditarProfesorComponent,
    EditarPuntajeComponent,
    ConsultarPuntajeComponent,
    AgregarPuntajeComponent,
    EliminarPuntajeComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }],
  bootstrap: [AppComponent],
})
export class AppModule {}
