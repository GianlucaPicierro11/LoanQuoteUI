import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PtmModel } from './models/ptmModel';
import { PanModel } from './models/panModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  resultAAIR: number = 0;
  resultMonthlyRepayment: number = 0;

  approximateAnnualInterestRateForm: FormGroup;
  getMonthlyRepaymentForm: FormGroup;

  constructor(public httpService: HttpService, private fb: FormBuilder) {
    this.approximateAnnualInterestRateForm = this.fb.group({
      principal: [1],
      term: [1],
      monthlyPayment: [1],
    });
    this.getMonthlyRepaymentForm = this.fb.group({
      principal: [1],
      annualInterestRate: [1],
      numberOfPaymentPeriods: [1],
    });
  }

  ngOnInit(): void {
  }

  getApproximateAnnualInterestRate() {
    let request = new PtmModel();
    request.principal = this.approximateAnnualInterestRateForm.get("principal").value;
    request.term = this.approximateAnnualInterestRateForm.get("term").value;
    request.monthlyPayment = this.approximateAnnualInterestRateForm.get("monthlyPayment").value;
    this.httpService.getApproximateAnnualInterestRate(request).subscribe(resultAAIR => this.resultAAIR = resultAAIR);
  }

  getMonthlyRepayment() {
    let request = new PanModel();
    request.principal = this.getMonthlyRepaymentForm.get("principal").value;
    request.annualInterestRate = this.getMonthlyRepaymentForm.get("annualInterestRate").value;
    request.numberOfPaymentPeriods = this.getMonthlyRepaymentForm.get("numberOfPaymentPeriods").value;
    this.httpService.getMonthlyRepayment(request).subscribe(resultMonthlyRepayment => this.resultMonthlyRepayment = resultMonthlyRepayment);
  }
}
