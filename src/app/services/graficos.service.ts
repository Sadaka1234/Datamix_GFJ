import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GraficosService {

  constructor(private http: Http) { }

  getFechas(){

    return this.http.get('/api/v1/graficos/getFechas').map(res => res.json());

  }

  getIds(data){
    console.log(data.horaToma);
    let url = '/api/v1/graficos/getIds/' + data.horaToma;

  	return this.http.get(url).map(res => res.json());

  }


}
