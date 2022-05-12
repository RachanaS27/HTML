import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor(private fb:FormBuilder,private rs:RestService) { }

  ngOnInit() {
  }

  categoryForm=this.fb.group({
    name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
    description:['']
  })

  public categoryResponse;

  add(){
    let category ={
      name:this.categoryForm.get('name').value,
      description:this.categoryForm.get('description').value
    }
    this.rs.addDataToServer(category).subscribe(
      (data)=>{
        this.categoryResponse=data;
        console.log(data);
      }
    )
  }

}
