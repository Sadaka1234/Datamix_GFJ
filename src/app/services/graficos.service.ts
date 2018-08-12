import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GraficosService {

  constructor(private http: Http) { }

  getFechas(id){
    let url = '/api/v1/graficos/getFechas/' + id; 
    return this.http.get(url).map(res => res.json());

  }

  getData(data,diaEspecifico){
    let url;
    if (diaEspecifico){
      url = '/api/v1/graficos/getData/' + data.diaToma + '/' + data.idBus;
    }
    else {
      url = '/api/v1/graficos/getDataAll/' + data.idBus;
    }
  	return this.http.get(url).map(res => res.json());
  }

  getDIds(){
    return this.http.get('/api/v1/graficos/getDIds').map(res => res.json());
  }


}
