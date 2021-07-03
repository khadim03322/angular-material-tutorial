import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { UploadComponent } from './upload/upload.component';
import { Upload2Component } from './upload2/upload2.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './_helpers/auth.guard';


const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [

 
  {path: '', component: WelcomeComponent , canActivate: [AuthGuard] },
  {path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard]},
  {path: 'employee', component: EmployeeComponent , canActivate: [AuthGuard]},
  {path: 'upload', component: UploadComponent , canActivate: [AuthGuard]},
  {path: 'upload2', component: Upload2Component , canActivate: [AuthGuard]},
  {path: 'account', loadChildren: accountModule },
  { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
  
  // otherwise redirect to home
  //{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
