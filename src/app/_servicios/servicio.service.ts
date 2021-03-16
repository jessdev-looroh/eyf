import { Servicio } from './../_model/servicio';
import { Injectable } from '@angular/core';
import URI from '../_model/url';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  
  constructor(private http: HttpClient) { }

  obtenerServicios() {
    return this.http.get<Servicio[]>(`${URI}/servicios`);
  }
}
