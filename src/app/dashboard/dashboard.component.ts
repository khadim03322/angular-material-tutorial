import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { Post } from '../Post';
import { MatTableDataSource } from '@angular/material/table';

import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs/Observable';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material/dialog';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  list: any;
  constructor(private dataService: DataService, public auth: AuthService,public dialog: MatDialog) {
  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');

    console.log("------------------>debut");
     this.getList();
     
    console.log("------------------>fin");
  }


  getList(){

    this.dataService.getAllPost().subscribe((res) => {
     
      this.list = res;


      console.log("---------------->",this.list);
    
     
    });

  }


  displayedColumns = ['date_posted', 'title', 'category', 'delete'];
  dataSource = new PostDataSource(this.dataService);

  
  


  deletePost(id:any) {
    if (this.auth.isAuthenticated()) {
      this.dataService.deletePost(id);
      this.dataSource = new PostDataSource(this.dataService);
    } else {
      alert('Login in Before');
    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(PostDialogComponent, {
      width: '600px',
      data: 'Add Post'
    });
    dialogRef.componentInstance.event.subscribe((result:any) => {
      this.dataService.addPost(result.data);
      this.dataSource = new PostDataSource(this.dataService);
    });
  }



}

export class PostDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }

  connect(): Observable<Post[]> {
    return this.dataService.getData();
  }

  disconnect() {
  }
}




/*export class DashboardComponent implements OnInit {

  constructor(private dataService: DataService) { }

  public dataSource: any;
  public posts: Post[] | undefined;

  displayedColumns = ['date_posted', 'title', 'category', 'delete'];


  ngOnInit(): void {

    this.getList();

  }


 

}*/
