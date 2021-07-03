import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { City, Country, Employee, State } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  dataSaved = false;  
  employeeForm: any;  
  allEmployees!: Observable<Employee[]>;  
  dataSource!: MatTableDataSource<Employee>;  
  selection = new SelectionModel<Employee>(true, []);  
  employeeIdUpdate :number =0;  
  massage = null;  
  allCountry!: Observable<Country[]>;  
  allState!: Observable<State[]>;  
  allCity!: Observable<City[]>;  
  CountryId :number =0;  
  StateId :number =0;  
  CityId :number =0;  
  SelectedDate = null;  
  isMale = true;  
  isFeMale = false;  
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';  
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';  
  displayedColumns: string[] = ['select', 'FirstName', 'LastName', 'DateofBirth', 'EmailId', 'Gender', 'Country', 'State', 'City', 'Address', 'Pincode', 'Edit', 'Delete'];  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;  
  @ViewChild(MatSort)
  sort!: MatSort;  


  constructor(

    private formbulider: FormBuilder, 
    private employeeService: EmployeeService,
     private _snackBar: MatSnackBar, 
     public dialog: MatDialog)  
      

  {

    this.employeeService.getAllEmployee().subscribe(data => {  
      this.dataSource = new MatTableDataSource(data);  
      this.dataSource.paginator = this.paginator;  
      this.dataSource.sort = this.sort;  
    })

   }

  ngOnInit(): void {

    this.employeeForm = this.formbulider.group({  
      FirstName: ['', [Validators.required]],  
      LastName: ['', [Validators.required]],  
      DateofBirth: ['', [Validators.required]],  
      EmailId: ['', [Validators.required]],  
      Gender: ['', [Validators.required]],  
      Address: ['', [Validators.required]],  
      Country: ['', [Validators.required]],  
      State: ['', [Validators.required]],  
      City: ['', [Validators.required]],  
      Pincode: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{6}')])]  
    });  

    this.FillCountryDDL();  
    this.loadAllEmployees();  

    if (this.dataSource)
    {
      this.dataSource.paginator = this.paginator;  
      this.dataSource.sort = this.sort;  
    }

   


  }



  isAllSelected() {  
    const numSelected = this.selection.selected.length;  
    const numRows = !!this.dataSource && this.dataSource.data.length;  
    return numSelected === numRows;  
  }  
   
  masterToggle() {  
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(r => this.selection.select(r));  
  }  
   
  checkboxLabel(row: Employee): string {  
    if (!row) {  
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;  
    }  
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.empId + 1}`;  
  }  
  DeleteData() {  
    //debugger;  
    const numSelected = this.selection.selected;  
    if (numSelected.length > 0) {  
      if (confirm("Are you sure to delete items ")) {  
        this.employeeService.deleteData(numSelected).subscribe(result => { 

          console.log("result------------------->",result);

          this.SavedSuccessful(2);  
          this.loadAllEmployees();  
        })  
      }  
    } else {  
      alert("Select at least one row");  
    }  
  }  
   
  applyFilter(filterValue: string) { 

    this.dataSource.filter = filterValue.trim().toLowerCase();  
   
    if (this.dataSource.paginator) {  
      this.dataSource.paginator.firstPage();  
    }  
  }  
   
  loadAllEmployees() { 

    this.employeeService.getAllEmployee().subscribe(data => {  

      console.log("data--------------------->",data);
      this.dataSource = new MatTableDataSource(data);  
      this.dataSource.paginator = this.paginator;  
      this.dataSource.sort = this.sort;  
    });  
  }  
  onFormSubmit() {  
    this.dataSaved = false;  
    const employee = this.employeeForm.value; 
    
    console.log("this.employeeForm.value------------------>",this.employeeForm.value);
    
    this.CreateEmployee(employee);  
    this.employeeForm.reset();  
  }

  loadEmployeeToEdit(employeeId: number) { 

    this.employeeService.getEmployeeById(employeeId).subscribe(employee => {  
      this.massage = null;  
      this.dataSaved = false;  
      this.employeeIdUpdate = employee.empId;  
      this.employeeForm.controls['FirstName'].setValue(employee.firstName);  
      this.employeeForm.controls['LastName'].setValue(employee.lastName);  
      this.employeeForm.controls['DateofBirth'].setValue(employee.dateofBirth);  
      this.employeeForm.controls['EmailId'].setValue(employee.emailId);  
      this.employeeForm.controls['Gender'].setValue(employee.gender);  
      this.employeeForm.controls['Address'].setValue(employee.address);  
      this.employeeForm.controls['Pincode'].setValue(employee.pincode);  
      this.employeeForm.controls['Country'].setValue(employee.countryId);  
      this.allState = this.employeeService.getState(employee.countryId);  
      this.CountryId = employee.countryId;  
      this.employeeForm.controls['State'].setValue(employee.stateId);  
      this.allCity = this.employeeService.getCity(employee.stateId);  
      this.StateId = employee.stateId;  
      this.employeeForm.controls['City'].setValue(employee.cityid);  
      this.CityId = employee.cityid;  
      this.isMale = employee.gender.trim() == "0" ? true : false;  
      this.isFeMale = employee.gender.trim() == "1" ? true : false;  
    });  
   
  }  
  CreateEmployee(employee: Employee) { 

    console.log("employee.dateofBirth----------------->",employee.dateofBirth); 

 console.log("this.employeeIdUpdate----------------->",this.employeeIdUpdate); 
    if (this.employeeIdUpdate == 0) {  

      employee.countryId = this.CountryId;  
      employee.stateId = this.StateId;  
      employee.cityid = this.CityId;  
   
      this.employeeService.createEmployee(employee).subscribe(  
        () => {  
          this.dataSaved = true;  
          this.SavedSuccessful(1);  
          this.loadAllEmployees();  
          this.employeeIdUpdate = 0;  
          this.employeeForm.reset();  
        }  
      );  
    } else {  
      employee.empId = this.employeeIdUpdate;  
      employee.countryId = this.CountryId;  
      employee.stateId = this.StateId;  
      employee.cityid = this.CityId;  
      this.employeeService.updateEmployee(employee).subscribe(() => {  
        this.dataSaved = true;  
        this.SavedSuccessful(0);  
        this.loadAllEmployees();  
        this.employeeIdUpdate = 0;  
        this.employeeForm.reset();  
      });  
    }  
  }  
  deleteEmployee(employeeId: number) { 
     
    if (confirm("Are you sure you want to delete this ?")) {  
      this.employeeService.deleteEmployeeById(employeeId).subscribe(() => {  
        this.dataSaved = true;  
        this.SavedSuccessful(2);  
        this.loadAllEmployees();  
        this.employeeIdUpdate = 0;  
        this.employeeForm.reset();  
   
      });  
    }  
   
  }  
   
  FillCountryDDL() {  

    //console.log(" this.allCountry ------------->",this.employeeService.getCountry());


   /* this.employeeService.getCountry().subscribe(data => {  

      this.allCountry =data;

      //console.log("data--------------------->",data);
     

    });  */



    this.allCountry = this.employeeService.getCountry();  
    this.allState ;
     this.StateId ;
      this.allCity ;
       this.CityId ;
       
       


  }  
   
  FillStateDDL(SelCountryId :any) {  

    this.allState = this.employeeService.getState(SelCountryId.value);  
    this.CountryId = SelCountryId.value;  
    this.allCity ;
     this.CityId ;  
  }  
   
  FillCityDDL(SelStateId :any) {  
    this.allCity = this.employeeService.getCity(SelStateId.value);  
    this.StateId = SelStateId.value  
  }  
   
  GetSelectedCity(City:any) {  
    this.CityId = City.value;  
  }  
   
  resetForm() {  
    this.employeeForm.reset();  
    this.massage = null;  
    this.dataSaved = false;  
    this.isMale = true;  
    this.isFeMale = false;  
    this.loadAllEmployees();  
  }  
   
  SavedSuccessful(isUpdate:any) {  
    if (isUpdate == 0) {  
      this._snackBar.open('Record Updated Successfully!', 'Close', {  
        duration: 2000,  
        horizontalPosition: this.horizontalPosition,  
        verticalPosition: this.verticalPosition,  
      });  
    }  
    else if (isUpdate == 1) {  
      this._snackBar.open('Record Saved Successfully!', 'Close', {  
        duration: 2000,  
        horizontalPosition: this.horizontalPosition,  
        verticalPosition: this.verticalPosition,  
      });  
    }

    else if (isUpdate == 2) {  
      this._snackBar.open('Record Deleted Successfully!', 'Close', {  
        duration: 2000,  
        horizontalPosition: this.horizontalPosition,  
        verticalPosition: this.verticalPosition,  
      });  
    }  




}
}
