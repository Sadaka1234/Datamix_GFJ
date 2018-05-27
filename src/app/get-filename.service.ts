import { Injectable } from '@angular/core';
import * as culo from 'fs';


@Injectable()
export class GetFilenameService {

  constructor() { }

  getFnames(){

  	console.log(typeof(culo.readdirSync));
  	let files = culo.readdirSync('./');
  	//console.log("Los Archivos son: " + files);

  }

}
