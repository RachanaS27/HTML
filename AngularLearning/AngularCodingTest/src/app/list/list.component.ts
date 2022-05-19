import { Component, OnInit } from '@angular/core';
import { CustomLoan } from '../Customloan';
import { LoanServiceService } from '../loan-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private ls:LoanServiceService) { }

  loanCustomers = [];
   interest=[]
   emi=[]
   cust=new CustomLoan(0,'',0,new Date(),0,0);

  ngOnInit() {
    this.loanCustomers=this.ls.getAllLoans();

  }

  
  }



