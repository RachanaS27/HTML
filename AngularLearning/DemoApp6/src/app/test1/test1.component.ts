import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor() { }

  printText(v){
    console.log(v)
  }
  printNumber(n){
    console.log(n)
  }
  printPara(p){
    console.log(p)
  }

  printId(n){
    console.log(n)
    }
  ngOnInit() {
  }

}
