import { Pagina } from './../_model/pagina';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import URI from '../_model/url';

@Injectable({
  providedIn: 'root'
})
export class PaginaService {

  constructor(private http : HttpClient) { }

  obtenerPagina() {
    return this.http.get<Pagina[]>(`${URI}/pagina`);
  }


}
