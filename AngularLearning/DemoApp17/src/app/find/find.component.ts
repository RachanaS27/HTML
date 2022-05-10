import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  constructor(public ss:StudentService) { }

  public student = new Student(0,'',0,0,0);
  public stud;
  find(rollNo){
    this.stud=this.ss.findStudent(rollNo);
  }
  
  ngOnInit() {
  }


}
