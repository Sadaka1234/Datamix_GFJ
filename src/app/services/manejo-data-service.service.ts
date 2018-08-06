import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ManejoDataServiceService {

  constructor(private http: Http) { }


  getFechas(){
  	return this.http.get('/api/v1/mandata/getFechas').map( res => res.json());
  }

  CheckDB(archidate){
  	let newarchi = "fms1-" + archidate + ".csv";
  	//return this.http.get()
  }

}
