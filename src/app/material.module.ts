import {NgModule} from '@angular/core';

import {
    MatSidenavModule
  } from '@angular/material/Sidenav';

  
  import {
    MatToolbarModule
  } from '@angular/material/Toolbar';
  
  import {
    MatIconModule
  } from '@angular/material/Icon';

  import {
    MatListModule
  } from '@angular/material/List';

  import { MatCardModule } from '@angular/material/card';

  import { MatButtonModule } from '@angular/material/button';

  import { MatTableModule } from '@angular/material/table';

  import { MatDialogModule } from '@angular/material/dialog';

  import { MatInputModule } from '@angular/material/input';
  import { MatSelectModule } from '@angular/material/select';


    
import { MatDatepickerModule } from '@angular/material/datepicker';  
import { MatMenuModule } from '@angular/material/menu';  
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';  

import { MatFormFieldModule } from '@angular/material/form-field';  
import { MatTooltipModule } from '@angular/material/tooltip';  

import { MatRadioModule } from '@angular/material/radio';  

import { AppRoutingModule } from './app-routing.module';  

import { MatCheckboxModule } from '@angular/material/checkbox';  

import { MatSnackBarModule } from '@angular/material/snack-bar';  

import { CdkTableModule } from '@angular/cdk/table';  
import { MatPaginatorModule } from '@angular/material/paginator';  
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';




@NgModule({
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,

   
    MatMenuModule,  
    MatDatepickerModule,  
    MatNativeDateModule,  
    
    MatRadioModule,  
     
    MatFormFieldModule,  
    
    MatTooltipModule,  
      
    AppRoutingModule,  
    MatCheckboxModule,  
   
    MatSnackBarModule,  
   
    CdkTableModule,  
    MatPaginatorModule,



    FlexLayoutModule,
  
  MatDividerModule,
  MatSlideToggleModule,
 
  MatOptionModule,
  MatProgressSpinnerModule
    
    

  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,

    MatMenuModule,  
    MatDatepickerModule,  
    MatNativeDateModule,  
    
    MatRadioModule,  
     
    MatFormFieldModule,  
    
    MatTooltipModule,  
      
    AppRoutingModule,  
    MatCheckboxModule,  
   
    MatSnackBarModule,  
   
    CdkTableModule,  
    MatPaginatorModule,

    FlexLayoutModule,
  
  MatDividerModule,
  MatSlideToggleModule,
 
  MatOptionModule,
  MatProgressSpinnerModule
  
   
  

  ]
})
export class MaterialModule {}