import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { isError } from 'util';
import { NgForm } from '@angular/forms';
import { Account,ResponseAccount } from '../models/account';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private location: Location) { }
  private user: ResponseAccount = {
    username :'',
    password :'',
    name :'',
    lastname :'',
    email :'',
    myProject :[],
    myCart :[]
  };
  public isError = false;
  public account : Account;
  ngOnInit() { }

  onLogin(formLogin: NgForm) {
    if (formLogin.valid) {
     return  this.authService
        .loginuser(this.user)
        .subscribe(
        data => {
          this.account = data;
          console.log(data);
          this.router.navigate(['/']);
          location.reload();
          this.isError = false;
        },
        error => this.onIsError()
        );
        
    } else {
      this.onIsError();
    }
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }
}

