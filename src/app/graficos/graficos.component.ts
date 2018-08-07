import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GraficosService } from '../services/graficos.service';
import { GraphData } from '../graph-data';
import html2canvas from 'html2canvas';
import * as pdfMake from 'pdfmake';  //Recordar desinstalar
import * as jsPDF from 'jspdf';

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

  hidfechatoma = false;
  submitted = false;
  showgraphs = false;
  Butt = false;

  constructor(private chartService: GraficosService) { }

  ngOnInit() {

    this.GetIds();
    //this.GetFechas(5);

  }

  onSubmit() {
    this.chartService.getData({"diaToma" : this.Currfecha , "idBus" : this.Currid},this.hidfechatoma).subscribe(rows =>{
      this.TomasBus.updateData(rows);
      console.log("Acabo de obtener los datos");
      this.submitted = true;
      this.generarGraficos();
    });
  }

  generarGraficos(){
    Plotly.purge(this.vel.nativeElement);
    Plotly.purge(this.fuel.nativeElement);
    Plotly.purge(this.temp.nativeElement);
    this.showGraphs = true;
    this.velTime();
    this.fuelTime();
    this.tempTime();
  }

  getFechas(id){

    this.fechas = [];

    this.chartService.getFechas(id).subscribe(rows =>{
       let f = 0;
       for (let y in rows){
         this.fechas[f] = rows[y]["Dia_Toma"];
         f++;
       }
    });
  }

  GetIds(){

    this.ids = [];

    this.chartService.getDIds().subscribe(rows =>{
       console.log(rows);
       let f = 0;
       for (let y in rows){
         this.ids[f] = rows[y]["Asset_id"];
         if (f==0) {
           this.getFechas(this.ids[f]);
           this.Currid = this.ids[f];
         }
         f++;
       }
      this.ids = this.ids.sort();
      this.Butt = true;
    });
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
    this.hidfechatoma = false;

  }




agregarImagen(doc, id, profundidad){
  html2canvas(document.getElementById(id)).then(canvas => {
      document.body.appendChild(canvas);
      var data = canvas.toDataURL();
      doc.addImage(data, 'PNG', 5, profundidad);
    });
  }





obtReporte(){
    var doc = new jsPDF(); //210mm wide and 297mm high

    doc.text('Reporte del bus '+this.Currid, 20, 20);
    doc.text('Fecha: '+this.Currfecha, 20, 30);

    this.agregarImagen(doc, 'downloadvelocidad', 40);
    this.agregarImagen(doc, 'downloadtemperatura', 80);

    doc.addPage();

    this.agregarImagen(doc, 'downloadcombustible', 20);

    doc.save('Reporte_Bus_'+this.Currid+'_'+this.Currfecha+'.pdf');
}

}
