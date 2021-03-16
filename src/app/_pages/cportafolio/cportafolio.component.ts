import { PortafolioService } from "./../../_servicios/portafolio.service";
import { Component, OnInit } from "@angular/core";
import { Portafolio } from "src/app/_model/portafolio";

@Component({
  selector: "app-cportafolio",
  templateUrl: "./cportafolio.component.html",
  styleUrls: ["./cportafolio.component.scss"],
})
export class CportafolioComponent implements OnInit {
  clientes: Portafolio[] = [];
  galeria: Portafolio[] = [];
  rutaStatic = "/assets/archivos_subidos/portafolio/";

  constructor(private objPortafolioService: PortafolioService) {}

  ngOnInit() {
    this.obtenerGaleria();
   
  }

  obtenerGaleria() {
    this.galeria = [
      {portafolioImgenURL:this.rutaStatic+'EyF7.webp'},
      {portafolioImgenURL:this.rutaStatic+'EyF8.webp'},
      {portafolioImgenURL:this.rutaStatic+'EyF9.webp'},
      {portafolioImgenURL:this.rutaStatic+'EyF10.webp'},      
    ];
  }
}
