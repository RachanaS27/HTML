import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  public name = "Zensar Technologies";
  
  public person={
    first_name:"Kamala",
    last_name:"Prakash",
    age:40
  };

  public today=new Date();
  
  ngOnInit() {
  }

}
