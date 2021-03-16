import { InicioService } from './../../_servicios/inicio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinicio',
  templateUrl: './cinicio.component.html',
  styleUrls: ['./cinicio.component.scss']
})
export class CinicioComponent implements OnInit {

  constructor() { }

  frase_inicio: string;
  fondo_home: string;
  logo_inicio: string;
  rutaStatic :string = "assets/archivos_subidos/inicio/";
  ngOnInit() {
    
    
    this.frase_inicio= "El especialista en materiales, agregados y ventas corporativas"; 
    // this.fondo_home = "fondo_home.jpg"
    this.logo_inicio=this.rutaStatic+"ic_logo_home.webp";
  }

  // obtenerInicio(){
  //   this.objInicioService.obtenerInicio().subscribe(data=>{
  //     if(data.length>0){
  //       this.frase_inicio = data[0].inicioFrase;
  //       this.logo_inicio = `${this.rutaStatic}${data[0].inicioLogo}`;
  //       console.log(this.logo_inicio);
  //     }else{
  //       this.frase_inicio= "Ingrese a la pagina de administración web para personalizar este mensaje...";
  //       // this.fondo_home ="";
  //       this.logo_inicio = "";

  //     }
  //   })
  // }
}
