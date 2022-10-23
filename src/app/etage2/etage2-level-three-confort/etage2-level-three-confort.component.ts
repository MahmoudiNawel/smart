import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Mesure } from 'src/app/mesure';
import { AffichageService } from 'src/app/services/affichage.service';

@Component({
  selector: 'app-etage2-level-three-confort',
  templateUrl: './etage2-level-three-confort.component.html',
  styleUrls: ['./etage2-level-three-confort.component.scss']
})
export class Etage2LevelThreeConfortComponent implements OnInit {
  public chart: any;
  data: Mesure[] = [];
  isLoadingResults = true;
  chartData: Chart[] = [];
  angular: any;
  valeur : number ;
  
  public DataCO2: number[] = [];
  public DataTVOC: number[] = [];

  constructor(private affichageService : AffichageService) { }

  ngOnInit(): void {
    this. getChartData();
  }
  getChartData() {
    this.affichageService.getMesure()
    .subscribe((res: any) => {
      console.log(res);
      this.data= res;
      for(var i = 0,len=this.data.length;i<len;i += 1){
        if(this.data[i].nom =="CO2")
        {
          this.DataCO2.push(this.data[i].data);
          this.valeur = this.data[i].data
          console.log(this.valeur);
          // var temp =document.getElementById("humidity")
          // temp.innerHtml = this.data[i].data;
        // this.h1.nativeElement.value = this.data[i];
        // 
        }
        else if(this.data[i].nom =="TVOC"){
          this.DataTVOC.push(this.data[i].data);
        }
       }


        console.log("this.DataCO2" , this.DataCO2);
        console.log("this.DataTVOC" , this.DataTVOC);
      
        this.createChart(this.DataCO2 ,this.DataTVOC);
      })
    }
createChart(DataTVOC ,DataCO2){

this.chart = new Chart("MyChart", {
  type: 'bar', //this denotes tha type of chart

  data: {// values on X-Axis
    labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
             '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
     datasets: [
      {
        label: "CO2",
        data: DataCO2,
        backgroundColor: 'blue'
      },
      {
        label: "TVOC",
        data: DataTVOC,
        backgroundColor: 'red'
      }
    ]
  },
  options: {
    aspectRatio: 1
  }
  
});
}
}
