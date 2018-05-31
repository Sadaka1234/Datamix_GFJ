import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GraficosService } from '../services/graficos.service';
import { GraphData } from '../graph-data';
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
  Currfecha : string;
  Currid : string;

  TomasBus = new GraphData();

  hididbus = true;
  submitted = false;

  constructor(private chartService: GraficosService) { }

  ngOnInit() {
    this.chartService.getFechas().subscribe(rows =>{
           let f = 0;
           for (let y in rows){
             this.fechas[f] = rows[y]["DATE(horaToma)"];
             f++;
           }
     });

    //console.log(typeof this.fechas);

    this.basicChart();
  }

  onSubmit() {
    this.submitted = true;
    this.chartService.getData({"diaToma" : this.Currfecha , "idBus" : this.Currid}).subscribe(rows =>{
      console.log(rows);
      this.TomasBus.updateData(rows);
    });
    console.log(this.TomasBus);
  }

  getIds(fecha){

    this.ids = [];

    this.chartService.getIds({"horaToma":fecha}).subscribe(rows =>{
        
      for (let u in rows){
        this.ids.push(rows[u]["Asset_id"]);
      }

    });

    this.hididbus = false;
    alert("Ids Actualizados");

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
