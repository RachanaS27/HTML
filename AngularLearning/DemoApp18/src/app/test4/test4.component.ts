import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.css']
})
export class Test4Component implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

  simpleForm=this.fb.group({
    rollNo:['0',Validators.required],
    name:['',[Validators.minLength(3),Validators.maxLength(15)]],
    mark1:['0',[Validators.min(0),Validators.max(100)]],
    mark2:['0',[Validators.min(0),Validators.max(100)]],
    mark3:['0',[Validators.min(0),Validators.max(100)]],
  })

}
