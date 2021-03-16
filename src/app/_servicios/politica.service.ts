import { Politica } from './../_model/politica';
import { Injectable } from '@angular/core';
import URI from '../_model/url';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoliticaService {

  constructor(private http : HttpClient) { }

  obtenerPoliticas() {
    return this.http.get<Politica[]>(`${URI}/politicas`);
  }

}
