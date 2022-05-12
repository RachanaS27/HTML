import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor(private fb:FormBuilder,private rs:RestService) { }

  public categoryForm=this.fb.group({
    id:['']
  })

  public allCategory=[]
  ngOnInit() {
    this.rs.getDataFromService()
    .subscribe(
      (data)=>{
      this.allCategory=data;
      }
    )
  }

  public category;
  search(id){
    for(let i=0;i<this.allCategory.length;i++){
      if(this.allCategory[i].id==id){
        this.rs.getDataFromServerById(id).subscribe(
          (data)=>{this.category=data
          console.log(data)}
        )
      }
    }
  }
}
