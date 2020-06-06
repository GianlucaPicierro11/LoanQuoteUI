import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public getApproximateAnnualInterestRate(): Observable<number> {
    return this.http.get<number>(environment.URL_FOR_BE + "/amortized-loan");
  }

}
