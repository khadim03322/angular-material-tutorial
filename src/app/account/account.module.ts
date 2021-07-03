import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { RegisterComponent } from './register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/Toolbar';
import { MatIconModule } from '@angular/material/Icon';
import { MatSidenavModule } from '@angular/material/Sidenav';
import { MatListModule } from '@angular/material/List';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CdkTableModule } from '@angular/cdk/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule,
        FormsModule,
        MatFormFieldModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatInputModule,
        
       // MaterialModule
        
       /* BrowserModule,
        BrowserAnimationsModule,

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
  MatProgressSpinnerModule*/


       // MaterialModule,
     // BrowserModule,
  
   // BrowserAnimationsModule,
   


   
  
  /*FlexLayoutModule,
  FormsModule,
  ReactiveFormsModule,
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatDividerModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatOptionModule,
  MatProgressSpinnerModule*/
  
  
  

    ],
    declarations: [

        LayoutComponent,
        LoginComponent,
        RegisterComponent
        
    ]
})
export class AccountModule { }