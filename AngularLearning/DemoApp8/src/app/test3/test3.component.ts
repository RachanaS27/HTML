import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  constructor() { }

  
  public names=["Rachana","Rahul","Santhosh","Deepak"];
  
  public employees=[
    {
      "id":1025,
      "name":"Deepa",
      "salary":45000.00,
      skills:["C++","HTML","JS"]
    },
    {
      "id":1026,
      "name":"Dharshan",
      "salary":55000.00,
      skills:["MySQL++","HTML","JS","Spring"]
    },
    {
      "id":1027,
      "name":"Roopa",
      "salary":30000.00,
      skills:["HTML","JS","Hibernate","jQuery"]
    },
    {
      "id":1028,
      "name":"Harshitha",
      "salary":40000.00,
      skills:["C++","HTML","JS","Hibernate","jQuery"]
    },
    {
      "id":1029,
      "name":"Yash",
      "salary":60000.00,
      skills:["C++","HTML","JS","Hibernate","jQuery","Spring"]
    }
  ]


  public technologies=["Angular","hibernate","Springboot"]
  ngOnInit() {
  }

}
