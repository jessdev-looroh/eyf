import { PoliticaService } from "./../../_servicios/politica.service";
import { DialogoMasInfoComponent } from "./../dialogo-mas-info/dialogo-mas-info.component";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Politica } from "src/app/_model/politica";

@Component({
  selector: "app-cpoliticas",
  templateUrl: "./cpoliticas.component.html",
  styleUrls: ["./cpoliticas.component.scss"],
})
export class CpoliticasComponent implements OnInit {
  cards: Politica[] = [];
  rutaStatic = "assets/archivos_subidos/politicas/";

  constructor(
    private dialogRef: MatDialog,
    private objPoliticaService: PoliticaService
  ) {}

  ngOnInit() {
    this.obtenerPoliticas();
  }

  obtenerPoliticas() {
    this.cards = [
      {
        politicaNombre: "Satisfacción al cliente",
        politicaImagenUrl: this.rutaStatic+"politica_1.webp",
        politicaDescripcion:
          "ALH GROUP está comprometida con el éxito de sus clientes y pone a disposición su equipo de profesionales y una atención personalizada, lo que nos permite anticipar iniciativas y contribuir proactivamente en la propuesta de soluciones integrales.",
      },

      {
        politicaNombre: "Talento Humano",
        politicaImagenUrl: this.rutaStatic+"politica_2.webp",
        politicaDescripcion:
          "El mayor valor para nuestra organización son las personas que como profesionales conforman un equipo sinérgico orientado al desarrollo y crecimiento constante.",
      },

      {
        politicaNombre: "Calidad y seguridad",
        politicaImagenUrl: this.rutaStatic+"politica_3.webp",
        politicaDescripcion:
          "Buscar la mejora continua y orientación hacia la excelencia son el norte de nuestra gestión, así como la seguridad, como compromiso individual y colectivo, que garantice la integridad de nuestro equipo de trabajo.",
      },

      {
        politicaNombre: "Alianzas estratégicas",
        politicaImagenUrl: this.rutaStatic+"politica_4.webp",
        politicaDescripcion:
          "Para el desarrollo de nuevas y mejores soluciones, mantenemos y desarrollamos alianzas estratégicas con especialistas y proveedores que nos permiten soporte tecnológico de alto nivel e innovación constante.",
      },
      {
        politicaNombre: "Desarrollo socio ambiental",
        politicaImagenUrl: this.rutaStatic+"politica_5.webp",
        politicaDescripcion:
          "Nuestro compromiso con el desarrollo sostenible va más allá del cumplimiento normativo, apostamos por la inclusión social y productiva, la conservación ambiental y el uso racional de los recursos naturales.",
      },
    ];
    // this.objPoliticaService.obtenerPoliticas().subscribe(data=>{
    //   if(data.length>0){
    //     let i = 0;
    //     data.forEach(s => {
    //       data[i].politicaImagenUrl = `${this.rutaStatic}${s.politicaImagenUrl}`;
    //       i++;
    //     })
    //     this.cards = data;
    //   }else{
    //     let pol: Politica = {
    //       politicaNombre :"No hay políticas registradas",
    //       politicaImagenUrl :"",
    //       politicaDescripcion : "Puedes registrar tus políticas desde la página de administración web.",
    //     };
    //     this.cards.push(pol);
    //   }
    // })
  }

  verMas(des: Politica) {
    this.dialogRef.open(DialogoMasInfoComponent, {
      minWidth: "50%",
      width: "auto",
      maxWidth: "560px",
      // minHeight:'600px',
      height: "auto",
      data: {
        titulo: des.politicaNombre,
        descripcion: des.politicaDescripcion,
        imagen: des.politicaImagenUrl
          ? des.politicaImagenUrl
          : "https://via.placeholder.com/600x600?text=[Imagen]",
      },
    });
    console.log(des);
  }
}
