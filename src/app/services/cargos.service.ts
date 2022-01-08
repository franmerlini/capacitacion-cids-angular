import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cargo } from '../models/cargo';

@Injectable({
  providedIn: 'root',
})
export class CargosService {
  constructor(private httpClient: HttpClient) {}

  obtenerCargos(): Observable<Cargo[]> {
    return this.httpClient
      .get<Cargo[]>(`${environment.apiUrl}/obtenerCargosConGR`)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
