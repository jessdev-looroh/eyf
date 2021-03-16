import { Contacto } from './../_model/contacto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private API_URI: string = "http://localhost:3000/api";
  constructor(private http: HttpClient) { }

  // enviarCorreo(contacto: Contacto) {

  //   return this.http.get(`http://alhgroup.pe/contact.php?name=${contacto.contactoNombre}&email=${contacto.contactoCorreo}&phone=${contacto.contactoTelefono}&textarea=${contacto.contactoConsulta}`);
  //   // return this.http.post(`http://localhost/contact.php`,{var:1,var2:2});
  // } 

  registrarConsultas(contacto: Contacto) { 
    console.log(contacto);
    return this.http.post(`${this.API_URI}/contacto`, contacto);
  }

  enviarCorreo(contacto: Contacto) {
    return this.http.post(`${this.API_URI}/mail`, contacto);
  }




}
