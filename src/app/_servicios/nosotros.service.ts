import { Nosotros } from './../_model/nosotros';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import URI from '../_model/url';
@Injectable({
  providedIn: 'root'
})
export class NosotrosService {

  constructor(private http : HttpClient) { }

  
  obtenernosotros() {
    return this.http.get<Nosotros[]>(`${URI}/nosotros`);
  }
}
