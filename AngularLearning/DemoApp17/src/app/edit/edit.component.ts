import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(public ss:StudentService) { }

  public student = new Student(0, '', 0, 0, 0);
  public stud;
  ngOnInit() {
  }

  edit(rollNo) {
    this.stud = this.ss.findStudent(rollNo);
  }

  update() {
    console.log(this.stud.value);
    this.ss.updateStudent(this.stud.value);
  }

}
