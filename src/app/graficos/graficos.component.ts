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

  doc = new jsPDF('p', 'mm', [297, 210]);
  waiter = true;


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
    var ancho = this.doc.internal.pageSize.width;
    var alto = this.doc.internal.pageSize.height;
    const element = this.vel.nativeElement;
    Plotly.purge(element);


    const data = [{
      x: this.TomasBus.Taimstamps,
      y: this.TomasBus.Velocidad,
      mode: 'markers',
      type: 'scatter',
      marker: { size: 4 }
    }];

    const style = {
      margin: { t: 25, //top margin
                l: 25, //left margin
                r: 25, //right margin
                b: 25 //bottom margin
                },
      width: ancho*0.3,
      height: alto/5,
      paper_bgcolor: 'rgba(255,255,255,0.6)',
      plot_bgcolor: 'rgba(200,200,200,1)',
      color: 'rgba(200,00,0,1)'

    };

    Plotly.plot( element, data, style );

  }

  fuelTime() {
    var ancho = this.doc.internal.pageSize.width;
    var alto = this.doc.internal.pageSize.height;

    const element = this.fuel.nativeElement;
    Plotly.purge(element);

    const data = [{
      x: this.TomasBus.Taimstamps,
      y: this.TomasBus.Combustible,
      mode: 'markers',
      type: 'scatter',
      marker: { size: 4 }
    }];

    const style = {
      margin: { t: 25, //top margin
                l: 25, //left margin
                r: 25, //right margin
                b: 25 //bottom margin
                },
      width: ancho*0.3,
      height: alto/5,
      paper_bgcolor: 'rgba(255,255,255,0.6)',
      plot_bgcolor: 'rgba(200,200,200,1)',
      color: 'rgba(200,00,0,1)'

    };

    Plotly.plot( element, data, style );

  }

  tempTime(){
    var ancho = this.doc.internal.pageSize.width;
    var alto = this.doc.internal.pageSize.height;

    const element = this.temp.nativeElement;
    Plotly.purge(element);

    const data = [{
      x: this.TomasBus.Taimstamps,
      y: this.TomasBus.Temperatura,
      mode: 'markers',
      type: 'scatter',
      marker: { size: 4 }
    }];

    const style = {
      margin: { t: 25, //top margin
                l: 25, //left margin
                r: 25, //right margin
                b: 25 //bottom margin
                },
      width: ancho*0.3,
      height: alto/5,
      paper_bgcolor: 'rgba(255,255,255,0.6)',
      plot_bgcolor: 'rgba(200,200,200,1)',
      color: 'rgba(200,00,0,1)'

    };

    Plotly.plot( element, data, style );
  }

  hidePlots(){
    this.submitted=false;
    this.showGraphs=false;
    this.hidfechatoma = false;

  }






agregarImagen(id, profundidad){
  html2canvas(document.getElementById(id)).then(canvas => {
      document.body.appendChild(canvas);
      var data = canvas.toDataURL();
      this.doc.addImage(data, 'PNG', 20, profundidad);
    });
  }





obtReporte(){
     var ancho = this.doc.internal.pageSize.width;
     var alto = this.doc.internal.pageSize.height;
     //210mm wide and 297mm high
     if (!this.waiter){
          this.doc.save('Reporte_Bus_'+this.Currid+'_'+this.Currfecha+'.pdf');
        }
      else{
        this.doc.text('Reporte del bus: '+this.Currid, 20, 40);
        this.doc.text('Fecha: '+this.Currfecha, 120, 40);
        this.doc.text('Gráficos:', 20, 337);
        this.agregarImagen("downtemperatura",240);
        this.agregarImagen("downcombustible", 180);
        this.agregarImagen("downvelocida", 50);
        this.doc.addPage();
        this.waiter = false;
      };

}

}
