import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.css']
})
export class Test4Component implements OnInit {

  constructor(private rs:RestService,private fb:FormBuilder) { }


  advtForm=this.fb.group({
    name:[]
  })
  ngOnInit() {
  }

  public advertise=[]
  find(name){
    this.rs.getAdvertiseResponseByName(name).subscribe(
      (data)=>{this.advertise=data
      console.log(data)}
    )
  }


}
