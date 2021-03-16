import { Nosotros } from "./../../_model/nosotros";
import { NosotrosService } from "./../../_servicios/nosotros.service";
import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";

@Component({
  selector: "app-cnosotros",
  templateUrl: "./cnosotros.component.html",
  styleUrls: ["./cnosotros.component.scss"],
  animations: [
    trigger("fabOpenClose", [
      state(
        "fabClosed",
        style({
          /* height: '1%',
        width: '1%',
        borderRadius: '50%' */
          transform: "translateX(+100%)",
        })
      ),
      state(
        "fabOpened",
        style({
          /*     height: '100%',
            width: '100%',
            borderRadius: '0%' */
          transform: "translateX(0)",
        })
      ),
      transition("fabClosed <=> fabOpened", [animate("0.3s")]),
    ]),
    trigger("textOpenClose", [
      state(
        "textClosed",
        style({
          transform: "translateX(-100%)",
        })
      ),
      state(
        "textOpened",
        style({
          transform: "translateX(0)",
        })
      ),
      transition("textClosed <=> textOpened", [animate("0.3s")]),
    ]),
  ],
})
export class CnosotrosComponent implements OnInit {
  contenidoArray: Nosotros[] = [];
  isActivo: any[] = [];
  rutaStatic = "assets/archivos_subidos/nosotros/";
  constructor(private objNosotrosService: NosotrosService) {}

  ngOnInit() {
    this.obtenerNosotros();
    
  }
  obtenerNosotros() {
    this.contenidoArray = [
      {
        indice: 0,
        nosotrosTitulo: "Historia",
        nosotrosDescripcion:
          "Nuestra corporación S.R.L fue creada con la  intención de servir al cliente brindando lealtad y honestidad en cada  proyecto a realizar. Entre nuestras actividades nos especializado en la venta de materiales de construcción , artículos de ferreteria y equipos de fontaneria para el hogar. El principal objetivo de nuestra empresa ha sido y será la superación y crecimiento constante para ser mejores cada día.",
        nosotrosImagen: this.rutaStatic+"nosotros_1.webp",
      },

      {
        indice: 1,
        nosotrosTitulo: "Misión",
        nosotrosDescripcion:
          "Somos una empresa de agregados y maquinaría que busca distinguirse de la competencia, siendo así una marca reconocida por mostrar calidad en cada unos de los proyectos a realizar.\n\nBasada en  personas con alta experiencia y valores,  listos para brindar un servicio de calidad que cumpla con la expectativa del cliente.",
        nosotrosImagen: this.rutaStatic+"nosotros_2.webp",
      },

      {
        indice: 2,
        nosotrosTitulo: "Visión",
        nosotrosDescripcion:
          "Tenemos como visión ser la empresa líder de agregados y maquinaria en el mercado piurano y nacional siendo reconocidos por la calidad e innovación.\n\nNos centramos siempre en el cliente mostrando lealtad y confianza gracias al trabajo responsable y dedicado de sus directivos y colaboradores.",
        nosotrosImagen: this.rutaStatic+"nosotros_3.webp",
      },
    ];
    this.isActivo = [true, false, false];
    // this.objNosotrosService.obtenernosotros().subscribe(data => {
    //   // console.log(data);
    //   if (data.length > 0) {
    //     let i = 0;
    //     data.forEach(s => {
    //       data[i].nosotrosImagen = `${this.rutaStatic}${s.nosotrosImagen}`;
    //       data[i].indice = i;
    //       if (i == 0)
    //         this.isActivo[i] = true;
    //       else
    //         this.isActivo[i] = false;

    //         i++;
    //     })

    //     this.contenidoArray = data;
    //   } else {
    //     let nos: Nosotros = {
    //       nosotrosTitulo: "No hay registro",
    //       nosotrosImagen: "",
    //       nosotrosDescripcion: "Puedes registrar la información desde la página de administración web.",
    //       indice: 0
    //     };
    //     this.contenidoArray.push(nos);
    //     this.isActivo[0] = [true];
    //   }
    // })
  }
  ver(i) {
    this.contenidoArray.forEach((c) => {
      this.isActivo[c.indice] = false;
    });
    this.isActivo[i] = true;
  }
  anterior(i) {
    if (i == 0) {
      return false;
    } else {
      return true;
    }
  }
  siguiente(i) {
    if (i == this.contenidoArray.length - 1) {
      return false;
    } else {
      return true;
    }
  }
  mostrarSeccion(i) {
    return true;
  }
  click(i) {
    console.log(i);
  }
}
