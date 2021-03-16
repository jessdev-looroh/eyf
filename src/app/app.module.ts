import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CserviciosComponent } from './_pages/cservicios/cservicios.component';
import { CportafolioComponent } from './_pages/cportafolio/cportafolio.component';
import { CnosotrosComponent } from './_pages/cnosotros/cnosotros.component';
import { CcontactanosComponent } from './_pages/ccontactanos/ccontactanos.component';
import { CinicioComponent } from './_pages/cinicio/cinicio.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { DialogoMasInfoComponent } from './_pages/dialogo-mas-info/dialogo-mas-info.component';
import { CpoliticasComponent } from './_pages/cpoliticas/cpoliticas.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CserviciosComponent,
    CportafolioComponent,
    CnosotrosComponent,
    CcontactanosComponent,
    CinicioComponent,
    DialogoMasInfoComponent,
    CpoliticasComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'never'}}
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
