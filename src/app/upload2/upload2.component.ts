import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload2',
  templateUrl: './upload2.component.html',
  styleUrls: ['./upload2.component.css']
})
export class Upload2Component implements OnInit {
  public dropEle!: HTMLElement ;

  public path: Object = {
    saveUrl: 'http://localhost:49868/api/upload/save',
    removeUrl: 'http://localhost:49868/api/upload/Remove' };

  public onUploadSuccess(args: any): void  {
      if (args.operation === 'upload') {
          console.log('File uploaded successfully');
      }
  }
  
  public onUploadFailure(args: any): void  {
  console.log('File failed to upload');
  }
  

  constructor() { }

  ngOnInit(): void {

    
     this.dropEle = document.getElementById('droparea')!;
  }

}
