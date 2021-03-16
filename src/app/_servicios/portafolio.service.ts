import { Portafolio } from './../_model/portafolio';
import { Injectable } from '@angular/core';
import URI from '../_model/url';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {
 
  constructor(private http: HttpClient) { }

  
  obtenerClientes() {
    return this.http.get<Portafolio[]>(`${URI}/portafolio/clientes`);
  }
  obtenerGaleria(){
    return this.http.get<Portafolio[]>(`${URI}/portafolio/galeria`);
  }
}
