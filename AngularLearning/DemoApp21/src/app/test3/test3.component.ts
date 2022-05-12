import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  constructor(private fb:FormBuilder,private rs:RestService) { }

  advtForm=this.fb.group({
    id:[]
  })
  ngOnInit() {
  }


  public advertise=[]
  find(id){
    this.rs.getAdvertiseResponseById(id).subscribe(
      (data)=>{this.advertise=data
      console.log(data)}
    )
  }
}
