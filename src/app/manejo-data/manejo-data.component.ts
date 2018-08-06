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
 		
 	}


}
