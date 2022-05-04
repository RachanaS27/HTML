import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.css']
})
export class Test4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sendMail(){
    console.log("Mail sent")
  }

  mouseOnParagraph(){
    console.log("mouse is on paragraph")
  }
  
  mouseNotOnParagraph(){
    console.log("mouse not on paragraph")
  }
  
}
