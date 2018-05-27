import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GraficosService } from '../services/graficos.service';
//import * as _ from 'lodash';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})

/*export class GraficosComponent implements OnInit {
  

  ngOnInit() {
      
  }

}*/

export class GraficosComponent implements OnInit {

  @ViewChild('chart') el: ElementRef;

  fechas : any = [];
  ids : any = [];

  constructor(private chartService: GraficosService) { }

  ngOnInit() {
    this.chartService.getFechas().subscribe(rows =>{
           let f = 0;
           for (let y in rows){
             if (f == 0){

               this.getIds(rows[y]["DATE(horaToma)"]);

             }
             this.fechas[f] = rows[y]["DATE(horaToma)"];
             f++;
           }
     });

    //console.log();
    //console.log(typeof this.fechas);

    this.basicChart();
  }

  getIds(fecha){

    this.ids = [];

    this.chartService.getIds({"horaToma":fecha}).subscribe(rows =>{
        
      for (let u in rows){
        this.ids.push(rows[u]["Asset_id"]);
      }

    });

  }

  basicChart() {
    const element = this.el.nativeElement

    const data = [{
      x: [1, 2, 3, 4, 50],
      y: [1, 2, 4, 8, 16]
    }]

    const style = {
      margin: { t: 0 }
    }

    Plotly.plot( element, data, style );

  }

}
