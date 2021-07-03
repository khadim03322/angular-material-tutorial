import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  public progress: number=-1;
  public message: string='';
  public imgPath:any;
  @Output() public onUploadFinished = new EventEmitter();
  constructor(private http: HttpClient,private uploadService:UploadService) { }

  ngOnInit(): void {
  }


  public uploadFile = (files:any) => {
    if (files.length === 0) {
      return;
    }


    this.uploadService.saveUpload(files).subscribe(event => {

      console.log("event-------------->",event);
      console.log("event-------------->",event);
      this.imgPath=event;
      if (event.type === HttpEventType.UploadProgress)

      if (event.total) {  
        const total: number = event.total;  
        this.progress = Math.round(100 * event.loaded / total);    
    }   
    else {  
        //handle illegal state  
    }  

        //this.progress = Math.round(100 * event.loaded / event.total);
      else if (event.type === HttpEventType.Response) {
        this.message = 'Upload success.';
        this.onUploadFinished.emit(event.body);
      }

    });  

   /* let fileToUpload = <File>files[0];

    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post('http://localhost:49868/api/upload', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)

        if (event.total) {  
          const total: number = event.total;  
          this.progress = Math.round(100 * event.loaded / total);    
      }   
      else {  
          //handle illegal state  
      }  

          //this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }

      });  */
  }


  public createImgPath = (serverPath: string) => {
    return `http://localhost:49868/${serverPath}`;
  }

}
