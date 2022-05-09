import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(public ss:StudentService) { }

  ngOnInit() {
  }

  public studForm=new FormGroup({
    rollNo:new FormControl(),
    name:new FormControl(),
    mark1:new FormControl(),
    mark2:new FormControl(),
    mark3:new FormControl(),
  });

  public student;

  edit(){
    this.student=this.ss.findStudent(this.studForm.get('rollNo').value);
    this.studForm.setValue({
      rollNo:this.student.rollNo,
      name:this.student.name,
      mark1:this.student.mark1,
      mark2:this.student.mark2,
      mark3:this.student.mark3
    })
  }

  update(){
    console.log(this.studForm.value);
    this.ss.updateStudent(this.studForm.value);
  }

}

