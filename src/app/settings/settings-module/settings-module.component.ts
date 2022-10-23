import { Component, OnInit, ViewChild } from '@angular/core';
import { AffichageService } from 'src/app/services/affichage.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Module } from 'src/app/mesure';
import { Observable } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { AddmoduleComponent } from 'src/app/addmodule/addmodule.component';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}



@Component({
  selector: 'app-settings-module',
  templateUrl: './settings-module.component.html',
  styleUrls: ['./settings-module.component.scss']
})
export class SettingsModuleComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource: MatTableDataSource<UserData[]>;
  Modules: Observable<Module[]>;
  id: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor( private affichageService : AffichageService,
    public dialog: MatDialog) {
  }

  

  ngOnInit(): void {
   // this.getChartData();
    this.getallModel();

  }
  openDialog() {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width : "50%",
     // height : "100%"

   // dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog result: ${result}`);
    });
  }
  openDialog1() {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width : "70%",
     // height : "100%"

   // dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog result: ${result}`);
    });
  }
  getDataModel() {
    this.affichageService.FindModel()
    .subscribe({
      next:(res=>{
        console.log(res);
        //return(res.AddIP)
      })
    })
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

getallModel(){
  this.affichageService.FindModel()
  .subscribe((res: any) => {
      console.log(res);  
      this.Modules = res;
       return(res)
   
   
    // error:(err)=>{
    //   alert("Error while fetching the records !!")
    // }
  })
} 
// deleteModel(id: string) {

//   //id=this.getallModel();
//   this.affichageService.deleteModel(id)
//     .subscribe(
//       data => {
//         console.log(data);
//         this.getallModel();
//       },
//       error => console.log(error));
// }
delete(id : string){
  ///alert('Model Deleted');
  this.affichageService.deleteModel(id).subscribe({
    next:(res=>{
      console.log(res)
      alert('Model Deleted');
      this.getallModel();
    }),
    error:(err=>{
      console.log(err)
      alert('Error while deleting the model')
    })
  })
}
}
