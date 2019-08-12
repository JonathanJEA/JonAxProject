import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from "util";


import {ResponseAccount,Account} from "../models/account";
@Injectable({

  providedIn: "root"
})
export class AuthService {
  constructor(private htttp: HttpClient) {}
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  registerUser(user: Account) {
    const url_api = "http://localhost:50505/api/Account/SignUp";
    return this.htttp
      .post<ResponseAccount>(
        url_api,
        user,
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }

  loginuser(user:ResponseAccount): Observable<any> {
    const url_api = "http://localhost:50505/api/Account/SignIn";
    return this.htttp
      .post<Account>(
        url_api,
        user,
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }



}
