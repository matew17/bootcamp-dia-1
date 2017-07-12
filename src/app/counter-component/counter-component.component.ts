import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.css']
})
export class CounterComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  counter:number = 0;
  enable:boolean = false;
  imgSource = './../favicon.ico';

  count() {
    this.counter ++;
  }

  status() {
    this.enable = !this.enable;
  }

}
