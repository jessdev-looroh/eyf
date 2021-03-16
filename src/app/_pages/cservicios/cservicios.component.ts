import { Servicio } from "./../../_model/servicio";
import { ServicioService } from "./../../_servicios/servicio.service";
import { DialogoMasInfoComponent } from "./../dialogo-mas-info/dialogo-mas-info.component";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-cservicios",
  templateUrl: "./cservicios.component.html",
  styleUrls: ["./cservicios.component.scss"],
})
export class CserviciosComponent implements OnInit {
  cards: Servicio[] = [];
  rutaStatic = "assets/archivos_subidos/servicios/";

  constructor(
    private dialogRef: MatDialog,
    private objServicioService: ServicioService
  ) {}

  ngOnInit() {
    this.obtenerServicios();
  }

  obtenerServicios() {
    this.cards = [
      {
        servicioDescripcion: "Realizamos el servicio de construcción en zonas urbanas, edificaciones y obras de infraestructura trabajando con profesionales altamente calificados y con la mejor tecnología para realizar un proyecto de calidad.",
        servicioImagenUrl: this.rutaStatic+ "servicio_1.webp",
        servicioNombre:  "Construcción",
      },
      {
        servicioDescripcion: "Venta segura de materiales para obras civiles y edificaciones. Arena gruesa, media  y fina. Piedra chancada en todas las medidas para la realización de cualquier proyecto de construcción.",
        servicioImagenUrl: this.rutaStatic+ "servicio_2.webp",
        servicioNombre: "Ventas de agregados",
      },
      {
        servicioDescripcion: "Venta segura de materiales para obras civiles y edificaciones. Arena gruesa, media  y fina. Piedra chancada en todas las medidas para la realización de cualquier proyecto de construcción.",
        servicioImagenUrl: this.rutaStatic+ "servicio_3.webp",
        servicioNombre: "Carga pesada",
      },
      {
        servicioDescripcion: "Contamos con unidades de ultima generación las cuales se encuentran equipadas con un alto estándar de calificación de seguridad, para que puedan desempeñarse de la mejor forma.",
        servicioImagenUrl: this.rutaStatic+ "servicio_4.webp",
        servicioNombre: "Maquinaria pesada",
      },
      {
        servicioDescripcion: "Contamos con unidades de ultima generación las cuales se encuentran equipadas con un alto estándar de calificación de seguridad, para que puedan desempeñarse de la mejor forma.",
        servicioImagenUrl: this.rutaStatic+ "servicio_5.webp",
        servicioNombre: "Consultorias en construcción",
      },
      {
        servicioDescripcion: "Realizamos, diseñamos y fabricamos estructuras metálicas de toda estructura, ya sea en proyectos del sector de energía, construcción, industria, entre otros. Contamos con un servicio altamente eficiente y moderno que permite ahorrar tiempo.",
        servicioImagenUrl: this.rutaStatic+ "servicio_6.webp",
        servicioNombre: "Edificaciones metálicas",
      },
      {
        servicioDescripcion: "Poseemos el equipo ideal de máquinas con tecnología de punta para cualquier evento de construcción, lo que permite mantenernos a la vanguardia de la modernidad y calidad.",
        servicioImagenUrl: this.rutaStatic+ "servicio_7.webp",
        servicioNombre: "Alquiler de equipos livianos para construcción",
      },
      {
        servicioDescripcion: "Tenemos las herramientas confiables e innovadoras para realizar el mejor servicio además de excelentes profesionales y fontaneros para la ejecución de un servicio duradero.",
        servicioImagenUrl: this.rutaStatic+ "servicio_8.webp",
        servicioNombre: "Fontanería",
      },
      {
        servicioDescripcion: "Nuestro servicio de climatización garantiza encontrar una solución en el hogar ya que tenemos el sistema de calidad adecuado según la necesidad del cliente",
        servicioImagenUrl: this.rutaStatic+ "servicio_9.webp",
        servicioNombre: "Calefacción",
      },
    ];

    // this.objServicioService.obtenerServicios().subscribe(data=>{
    //   if(data.length > 0){
    //     let i = 0;
    //     data.forEach(s => {
    //       data[i].servicioImagenUrl = `${this.rutaStatic}${s.servicioImagenUrl}`;
    //       i++;
    //     })
    //     this.cards = data;
    //   }else{
    //     let ser: Servicio = {
    //       servicioNombre :"No hay servicios registrados",
    //       servicioImagenUrl :"",
    //       servicioDescripcion : "Puedes registrar tu servicios desde la página de administración web.",
    //     };
    //     this.cards.push(ser);
    //   }

    // })
  }
  verMas(des: Servicio) {
    this.dialogRef.open(DialogoMasInfoComponent, {
      minWidth: "50%",
      width: "auto",
      maxWidth: "560px",
      // minHeight:'600px',
      height: "auto",
      data: {
        titulo: des.servicioNombre,
        descripcion: des.servicioDescripcion,
        imagen: des.servicioImagenUrl
          ? des.servicioImagenUrl
          : "https://via.placeholder.com/600x600?text=[Imagen]",
      },
    });
    console.log(des);
  }
}
