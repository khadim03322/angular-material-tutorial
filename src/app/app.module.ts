import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataService } from './data/data.service';
import {AuthService} from './auth.service';
import { PostDialogComponent } from './post-dialog/post-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { UploadComponent } from './upload/upload.component';
import { UploaderModule  } from '@syncfusion/ej2-angular-inputs';
import { Upload2Component } from './upload2/upload2.component';
import { AlertComponent } from './_components/alert/alert.component';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashboardComponent,
    PostDialogComponent,
    EmployeeComponent,
    UploadComponent,
    Upload2Component,
    AlertComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule, 
    ReactiveFormsModule,
    UploaderModule,  
     
  
  ],
  providers: [

    DataService,AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent],
  entryComponents: [
    PostDialogComponent
  ],
})
export class AppModule { }
