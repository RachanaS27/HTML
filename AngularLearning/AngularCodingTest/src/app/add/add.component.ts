import { Component, OnInit } from '@angular/core';
import { LoanServiceService } from '../loan-service.service';
import { CustomLoan } from '../Customloan'
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private ls:LoanServiceService) { }


  ngOnInit() {
  }


  public customerForm=new FormGroup({
    loanId:new FormControl(),
    customerName:new FormControl(),
    loanAmount:new FormControl(0),
    dateOfLoan:new FormControl(new Date()),
    tenure:new FormControl(0),
    rateOfInterest:new FormControl(0)
  });

  add(){
    console.log(this.customerForm.value)
    this.ls.addLoan(this.customerForm.value);
  }
}
