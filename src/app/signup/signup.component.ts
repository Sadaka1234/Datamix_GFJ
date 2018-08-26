import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private loginservice: LoginService) { }

  isValid : boolean = true;

  ngOnInit() {
  }

  signup(form: NgForm){
  	let Datos = {
  		"Usuario":form.value.username,
  		"Pass":form.value.password,
  		"Mail":form.value.email,
  		"Tipo":"Usuario"
  	};
  	console.log(Datos);
  	this.loginservice.SignUp(Datos).subscribe( rows => {
      this.isValid = rows
      if (rows){
        console.log("Registro Existoso");
        localStorage.setItem( 'usuario',form.value.usuario);
        localStorage.setItem( 'isAdmin',"Usuario");
        this.router.navigate(['/']);
      }
    });
  }

}
