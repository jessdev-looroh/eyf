import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import URI from '../_model/url';
import { Inicio } from '../_model/inicio';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor(private http: HttpClient) { }  
  obtenerInicio() {
    return this.http.get<Inicio[]>(`${URI}/inicio`);
  }


}
