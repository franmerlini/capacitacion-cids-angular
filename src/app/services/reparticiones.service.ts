import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reparticion } from '../models/reparticion';

@Injectable({
  providedIn: 'root',
})
export class ReparticionesService {
  constructor(private httpClient: HttpClient) {}

  obtenerReparticiones(): Observable<Reparticion[]> {
    return this.httpClient
      .get<Reparticion[]>(`${environment.apiUrl}/obtenerReparticionesConGR`)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  obtenerReparticionesFakeData(): Observable<Reparticion[]> {
    return this.httpClient.get<Reparticion[]>(
      './assets/data/reparticiones.json'
    );
  }
}
