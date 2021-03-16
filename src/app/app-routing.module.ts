import { CpoliticasComponent } from './_pages/cpoliticas/cpoliticas.component';
import { DialogoMasInfoComponent } from './_pages/dialogo-mas-info/dialogo-mas-info.component';
import { CinicioComponent } from './_pages/cinicio/cinicio.component';

import { CcontactanosComponent } from './_pages/ccontactanos/ccontactanos.component';
import { CnosotrosComponent } from './_pages/cnosotros/cnosotros.component';
import { CportafolioComponent } from './_pages/cportafolio/cportafolio.component';
import { CserviciosComponent } from './_pages/cservicios/cservicios.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'servicios', component: CserviciosComponent ,data:{titulo:"Servicios"}},  
  {path: 'galeria', component:CportafolioComponent,data:{titulo:"Galeria"}},
  {path: 'nosotros', component:CnosotrosComponent,data:{titulo:"Nosotros"}},
  {path: 'contactanos', component:CcontactanosComponent,data:{titulo:"Contacto"}},
  {path: 'inicio', component: CinicioComponent,data:{titulo:"Inicio"}},
  {path:'dialogo',component: DialogoMasInfoComponent},
  {path: 'politicas', component: CpoliticasComponent,data:{titulo:"Politicas"}},
  {path: '',redirectTo: 'inicio',pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
