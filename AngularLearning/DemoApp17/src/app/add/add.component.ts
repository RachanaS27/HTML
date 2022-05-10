import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public ss:StudentService) { }

  public student = new Student(0,'',0,0,0);
  ngOnInit() {
  }

  add(){
    console.log(this.student)
    this.ss.addStudent(this.student);
  }

}
