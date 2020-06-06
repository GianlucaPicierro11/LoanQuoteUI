import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PtmModel } from './models/ptmModel';
import { PanModel } from './models/panModel';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public getApproximateAnnualInterestRate(obj: PtmModel): Observable<number> {
    return this.http.post<number>(environment.URL_FOR_BE + "/amortized-loan/approximate-annual-interest-rate", obj);
  }
  public getMonthlyRepayment(obj: PanModel): Observable<number> {
    return this.http.post<number>(environment.URL_FOR_BE + "/amortized-loan/monthly-repayment", obj);
  }

}
