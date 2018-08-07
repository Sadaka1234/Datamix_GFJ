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
  	let url = "/api/v1/mandata/CheckDB/" + archidate;
  	return this.http.get(url).map(res => res.json());
  }

  LetsGetParsing(archidate){
  	let url = "/api/v1/mandata/LetsGetParsing/" + archidate;
  	return this.http.get(url).map(res => res.json());
  }

}
