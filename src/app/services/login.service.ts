import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  checkCredentials(usr,pass){

  	let url = "/api/v1/login/" + usr + "/" + pass;
  	return this.http.get(url).map(res => res.json());
  }

  SignUp(Datos){

  	let url = "/api/v1/signup/" + Datos["Usuario"] + "/" + Datos["Pass"] + "/" +  Datos["Mail"] + "/" + Datos["Tipo"];
  	console.log(url);
  	return this.http.get(url).map(res => res.json());

  }


}
