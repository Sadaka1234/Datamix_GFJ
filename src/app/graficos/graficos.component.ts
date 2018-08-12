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

  doc = new jsPDF('l', 'mm', "a4");
  waiter = true;

//Datos a printear
  promVelocidad = "";
  promCombustible = "";
  promTemperatura = "";

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
      this.proVelocidad();
      this.proCombustible();
      this.proTemperatura();

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
      this.ids = this.ids.sort(function(a, b){return a-b});
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
      marker: { size: 2 }
    }];

    const style = {
      margin: { t: 10, //top margin
                l: 20, //left margin
                r: 20, //right margin
                b: 30 //bottom margin
                },
      width: 330,
      height: 200,
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
      marker: { size: 2 }
    }];

    const style = {
      margin: { t: 10, //top margin
                l: 20, //left margin
                r: 20, //right margin
                b: 30 //bottom margin
                },
      width: 330,
      height: 200,
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
      marker: { size: 2 }
    }];

    const style = {
      margin: { t: 10, //top margin
                l: 20, //left margin
                r: 20, //right margin
                b: 30 //bottom margin
                },
      width: 330,
      height: 200,
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







//Funciones promedios----------------------
proVelocidad(){
      var sum = 0;
      for( var i = 0; i < this.TomasBus.Velocidad.length; i++ ){
          sum += parseInt( this.TomasBus.Velocidad[i], 10 ); //don't forget to add the base
        };
      var avgv = sum/this.TomasBus.Velocidad.length;
      this.promVelocidad = (Math.round(avgv * 100) / 100).toFixed(2) ;
  }

proCombustible(){
        var sum = 0;
        for( var i = 0; i < this.TomasBus.Combustible.length; i++ ){
            sum += parseInt( this.TomasBus.Combustible[i], 10 ); //don't forget to add the base
          };
        var avgc = sum/this.TomasBus.Combustible.length;
        this.promCombustible = (Math.round(avgc * 100) / 100).toFixed(2) ;
    }

  proTemperatura(){
          var sum = 0;
          for( var i = 0; i < this.TomasBus.Temperatura.length; i++ ){
              sum += parseInt( this.TomasBus.Temperatura[i], 10 ); //don't forget to add the base
            };
          var avgt = sum/this.TomasBus.Temperatura.length;
          this.promTemperatura = (Math.round(avgt * 100) / 100).toFixed(2) ;
      }

obtReporte(){
     var ancho = this.doc.internal.pageSize.width;
     var alto = this.doc.internal.pageSize.height;
     //210mm wide and 297mm high
     if (!this.waiter){
         if (typeof this.Currfecha !== "undefined"){
             this.doc.save('Reporte_Bus_'+this.Currid+'_'+this.Currfecha+'.pdf');
         }
         else {
             this.doc.save('Reporte_Bus_'+this.Currid+'_All_Fechas.pdf');
         };

        }
      else{
        this.doc.addImage("theicon.png", 'PNG', 10, 10, 20, 20);
        this.doc.text('Reporte', 150,20);
        this.doc.text('Reporte del bus: '+this.Currid, 20, 40);
        if (typeof this.Currfecha !== "undefined"){
            this.doc.text('Fecha: '+this.Currfecha, 100, 40);
        }
        else {
            this.doc.text('Fecha: Todas las disponibles', 100, 40);
        };

      //  this.doc.text('Gráficos:',20, 20, 337);
        this.doc.text("Resumen:", 20, 60);
        this.doc.text("Velocidad promedio: "+this.promVelocidad+"[km/h]",20,70);
        this.doc.text("Temperatura interna promedio: "+this.promTemperatura+"[º]",20,80);
        this.doc.text("Uso combustible promedio: "+this.promCombustible+"[L/h]",20,90);


        this.agregarImagen("downtemperatura", 10,100);
        this.agregarImagen("downcombustible",106, 100);
        this.agregarImagen("downvelocida",200, 100);
        this.doc.text("Generado por DataWatch",200, 205)
        this.waiter = false;
      };
}

//Transforma html a imagen y la agrega al documento
agregarImagen(id, latitud, profundidad){
  html2canvas(document.getElementById(id)).then(canvas => {
      document.body.appendChild(canvas);
      var data = canvas.toDataURL();
      this.doc.addImage(data, 'PNG', latitud,profundidad);
    });
  }
}
