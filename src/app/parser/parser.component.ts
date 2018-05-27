import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { GetFilenameService } from '../get-filename.service';

@Component({
  selector: 'app-parser',
  templateUrl: './parser.component.html',
  styleUrls: ['./parser.component.css']
})

export class ParserComponent implements OnInit {

  test = "I hope this works";

  archivos = [
  "haha"
  ];

  constructor(private gfn: GetFilenameService,
   	private _route: ActivatedRoute,
	private _router: Router,
	private location: Location ) { }

  ngOnInit() {
    var test = "Hello World";
    console.log( 'Hello, world!' );
    //this.gfn.getFnames();
  }


}
