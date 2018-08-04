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

  @ViewChild('Velocidad') vel: ElementRef;
  @ViewChild('Combustible') fuel: ElementRef;
  @ViewChild('Temperatura') temp: ElementRef;

  fechas : any = [];
  ids : any = [];
  Currfecha : string;
  Currid : string;
  showGraphs = false;

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

  }

  onSubmit() {
    this.submitted = true;
    this.chartService.getData({"diaToma" : this.Currfecha , "idBus" : this.Currid}).subscribe(rows =>{
      this.TomasBus.updateData(rows);
      console.log("Acabo de obtener los datos");
    });
  }



  generarGraficos(){
    this.showGraphs = true;
    this.velTime();
    this.fuelTime();
    this.tempTime();
  }

  Doit(){
    this.generarGraficos();
    this.generarGraficos();

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

  velTime() {
    const element = this.vel.nativeElement;
    Plotly.purge(element);

    const data = [{
      x: this.TomasBus.Taimstamps,
      y: this.TomasBus.Velocidad
    }];

    const style = {
      margin: { t: 0 }
    };

    Plotly.plot( element, data, style );

  }

  fuelTime() {

    const element = this.fuel.nativeElement;
    Plotly.purge(element);

    const data = [{
      x: this.TomasBus.Taimstamps,
      y: this.TomasBus.Combustible
    }];

    const style = {
      margin: { t: 0 }
    };

    Plotly.plot( element, data, style );

  }

  tempTime(){

    const element = this.temp.nativeElement;
    Plotly.purge(element);

    const data = [{
      x: this.TomasBus.Taimstamps,
      y: this.TomasBus.Temperatura
    }];

    const style = {
      margin: { t: 0 }
    };

    Plotly.plot( element, data, style );

  }

  hidePlots(){
    this.submitted=false;
    this.showGraphs=false;
  }


}
