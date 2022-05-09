import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  constructor(public ss:StudentService) { }

  ngOnInit() {
  }

  public student;

  find(rollNo){
    this.student= this.ss.findStudent(rollNo);
  }

}
