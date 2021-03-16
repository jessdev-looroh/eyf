import { Redes } from './../_model/redes';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import URI from '../_model/url';

@Injectable({
  providedIn: 'root'
})
export class RedesFooterService {

  constructor(private http: HttpClient) { }

  
  obtenerRedesFooter(){
    return this.http.get<Redes[]>(`${URI}/redes/footer`);
  }



}
