import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public ss:StudentService) { }
  public student = new Student(0,'',0,0,0);
  public students=[];
  ngOnInit() {
    this.students = this.ss.getAllStudents();
  }


}
