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
    loanId:new FormControl(),
    customerName:new FormControl(),
    loanAmount:new FormControl(0),
    dateOfLoan:new FormControl(),
    tenure:new FormControl(0),
    rateOfInterest:new FormControl(0)
  });

  add(){
    this.ss.addStudent(this.studForm.value);
    console.log(this.studForm.value)
  }
  ngOnInit() {
  }

}
