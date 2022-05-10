import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(public ss:StudentService) { }

  public student = new Student(0,'',0,0,0);
  ngOnInit() {
  }


  delete(rollNo){
    this.ss.deleteStudent(rollNo);
  }

 
}
