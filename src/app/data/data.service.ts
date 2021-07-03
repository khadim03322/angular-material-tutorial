import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Post } from '../Post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  ELEMENT_DATA: Post[] = [
    {position: 0, title: 'Post One', category: 'Web Development', date_posted: new Date(), body: 'Body 1'},
    {position: 1, title: 'Post Two', category: 'Android Development', date_posted: new Date(), body: 'Body 2'},
    {position: 2, title: 'Post Three', category: 'IOS Development', date_posted: new Date(), body: 'Body 3'},
    {position: 3, title: 'Post Four', category: 'Android Development', date_posted: new Date(), body: 'Body 4'},
    {position: 4, title: 'Post Five', category: 'IOS Development', date_posted: new Date(), body: 'Body 5'},
    {position: 5, title: 'Post Six', category: 'Web Development', date_posted: new Date(), body: 'Body 6'},
  ];
  categories = [
    {value: 'Web-Development', viewValue: 'Web Development'},
    {value: 'Android-Development', viewValue: 'Android Development'},
    {value: 'IOS-Development', viewValue: 'IOS Development'}
  ];
  constructor(
    private http: HttpClient
  ) { }


  getData(): Observable<Post[]> {
    return of<Post[]>(this.ELEMENT_DATA);
  }

  getCategories() {
    return this.categories;
  }

  addPost(data:any) {
    this.ELEMENT_DATA.push(data);
  }

  deletePost(index:number) {
    this.ELEMENT_DATA = [...this.ELEMENT_DATA.slice(0, index), ...this.ELEMENT_DATA.slice(index + 1)];
  }

  dataLength() {
    return this.ELEMENT_DATA.length;
  }




 httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  
/*
  httpError(error:any) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
*/






  getAllPost(): Observable<any> {
    return this.http.get<any>(
      `${environment.apiUrl}post`,
      this.httpHeader
    );
  }
 
  /*

  getCategories() {
   
    return this.http.get<any>(
      `${environment.apiUrl}categorie`,
      this.httpHeader
    );

  }


  addPost(data:any): Observable<any> {
    const endpoint = environment.apiUrl + 'post';
    return this.http
      .post<any>(endpoint, JSON.stringify(data), this.httpHeader)
      .pipe(retry(1), catchError(this.httpError));
  }

  deletePost(id: number) {
    
    return this.http.delete<any>(
      `${environment.apiUrl}post/${id}`,
      this.httpHeader
    );

    
  }*/





}
