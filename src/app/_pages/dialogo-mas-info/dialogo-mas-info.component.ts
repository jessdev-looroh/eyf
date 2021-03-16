import { style } from '@angular/animations';

import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-mas-info',
  templateUrl: './dialogo-mas-info.component.html',
  styleUrls: ['./dialogo-mas-info.component.scss']
})
export class DialogoMasInfoComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<DialogoMasInfoComponent>,@Inject(MAT_DIALOG_DATA) public data) { }
  descripcion: string;t
  titulo: string;
  elementosClass= document.getElementsByClassName("mat-dialog-container");
  idDialog: string;
  elementoRef;
  
  elementoClass2 = document.getElementsByClassName("cdk-overlay-pane");
  idDialog2: string;
  elementoRef2;
   
  ngOnInit() {  
      this.titulo= this.data.titulo;
      this.descripcion = this.data.descripcion;
      
      this.idDialog = this.elementosClass[0].id;
      this.elementoRef =document.getElementById(this.idDialog);
      this.elementoRef.style.backgroundImage = `url('${this.data.imagen}')`;
      console.log(this.data.imagen)
      this.elementoRef.style.backgroundRepeat= "round";
      this.elementoRef.style.borderRadius= "8%";
      this.elementoRef.style.backgroundSize = "cover";
      this.elementoRef.style.overflow = "hidden";
      
      this.idDialog2 = this.elementoClass2[0].id;
      this.elementoRef2 =document.getElementById(this.idDialog);
      this.elementoRef2.style.margin = "20px";
  }
  

  
}
