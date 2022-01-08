import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tema } from '../models/tema';

@Injectable({
  providedIn: 'root',
})
export class TemasService {
  constructor(private httpClient: HttpClient) {}

  obtenerTemas(): Observable<Tema[]> {
    return this.httpClient.get<Tema[]>('./assets/data/temas.json');
  }
}
