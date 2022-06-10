import { Component, OnInit } from '@angular/core';
import { LoginFormComponent } from 'src/app/components/login-form/login-form.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  protected page: string = 'login';
  constructor() {}

  goToLogin() {
    this.page = 'login';
  }

  goToSignup() {
    this.page = 'signup';
  }

  ngOnInit(): void {}
}
