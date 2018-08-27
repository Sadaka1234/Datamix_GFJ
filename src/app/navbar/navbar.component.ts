import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	isAdmin : boolean = true;
  logueado : boolean = true;
  	constructor() { }

	ngOnInit() {
		Observable.interval(200).subscribe(x => {
    		this.checkifAdmin();
  		});
	}

	checkifAdmin(){
		if (localStorage.getItem( 'isAdmin' ) != null){
			this.isAdmin = (localStorage.getItem( 'isAdmin' ) == "Admin");
		}
	}

  salirse(){
    localStorage.clear();
    alert("Deslogueado con éxito!");
    }



  checkiflogged(){
    if (localStorage.getItem('usuario')=== null){
      return true;
    }
    else{
      return false;
    };

  }



}
