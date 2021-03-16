import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import URI from '../_model/url';
import { Contactanos } from '../_model/contactanos';
import { Redes } from '../_model/redes';

@Injectable({
  providedIn: 'root'
})
export class ContactanosService {

  constructor(private http: HttpClient) { }
  obtenerContactanos() {
    return this.http.get<Contactanos[]>(`${URI}/contactanos`);
  }
  obtenerRedesContactanos(){
    return this.http.get<Redes[]>(`${URI}/redes/contactanos`);
  }

}
