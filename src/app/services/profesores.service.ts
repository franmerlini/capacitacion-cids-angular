import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProfesor } from '../interfaces/IProfesor';
import { Profesor } from '../models/profesor';

@Injectable({
  providedIn: 'root',
})
export class ProfesoresService {
  constructor(private httpClient: HttpClient) {}

  obtenerProfesores(): Observable<Profesor[]> {
    return this.httpClient
      .get<Profesor[]>(`${environment.apiUrl}/obtenerProfesoresConQB`)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  eliminarProfesor(cuil: string): Observable<void> {
    return this.httpClient.delete<void>(
      `${environment.apiUrl}/eliminarProfesorConSP/${cuil}`
    );
  }

  agregarProfesor(profesor: IProfesor): Observable<IProfesor> {
    return this.httpClient.post<IProfesor>(
      `${environment.apiUrl}/crearProfesorConGR`,
      profesor
    );
  }

  editarProfesor(profesor: IProfesor): Observable<IProfesor> {
    return this.httpClient.put<IProfesor>(
      `${environment.apiUrl}/modificarProfesorConGR/${profesor.idPersona2.cuil}`,
      profesor
    );
  }
}
