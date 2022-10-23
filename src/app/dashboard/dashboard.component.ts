import { Component, OnInit  , ElementRef, ViewChild, ChangeDetectorRef} from '@angular/core';
import * as io from 'socket.io-client';
import { Datas } from './room';
import { Mesure , Module } from '../mesure';
import { Chart } from 'chart.js';
//import { Data } from '../data';
import { AffichageService } from '../services/affichage.service';
import { DataService } from '../services/data.service';
//import { AddmoduleComponent } from '../addmodule/addmodule.component';
 
//import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  //data = ['Temperature', 'Humidity', 'Lighting'];
  //device =Datas;
   //tab =  [ "Temperature",  "Humidité"];
  displayedColumns = ['date_posted', 'Etage', 'Bureau', 'delete'];
 

  socket = io.connect('http://localhost:3000');
  data: Mesure[] = [];
  Data: Module[] = [];
  isLoadingResults = true;
  chartData: Chart[] = [];
  chart : any = [];
  angular: any;

  
  public DataTemp: number[] = [];
  public DataHum: number[] = [];
  public DataGaz: number[] = [];
  @ViewChild("ipt", { static: true }) h1: ElementRef;

  valeur : number ;
  constructor(private affichageService : AffichageService,
    private dataservice : DataService,
    private element: ElementRef,
    private cj : ChangeDetectorRef
    //public dialog: MatDialog, 
    
    ) { }
    getModel() {
      this.dataservice.getModule()
      .subscribe((res: any) => {
        res.nom
        res.AddIP
        this.Data = res;
       // this.Data.nom
        console.log("mesure data obj ");
        console.log(this.Data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
    }
    getSales() {
        this.affichageService.getMesure()
        .subscribe((res: any) => {
          this.data = res;
          console.log("mesure data obj ");
          console.log(this.data);
          this.isLoadingResults = false;
        }, err => {
          console.log(err);
          this.isLoadingResults = false;
        });
      }


      openDialog(): void {
        // let dialogRef = this.dialog.open(AddmoduleComponent, {
        //   width: '600px',
        //   data: 'Add Post'
        // });
        // dialogRef.componentInstance.event.subscribe((result) => {
          //this.dataService.addPost(result.data);
          //this.dataSource = new PostDataSource(this.dataService);
       // });
      }
  ngOnInit(): void {
    this.edit(this.DataTemp)
    this.getSales();
    this.getChartData();
    
    this.socket.on('update-data', function(data1: any) {
     //console.log(this.getSales()) ;
     this.getSales();
     this.getChartData();
    }.bind(this));
    //this.cj.detectChanges();
  }

 
  
    getChartData() {
      this.affichageService.getMesure()
      .subscribe((res: any) => {
        console.log(res);
        this.data= res;
        for(var i = 0,len=this.data.length;i<len;i += 1){
          if(this.data[i].nom =="Temperature")
          {
            this.DataTemp.push(this.data[i].data);
            this.valeur = this.data[i].data
            console.log(this.valeur);
            // var temp =document.getElementById("humidity")
            // temp.innerHtml = this.data[i].data;
          // this.h1.nativeElement.value = this.data[i];
          // 
          }
          else if(this.data[i].nom =="humidity"){
            this.DataHum.push(this.data[i].data);
          }
          else{
            this.DataGaz.push(this.data[i].data);
          }}

          console.log("this.DataTemp" , this.DataTemp);
          console.log("this.hum" , this.DataHum);
          console.log("this.gaz" , this.DataGaz);
          
      this.chart = new Chart("MyChart" , {    
          //     // The type of chart we want to create
         type: 'line',
         data: {// values on X-Axis
          labels: ['1s',  '10s','20s',
  								 '30s', '40s', '50', '60s' ], 
                 datasets: [
                  {
                    label: "Temperature",
                    data: 
                    this.DataTemp,
                    fill: false,
                    borderColor: "#ffcc01",
                    borderWidth: 4,
                    pointBackgroundColor: '#ffffff',
                    pointBorderColor: 'rgb(102, 187, 106)',
                    pointBorderWidth: 2,
                  },
                  {
                    label: "Humidity",
                    data: this.DataHum,
                    borderColor: "#3cba9f",
                    fill: false,
                    pointRadius: 10,
                    borderWidth: 4,
                    pointBackgroundColor: '#ffffff',
                    pointBorderColor: 'rgb(102, 187, 106)',
                    pointBorderWidth: 2,
                  }  ,
                  {
                    label: "Gaz",
                    data: this.DataGaz,
                   borderColor: '#ffb45e',
                   fill: false,
                   borderWidth: 4,
                   pointBackgroundColor: '#ffffff',
                   pointBorderColor: 'rgb(102, 187, 106)',
                   pointBorderWidth: 2,
                  }]
                },
                options: {
                  aspectRatio:2.5,
              
                }
  
            })
          })
            }
  edit(DataTemp){
    for (var val of DataTemp)
    if (DataTemp[val]== DataTemp[val -1 ]){
      this.valeur = DataTemp[val]
      return true
    }
    
  
  }
}
