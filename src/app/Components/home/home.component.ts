import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posterT:boolean = true;
  loginT:boolean= false;
  registerT:boolean = false;

  register():void{
    this.posterT=false;
    this.loginT=false;
    this.registerT=true;
  }

  login():void{
    this.posterT=false;
    this.registerT=false;
    this.loginT=true;
  }

  home():void{
    this.posterT=true;
    this.registerT=false;
    this.loginT=false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
