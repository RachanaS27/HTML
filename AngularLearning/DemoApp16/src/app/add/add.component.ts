import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public ss:StudentService) { }

  public studForm=new FormGroup({
    rollNo:new FormControl(),
    name:new FormControl(),
    mark1:new FormControl(0),
    mark2:new FormControl(0),
    mark3:new FormControl(0),
  });

  add(){
    this.ss.addStudent(this.studForm.value);
    console.log(this.studForm.value)
  }
  ngOnInit() {
  }

}
