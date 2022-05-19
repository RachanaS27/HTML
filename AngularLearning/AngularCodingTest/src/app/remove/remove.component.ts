import { Component, OnInit } from '@angular/core';
import { LoanServiceService } from '../loan-service.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {

  constructor(private ls:LoanServiceService) { }

  ngOnInit() {
  }

  delete(id){
this.ls.removeLoan(id);
  }

}
