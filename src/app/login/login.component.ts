import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginservice: LoginService) { }


  ngOnInit() { }

  login(form: NgForm){

  	this.loginservice.checkCredentials(form.value.usuario,form.value.password).subscribe( rows => {
      if (rows){
        console.log(rows[0].tipo);
        localStorage.setItem( 'usuario',form.value.usuario);
        localStorage.setItem( 'isAdmin',rows[0].tipo);
        this.router.navigate(['/']);
      }
    });

  }

}
