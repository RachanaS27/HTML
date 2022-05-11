import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

  simpleForm=this.fb.group({
    myName:['Zensar',Validators.required],
    myEmail:['',[Validators.minLength(5),Validators.maxLength(15)]],
    mySalary:['0',[Validators.min(1000),Validators.max(5000)]]
  })

}
