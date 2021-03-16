import { MatSnackBarModule, MatSnackBar } from "@angular/material/snack-bar";
import { Contacto } from "./../../_model/contacto";
import { ContactoService } from "./../../_servicios/contacto.service";
import { AppComponent } from "./../../app.component";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatButton } from "@angular/material/button";
import { ContactanosService } from "src/app/_servicios/contactanos.service";
import { Redes } from '../../_model/redes';

@Component({
  selector: "app-ccontactanos",
  templateUrl: "./ccontactanos.component.html",
  styleUrls: ["./ccontactanos.component.scss"],
})
export class CcontactanosComponent implements OnInit {
  con_form_contactanos: FormGroup;
  telefono: string;
  correo: string;
  listContactanos: any[] = [];
  mostrarSpinner: boolean = false;
  objContacto: Contacto;

  @ViewChild("btnEnviar", { static: true }) public btnEnviar: MatButton;
  constructor(
    private route: Router,
    private contactoService: ContactoService,
    private _snackBar: MatSnackBar,
    private objContactanosservices: ContactanosService
  ) {
    this.con_form_contactanos = this.crearFormGroup();
  }

  ngOnInit() {
    this.obtenerContactanos();
    this.obtenerRedes();
  }
  obtenerContactanos() {
    this.telefono = "969003905";
    this.correo = "franciscoguerrero258@gmail.com";
  }
  obtenerRedes() {
    this.listContactanos = [
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
  }
  crearFormGroup() {
    return new FormGroup({
      contactoNombre: new FormControl("", Validators.required),
      contactoCorreo: new FormControl("", [
        Validators.email,
        Validators.required,
      ]),
      contactoTelefono: new FormControl("", [Validators.required]),
      contactoConsulta: new FormControl("", [
        Validators.required,
        Validators.maxLength(300),
      ]),
    });
  }

  get nombre() {
    return this.con_form_contactanos.get("contactoNombre");
  }
  get email() {
    return this.con_form_contactanos.get("contactoCorreo");
  }
  get celular() {
    return this.con_form_contactanos.get("contactoTelefono");
  }
  get consulta() {
    return this.con_form_contactanos.get("contactoConsulta");
  }

  visitar(url) {
    window.open(url, "_blank");
  }
  bloquearForm(sw) {
    if (sw) {
      this.con_form_contactanos.disable();
      this.btnEnviar.disabled = true;
    } else {
      this.con_form_contactanos.enable();
      this.btnEnviar.disabled = false;
    }
  }
  limpiarForm() {
    this.con_form_contactanos.reset();
  }
  enviarConsulta() {
    if (this.con_form_contactanos.valid) {
      // this.mostrarSpinner = true;
      // this.bloquearForm(true);
      // https://api.whatsapp.com/send?phone=+51976604903&text=Hola,%20tengo%20una%20consulta!
      let msgWasap= `https://api.whatsapp.com/send?phone=+51969003905&text=*Nombre*: ${this.nombre.value}%0a*Correo*: ${this.email.value}%0a*Teléfono*: ${this.celular.value}%0a*Consulta*: ${this.consulta.value}%0a`;
        this.visitar(msgWasap);
      

    //   this.objContacto = {
    //     contactoNombre: this.nombre.value,
    //     contactoCorreo: this.email.value,
    //     contactoConsulta: this.consulta.value,
    //     contactoTelefono: this.celular.value,
    //   };
    //   this.contactoService.enviarCorreo(this.objContacto).subscribe(
    //     (res: any) => {
    //       if (res.exito) {
    //         this.openSnackBar(res.msg);
    //         console.log(res.msg);
    //       } else {
    //         this.openSnackBar(res.msg);
    //         console.log(res.msg);
    //       }
    //       this.mostrarSpinner = false;
    //       this.bloquearForm(false);
          this.limpiarForm();
    //     },
    //     (err) => {
    //       console.log(err);
    //       this.openSnackBar(err);
    //       this.mostrarSpinner = false;
    //       this.bloquearForm(false);
    //     }
    //   );

    //   this.contactoService.registrarConsultas(this.objContacto).subscribe();
    }
  }
  openSnackBar(mensaje: string) {
    this._snackBar.open(mensaje, "OK", {
      horizontalPosition: "left",
      verticalPosition: "bottom",
    });
  }
}
