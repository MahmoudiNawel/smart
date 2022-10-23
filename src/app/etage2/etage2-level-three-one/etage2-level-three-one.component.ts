import { Component, OnInit } from '@angular/core';
import { AffichageService } from 'src/app/services/affichage.service';
import { Mesure , Module } from 'src/app/mesure';
import * as io from 'socket.io-client';
@Component({
  selector: 'app-etage2-level-three-one',
  templateUrl: './etage2-level-three-one.component.html',
  styleUrls: ['./etage2-level-three-one.component.scss']
})
export class Etage2LevelThreeOneComponent implements OnInit {
  socket = io.connect('http://localhost:3000');
  data: Mesure[] = [];
  Data: Module[] = [];
  isLoadingResults = true;
  chartData: Chart[] = [];
  chart : any = [];
  angular: any;
  Tempval : number ;
  Humival : number ;
  Gazval : number ;

  constructor(private affichageService : AffichageService,) { }

  ngOnInit(): void {
   // this.edit(this.DataTemp)
    this.getSales();
    //this.getChartData();
    
    this.socket.on('update-data', function(data1: any) {
     //console.log(this.getSales()) ;
     this.getSales();
     this.getChartData();
    }.bind(this));
  }
  getSales() {
    this.affichageService.getMesure()
    .subscribe((res: any) => {
      this.data= res;
      for(var i = 0,len=this.data.length;i<len;i += 1){
        console.log(this.data[i].data);
        if(this.data[i].nom =="Temperature")
        {
          //this.DataTemp.push(this.data[i].data);
          this.Tempval = this.data[i].data
          console.log(this.Tempval);
        
        }
        else if(this.data[i].nom =="humidity"){
          this.Humival = this.data[i].data
          console.log(this.Humival );
        }
        else{
          //this.DataGaz.push(this.data[i].data);
          this.Gazval = this.data[i].data
          console.log(this.Gazval);
        }}
      // console.log("mesure data obj ");
      // console.log(this.data);
      // this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
  
 
}
