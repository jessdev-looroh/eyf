import { RedesFooterService } from "./_servicios/redes-footer.service";
import { PaginaService } from "./_servicios/pagina.service";
import { Menu } from "./_model/menu";
import { Component, OnInit, ViewChild, Sanitizer } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";

import { ActivationEnd, Router } from "@angular/router";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

import { Subscription } from "rxjs";
import { map, filter } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  nombreEmpresa: string;
  periodo: string;
  objMenu: Menu;
  menuInicial: Menu[] = [];
  isActive: [] = [];
  redesSociales: any[];
  logo: string;
  rutaStatic: string = "/assets/archivos_subidos/header/";
  tituloSubs$: Subscription;

  @ViewChild("sidnavCabecera", { static: true }) public sidNavMenu: MatSidenav;
  constructor(
    private route: Router,
    private iconRegister: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private objPaginaService: PaginaService,
    private objRedesFoo: RedesFooterService
  ) {
    this.tituloSubs$ = this.route.events
      .pipe(
        filter((val) => val instanceof ActivationEnd),
        filter((val: ActivationEnd) => val.snapshot.firstChild == null),
        map((val) => {
          return {"path" :val.snapshot.url[0].path,"titulo": val.snapshot.data.titulo};
        })
      )
      .subscribe((data) => {
        console.log(data);
        document.title = `EyF Inversiones - ${data.titulo}`;
        
        this.cambiarColor(data.path);
      });
    // route.events.subscribe((data: any) => {
    //   switch (route.url) {
    //     case '/':
    //       this.cambiarColor('inicio');
    //       break;
    //     default:
    //       this.cambiarColor(route.url.slice(1));
    //       break;
    //   }
    //   console.log(data);

    // });
  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }
  ngOnInit(): void {
    // this.obtenerPagina();
    // this.obtenerRedesFooter();
    this.objMenu = new Menu();
    this.objMenu.nombre = "inicio";
    this.objMenu.url = "inicio";
    this.objMenu.icono = "home";
    this.isActive[""] = true;
    this.menuInicial.push(this.objMenu);
    this.objMenu = new Menu();
    this.objMenu.nombre = "servicios";
    this.objMenu.url = "servicios";
    this.objMenu.icono = "book";
    this.isActive["servicios"] = false;
    this.menuInicial.push(this.objMenu);
    this.objMenu = new Menu();
    this.objMenu.nombre = "politicas";
    this.objMenu.url = "politicas";
    this.objMenu.icono = "article";
    this.isActive["politicas"] = false;
    this.menuInicial.push(this.objMenu);
    this.objMenu = new Menu();
    this.objMenu.nombre = "galeria";
    this.objMenu.url = "galeria";
    this.objMenu.icono = "folder";
    this.isActive["galeria"] = false;
    this.menuInicial.push(this.objMenu);
    this.objMenu = new Menu();
    this.objMenu.nombre = "quienes somos";
    this.objMenu.url = "nosotros";
    this.objMenu.icono = "groups";
    this.isActive["nosotros"] = false;
    this.menuInicial.push(this.objMenu);
    this.objMenu = new Menu();
    this.objMenu.nombre = "contactanos";
    this.objMenu.url = "contactanos";
    this.objMenu.icono = "headset_mic";
    this.isActive["contactanos"] = false;
    this.menuInicial.push(this.objMenu);

    this.nombreEmpresa = "EyF";
    this.periodo = new Date().getFullYear().toString();

    // this.crearIconos(this.menuInicial);

    this.redesSociales = [
      {
        iconoUrl: "ic_whatsapp",
        url:
          "https://api.whatsapp.com/send?phone=+51969003905&text=Hola,%20tengo%20una%20consulta!",
      },
      {
        iconoUrl: "ic_gmail",
        url:
          "mailto:franciscoguerrero258@gmail.com?Subject=Hola,%20tengo%20una%20consulta!",
      },
    ];

    this.logo = this.rutaStatic + "head_logo.webp";
  }
  // crearIconos(objMenus: Menu[]) {
  //   // objMenus.forEach(m => {
  //   //   this.iconRegister.addSvgIcon(m.icono, this.sanitizer.bypassSecurityTrustResourceUrl(`assets/iconos/${m.icono}.svg`));
  //   // })

  // }
  public cambiarColor(url: string) {
    this.desactivarItem();
    this.isActive[url] = true;
  }
  desactivarItem() {
    this.menuInicial.forEach((menu) => {
      this.isActive[menu.url] = false;
    });
  }
  visitar_looroh() {
    window.open(
      "https://looroh.com/",
      "_blank" // <- This is what makes it open in a new window.
    );
  }

  visitar(url) {
    window.open(url, "_blank");
  }

  // obtenerPagina() {
  //   this.objPaginaService.obtenerPagina().subscribe(data => {
  //     if (data.length > 0) {
  //       this.nombreEmpresa = data[0].empresaNombre;
  //       this.periodo = data[0].periodo;
  //       this.logo = `${this.rutaStatic}${data[0].empresaLogoHeader}`;
  //     }
  //   });
  // }
  // obtenerRedesFooter() {
  //   this.objRedesFoo.obtenerRedesFooter().subscribe(data => {
  //     let i=0;
  //     data.forEach(redes => {
  //       let url: string;
  //       switch (redes.idRedSocial) {
  //         case 2:
  //           url = `https://api.whatsapp.com/send?phone=+51${redes.url}&text=Hola,%20tengo%20una%20consulta!`;
  //           break;
  //         case 4:
  //           url = `mailto:${redes.url}?Subject=Hola,%20tengo%20una%20consulta!`;
  //           break;
  //         default:
  //           url = redes.url;
  //           break;
  //       }
  //       data[i].url = url;
  //       i++;
  //     })
  //     this.redesSociales = data;
  //   })
  // }
}
