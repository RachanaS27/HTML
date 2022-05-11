import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor() { }

  public rollNo;
  public name;
  public mark1;
  public mark2;
  public mark3;

  ngOnInit() {
  }

}
