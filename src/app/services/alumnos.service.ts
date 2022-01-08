import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Alumno } from '../models/alumno';
import { environment } from 'src/environments/environment';
import { IAlumno } from '../interfaces/IAlumno';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  constructor(private httpClient: HttpClient) {}

  obtenerAlumnos(): Observable<Alumno[]> {
    return this.httpClient
      .get<Alumno[]>(`${environment.apiUrl}/obtenerAlumnosConQB`)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  eliminarAlumno(cuil: string): Observable<void> {
    return this.httpClient.delete<void>(
      `${environment.apiUrl}/eliminarAlumnoConGR/${cuil}`
    );
  }

  agregarAlumno(alumno: IAlumno): Observable<any> {
    return this.httpClient.post<any>(
      `${environment.apiUrl}/crearAlumnoConGR`,
      alumno
    );
  }

  editarAlumno(alumno: IAlumno): Observable<any> {
    return this.httpClient.put<any>(
      `${environment.apiUrl}/modificarAlumnoConGR/${alumno.idPersona2.cuil}`,
      alumno
    );
  }
}
