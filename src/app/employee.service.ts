import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { City, Country, Employee, State } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = `${environment.apiUrl}AngulerWebApp`;  

  constructor(private http: HttpClient) { }


  getAllEmployee(): Observable<Employee[]> {  
    return this.http.get<Employee[]>(this.url + '/AllEmployeeDetails');  
  }  
   
  getEmployeeById(employeeId: number): Observable<Employee> {  
    return this.http.get<Employee>(this.url + '/GetEmployeeDetailsById/' + employeeId);  
  }  
   
  createEmployee(employee: Employee): Observable<Employee> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.post<Employee>(this.url + '/InsertEmployeeDetails/',  
      employee, httpOptions);  
  }  
   
  updateEmployee(employee: Employee): Observable<Employee> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
   
    return this.http.put<Employee>(this.url + '/UpdateEmployeeDetails/',  
      employee, httpOptions);  
  }  
   
  deleteEmployeeById(employeeid: number): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.delete<number>(this.url + '/DeleteEmployeeDetails?id=' + employeeid,  
      httpOptions);  
  }  
   
  getCountry(): Observable<Country[]> {  
    return this.http.get<Country[]>(this.url + '/Country');  
  }  
   
  getState(CountryId: number): Observable<State[]> {  
    return this.http.get<State[]>(this.url + '/Country/' + CountryId + '/State');  
  }  
   
  getCity(StateId: number): Observable<City[]> {  
    return this.http.get<City[]>(this.url + '/State/' + StateId + '/City');  
  }  
   
  deleteData(user: Employee[]): Observable<string> {  
    const httpOptions = {  
      headers: new HttpHeaders({  
        'Content-Type': 'application/json'  
      })  
    };  
    return this.http.post<string>(this.url + '/DeleteRecord', user, httpOptions);  
  }   




}
