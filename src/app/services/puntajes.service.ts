import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPuntaje } from '../interfaces/IPuntaje';
import { IPuntajeDialogData } from '../interfaces/IPuntajeDialogData';
import { Puntaje } from '../models/puntaje';

@Injectable({
  providedIn: 'root',
})
export class PuntajesService {
  constructor(private httpClient: HttpClient) {}

  obtenerPuntajes(): Observable<Puntaje[]> {
    return this.httpClient
      .get<Puntaje[]>(`${environment.apiUrl}/obtenerPuntajesConGR`)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  eliminarPuntaje(puntaje: IPuntaje): Observable<any> {
    const options = {
      body: puntaje,
    };
    return this.httpClient.delete<any>(
      `${environment.apiUrl}/eliminarPuntajeConGR`,
      options
    );
  }

  editarPuntaje(puntaje: IPuntaje): Observable<any> {
    const options = {
      body: puntaje,
    };
    return this.httpClient.delete<any>(`${environment.apiUrl}/`, options);
  }
}
