import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/enterprise/src/environments/environment';
// import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class RegisterApiService {

  constructor(
    private http: HttpClient,
    // private endpoints: EndpointsService
  ) { }

  // enterpriseUrl = environment.enterpriseUrl;
  enterpriseUrl = "";

  public postProfile(profile: any): Observable<any>{
    return this.http.post(this.enterpriseUrl + "accounts/account/", profile);
  }

  public hasAccount(): Observable<any>{
    console.log(localStorage.getItem('personal_id'));
    return this.http.post(this.enterpriseUrl + "accounts/has-account/", { personal_id: localStorage.getItem('personal_id') });
  }

  public getUserAccounts(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "accounts/user-accounts?personal_id=" + localStorage.getItem('personal_id'));
  }

  public postSelectedAccount(accountId: any): Observable<any>{
    return this.http.post(this.enterpriseUrl + "accounts/active-account/", { active_account: accountId }, { withCredentials: true });
  }

}
