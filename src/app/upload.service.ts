import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  url = `${environment.apiUrl}`;
  
  constructor(private http: HttpClient) { }


  saveUpload(files: any): Observable<any> { 

  //  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
   
  let fileToUpload = <File>files[0];

  const formData = new FormData();
  formData.append('file', fileToUpload, fileToUpload.name);

   // this.http.post('http://localhost:49868/api/upload', formData, {reportProgress: true, observe: 'events'})

    return this.http.post<any>(this.url + 'upload',formData, {reportProgress: true, observe: 'events'}  );  
  } 


}
