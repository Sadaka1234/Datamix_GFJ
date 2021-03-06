import { Component, OnInit } from '@angular/core';
import { ManejoDataServiceService } from '../services/manejo-data-service.service';

@Component({
  selector: 'app-manejo-data',
  templateUrl: './manejo-data.component.html',
  styleUrls: ['./manejo-data.component.css']
})
export class ManejoDataComponent implements OnInit {

	constructor(private ManData : ManejoDataServiceService) { }

	DataDias : any = [];
	Dia : String;
  itCanBeDone : Boolean = false;
  Warning : Boolean = false;
  Memes : Boolean = true;

  ngOnInit() {

		this.ManData.getFechas().subscribe( rows =>{
				
				this.Arrayfy(rows);
				console.log(this.DataDias);
  		}
		);


 	}

 	Arrayfy(Archis){
 		for (let i = 0; i < Archis.length; i ++){
 			this.DataDias[i] = Archis[i].replace('fms1-','').replace('.csv','');
 		}

 	}

 	PickDate(fecharch){
    this.Warning = false;
    this.ManData.CheckDB(fecharch).subscribe( rows =>{
       if (rows[0]["Numero"] == 0){
         this.itCanBeDone = true;
       }
       else {
         this.itCanBeDone = false;
         this.Warning = true;
       }
    });
 	}

  onSubmit(){
    this.Memes = false;
    this.ManData.LetsGetParsing(this.Dia).subscribe( rows => {
      
    });
    setTimeout(() => { this.Memes = true;this.itCanBeDone = false;}, 18000);
  }

}
