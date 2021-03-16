import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { HttpClientModule } from '@angular/common/http';
import {MatChipsModule} from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatDividerModule,
    MatMenuModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatListModule,
    MatSelectModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatTreeModule,
    MatBadgeModule,
    HttpClientModule  ,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatChipsModule,
    MatTabsModule
  ],
  exports : [
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatDividerModule,
    MatMenuModule, 
    MatToolbarModule,
    MatAutocompleteModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatListModule,
    MatSelectModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatTreeModule,
    MatBadgeModule,
    HttpClientModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatChipsModule,
    MatTabsModule
    
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue : 'es-ES'}
  ]
})
export class MaterialModule { }
