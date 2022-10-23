import { Component, ElementRef,OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { AffichageService } from '../services/affichage.service';
import { Mesure } from '../mesure';
import { Chart } from 'chart.js';
import { Data } from '../data';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  socket = io.connect('http://localhost:3000');
  data: Mesure[] = [];
  isLoadingResults = true;
  chartData: Chart[] = [];
  chart : any = [];
   angular: any;

  
  public DataTemp: number[] = [];
  public DataHum: number[] = [];
  public DataGaz: number[] = [];

  valeur : number ;
  content: string;


  
  constructor(private affichageService : AffichageService,
     private element: ElementRef,
     private userService: UserService) { }
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
  ngOnInit(): void {
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    //this.edit(this.DataTemp)
    this.getSales();
    this.getChartData();
    
    this.socket.on('update-data', function(data1: any) {
     //console.log(this.getSales()) ;
     this.getSales();
     this.getChartData();
    }.bind(this));
 
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
        }
        else if(this.data[i].nom =="humidity"){
          this.DataHum.push(this.data[i].data);
        }
        else{
          this.DataGaz.push(this.data[i].data);
        }}
    this.chart = new Chart("MyChart" , {
//         //     // The type of chart we want to create
       type: 'line',
       data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
               datasets: [
                {
                  label: "Temperature",
                  data: this.DataTemp,
                  //backgroundColor: 'blue'
                  fill: false,
                  borderColor: "#ffcc01",
                },
                {
                  label: "Humidity",
                  data: this.DataHum,
//    //                //backgroundColor: 'limegreen'
//    //               // backgroundColor: 'rgb(255, 99, 132)',
                  borderColor: "#3cba9f",
                  fill: false
                }  ,
                {
                  label: "Gaz",
                  data: this.DataHum,
//     //              // backgroundColor: 'black'
                 borderColor: "#ffcc00",
                 fill: false,
                }]
              },
              options: {
                aspectRatio:2.5
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
