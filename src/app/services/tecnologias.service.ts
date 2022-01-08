import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TecnologiasService {
  constructor(private httpClient: HttpClient) {}

  obtenerTecnologiasFrontEnd(): Observable<any[]> {
    return this.httpClient.get<any[]>('./assets/data/frontend.json');
  }

  obtenerTecnologiasBackEnd(): Observable<any[]> {
    return this.httpClient.get<any[]>('./assets/data/backend.json');
  }
}
