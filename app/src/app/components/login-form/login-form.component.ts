import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { share } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [AuthService],
})
export class LoginFormComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService, private router: Router) {}

  async onSubmit() {
    const request = this.authService.signin(this.loginForm.value).pipe(share());

    request.subscribe({
      next: (user) => {
        this.authService.login(user);
        this.router.navigateByUrl('/home');
      },
      error: (err) => {
        console.log(err.status);
      },
    });
  }

  ngOnInit(): void {}
}
